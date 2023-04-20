import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import React, {useState, useEffect} from "react";

import "./App.scss";
import Home from "./home/Home.js";
import Template from "./templateCreation/CreateTemplate";
import TemplateGallery from "./templateGallery/TemplateGallery";
import Dashboard from "./dashboard/Dashboard";
import ProjectGallery from "./projectGallery/ProjectGallery";
import ShowTemplate from "./showTemplate/ShowTemplate"
import Mobile from "./mobile/Mobile";
import {onSnapshot, doc} from "firebase/firestore";
import {templatesColRef} from "./firebase";

function App() {
    const [templates, setTemplates] = useState([]);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(
        () =>
            onSnapshot(templatesColRef, (snapshot) =>
                setTemplates(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
            ), [])

    useEffect(() => {
        updateDimensions();
        window.addEventListener(`resize`, updateDimensions);
        return () =>
            window.removeEventListener(`resize`, updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }


    const routeDefinitions = createRoutesFromElements(
        <Route>
            <Route element={<Dashboard windowWidth={windowWidth}/>}>
                {windowWidth >= "820" ? <Route path="/" element={<Home/>}/> :
                    <Route path="/" element={<Mobile templates={templates} windowWidth={windowWidth}/>}/>}
                <Route path="/template" element={<Template windowWidth={windowWidth}/> }/>
                <Route path="/template-gallery" element={<TemplateGallery templates={templates} windowWidth={windowWidth}/>}/>
                <Route path="/show-template" element={<ShowTemplate templates={templates} windowWidth={windowWidth}/>}/>
                <Route path='/show-template/:id' element={<ShowTemplate templates={templates} windowWidth={windowWidth}/>}/>
            </Route>
        </Route>
    );
    const router = createBrowserRouter(routeDefinitions);
    return <RouterProvider router={router}/>;
}

export default App;
