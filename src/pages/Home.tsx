// deno-lint-ignore no-unused-vars
import React from "react";

function Home() {
    return (
        <div className="container py-5 text-white">
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold">React + Vite + Deno</h1>
                <p className="lead text-muted">
                    Explore modern tools for building web applications!
                </p>
            </header>

            <div className="row text-center">
                <div className="col-md-4 mb-4 logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="React Logo"
                        className="img-fluid rounded"
                        style={{maxHeight: "150px"}}
                    />
                    <p className="mt-2 fw-bold">React</p>
                </div>

                <div className="col-md-4 mb-4 logo">
                    <img
                        src="https://vitejs.dev/logo.svg"
                        alt="Vite Logo"
                        className="img-fluid rounded"
                        style={{maxHeight: "150px"}}
                    />
                    <p className="mt-2 fw-bold">Vite</p>
                </div>

                <div className="col-md-4 mb-4 logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg"
                        alt="Deno Logo"
                        className="img-fluid rounded"
                        style={{maxHeight: "150px"}}
                    />
                    <p className="mt-2 fw-bold">Deno</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                    <h1>Tech Stack</h1>
                    <ul className="list-unstyled">
                        <li>React</li>
                        <li>Vite</li>
                        <li>Deno</li>
                        <li>Bootstrap</li>
                        <li>Sass</li>

                    </ul>
                </div>
            </div>
        </div>

    );
}


export default Home;