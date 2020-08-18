import React from "react"
import NavBar from "../components/navBar"

export default ({ children })=> (
    <React.Fragment>
        <NavBar></NavBar>
        <main className="container-fluid bg-dark" style={{ minHeight: "100vh", marginTop: 40 }}>
            <div className="row">
                <div className="col-10 m-auto py-5 d-flex flex-row flex-wrap">
                    { children }
                </div>
            </div>
        </main>
    </React.Fragment>
)