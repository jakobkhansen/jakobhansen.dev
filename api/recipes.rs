use std::{env, fs::read_to_string, path::Path};

use cooklang::{Converter, CooklangParser, Extensions};
use serde_json::{json, to_string};
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(_req: Request) -> Result<Response<Body>, Error> {
    let root = Path::new(env!("CARGO_MANIFEST_DIR"));
    let path = root.join("data/recipes/chickenparmesan.cook");

    let parser = CooklangParser::new(Extensions::all(), Converter::default());
    let recipe = match read_to_string(path) {
        Ok(contents) => parser.parse(&contents).unwrap_output(),
        Err(error) => {
            println!("{:?}", error);
            panic!()
        }
    };

    let content = to_string(&recipe).unwrap();

    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(content.into())?)
}
