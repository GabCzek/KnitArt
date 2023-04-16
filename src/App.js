import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import React, {useState, useEffect} from "react";

import "./App.scss";
import Main from "./home/main.js";
import Template from "./templateCreation/CreateTemplate";
import TemplateGallery from "./templateGallery/TemplateGallery";
import ProjectGallery from "./projectGallery/ProjectGallery";
import ShowTemplate from "./showTemplate/ShowTemplate"
import {onSnapshot, doc} from "firebase/firestore";
import {templatesColRef} from "./firebase";

function App() {
    const [templates, setTemplates] = useState([]);

    useEffect(
        () =>
            onSnapshot(templatesColRef, (snapshot) =>
                setTemplates(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
            ), [])


    const routeDefinitions = createRoutesFromElements(
        <Route>
            <Route path="/" element={<Main/>}/>
            <Route path="/template" element={<Template/>}/>
            <Route path="/template-gallery" element={<TemplateGallery templates={templates}/>}/>
            <Route path="/project-gallery" element={<ProjectGallery/>}/>
            <Route path='/show-template/:id' element={<ShowTemplate templates={templates}/>}/>
        </Route>
    );
    const router = createBrowserRouter(routeDefinitions);
    return <RouterProvider router={router}/>;
}

export default App;
