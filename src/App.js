import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import React, {useState} from "react";

import "./App.scss";
import Main from "./home/main.js";
import Template from "./templateCreation/CreateTemplate";
import TemplateGallery from "./templateGallery/TemplateGallery";
import ProjectGallery from "./projectGallery/ProjectGallery";
import ShowTemplate from "./showTemplate/ShowTemplate"
import {onSnapshot, doc} from "firebase/firestore";
import {templatesColRef} from "./firebase";

function App() {
    const [templates, setTemplates] = useState();

    onSnapshot(templatesColRef, (snapshot) => {
        const x = [];
        snapshot.docs.forEach((doc) => {
            x.push({...doc.data(), id: doc.id})
        })
        setTemplates(x)
        console.log(templates)
    })

    const routeDefinitions = createRoutesFromElements(
        <Route>
            <Route path="/" element={<Main/>}/>
            <Route path="/template" element={<Template/>}/>
            <Route path="/template-gallery" element={<TemplateGallery/>}/>
            <Route path="/project-gallery" element={<ProjectGallery/>}/>
            <Route path='/show-template/:id' element={<ShowTemplate/>}/>
        </Route>
    );
    const router = createBrowserRouter(routeDefinitions);
    return <RouterProvider router={router}/>;
}

export default App;
