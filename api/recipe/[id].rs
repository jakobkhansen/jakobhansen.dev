use std::{collections::HashMap, env};

use cooklang::{Converter, CooklangParser, Extensions};
use url::Url;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(req: Request) -> Result<Response<Body>, Error> {
    let parsed_url = Url::parse(&req.uri().to_string()).unwrap();
    let hash_query: HashMap<String, String> = parsed_url.query_pairs().into_owned().collect();
    let recipe_name = hash_query.get("id");

    let root = env::current_dir().unwrap();
    let folder = root.join("data/recipes");
    let file = folder.join(format!("{}.cook", recipe_name.unwrap()));

    let contents = std::fs::read_to_string(file).unwrap();

    let parser = CooklangParser::new(Extensions::all(), Converter::default());

    let recipe = parser.parse(&contents).unwrap_output();

    let json = serde_json::to_string(&recipe).unwrap();

    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(json.into())?)
}
