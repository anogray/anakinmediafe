
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export default function AppRouter(){



    return(
        <div className="container">
        <Router>
                <Routes>
                {/* <Route path="/" component={HomePage} exact /> */}
                <Route path="/" element={<HomePage />}></Route>

                </Routes>
        </Router>
        
        </div>
    )
}