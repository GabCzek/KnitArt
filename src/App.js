import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import "./App.scss";
import Main from "./home/main.js";
import Template from "./templateCreation/CreateTemplate";
import TemplateGallery from "./templateGallery/TemplateGallery";
import ProjectGallery from "./projectGallery/ProjectGallery";
import FireBaseTest from "./FireBaseTest"

function App() {
    const routeDefinitions = createRoutesFromElements(
        <Route>
            <Route path="/" element={<Main/>}/>
            <Route path="/template" element={<Template/>}/>
            <Route path="/template-gallery" element={<TemplateGallery/>}/>
            <Route path="/project-gallery" element={<ProjectGallery/>}/>
            <Route path="firebase-test" element={<FireBaseTest/>}/>
        </Route>
    );
    const router = createBrowserRouter(routeDefinitions);
    return <RouterProvider router={router}/>;
}

export default App;
