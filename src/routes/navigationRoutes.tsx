import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/home/home.tsx";

export const NavigationRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
};

