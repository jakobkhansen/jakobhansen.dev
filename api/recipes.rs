use std::{
    env,
    fs::{read_dir, read_to_string},
    path::Path,
};

use cooklang::{Converter, CooklangParser, Extensions};
use serde_json::to_string;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(_req: Request) -> Result<Response<Body>, Error> {
    let root = Path::new(env!("CARGO_MANIFEST_DIR"));
    let folder = root.join("data/recipes");
    let rootfiles = read_dir(root).unwrap();
    println!("{:?}", rootfiles);
    let files = match read_dir(folder.clone()) {
        Ok(files) => files,
        Err(error) => {
            println!("{:?} {:?}", error, folder);
            panic!()
        }
    };
    let cookfiles = files
        .filter_map(|file| {
            let file = file.unwrap();
            let path = file.path();
            if path.extension().unwrap() == "cook" {
                Some(path)
            } else {
                None
            }
        })
        .collect::<Vec<_>>();

    let parser = CooklangParser::new(Extensions::all(), Converter::default());
    let recipes = cookfiles
        .iter()
        .map(|file| {
            let contents = read_to_string(file).unwrap();
            parser.parse(&contents).unwrap_output()
        })
        .collect::<Vec<_>>();

    println!("{:?}", recipes);

    //     match read_to_string(folder) {
    //     Ok(contents) => parser.parse(&contents).unwrap_output(),
    //     Err(error) => {
    //         println!("{:?}", error);
    //         panic!()
    //     }
    // };

    let json = serde_json::to_string(&recipes).unwrap();

    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(json.into())?)
}
