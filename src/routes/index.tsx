import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "../page/home"

export const PublicRoute = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </Router>
    )

}