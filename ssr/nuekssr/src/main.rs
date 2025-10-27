use axum::{Router,routing::post,response::Html,Json,serve};
use serde::Deserialize;
use tower_http::cors::CorsLayer;
use tokio::net::TcpListener;

#[derive(Deserialize)]
struct RenderHTMLAsJSON {
    html: String,
}

async fn render_html(Json(body) : Json<RenderHTMLAsJSON>) -> Html<String> {
    Html(format!("{}",body.html))
}
#[tokio::main]
async fn main() {
    let cors = CorsLayer::very_permissive();
    let app = Router::new().route("/render",post(render_html)).layer(cors);

    let port: u16 = std::env::var("PORT")
        .unwrap_or_else(|_| "3000".to_string())
            .parse()
                .expect("PORT must be a number");
    let tcp_listener = TcpListener::bind(("0.0.0.0",port)).await.expect("Server failed to listen for requests");

    println!("Listening on port...\n");
    serve(tcp_listener,app).await.expect("Server failed to startup");
}
