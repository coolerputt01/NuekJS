use axum::{Router,routing::post,response::Html,Json};
use serde::Deserialise;
use std::net::SocketAddr;
use tower_http::cors::CorsLayer;
use tower::ServiceBuilder::layer;

#[derive(Deserialise)]
struct RenderHTMLAsJSON {
    html: String,
}

async fn renderHTML(Json(body) : Json<RenderHTMLAsJSON>) -> Html<String> {
    Html(format!("{}",body.html));
}
#[tokio::main]
async fn main() {
    let cors = CorsLayer::very_permissive();
    let app = Router::new().route("/render",post(renderHTML)).layer(cors);
    let addr = SocketAddr::from(([127,0,0,1],3000));
    println!("Listening on port: 3000.\n");
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();

}
