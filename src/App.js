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
import ShowTemplate from "./showTemplate/ShowTemplate"
import FireBaseTest from "./FireBaseTest"
import {getDocs} from "firebase/firestore";
import {templatesColRef} from "./config/firebase";
import {useState, useEffect} from "react";

function App() {
    const [templates, setTemplates] = useState([]);
    const getTemplates = async () => {
        try {
            const data = await getDocs(templatesColRef)
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setTemplates(filteredData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getTemplates();
    }, []);

    const routeDefinitions = createRoutesFromElements(
        <Route>
            <Route path="/" element={<Main/>}/>
            <Route path="/template" element={<Template/>}/>
            <Route path="/template-gallery" element={<TemplateGallery templates={templates} getTemplates={getTemplates}/>}/>
            <Route path="/project-gallery" element={<ProjectGallery/>}/>
            <Route path='/show-template/:id' element={<ShowTemplate templates={templates} />}/>
            <Route path="firebase-test" element={<FireBaseTest/>}/>
        </Route>
    );
    const router = createBrowserRouter(routeDefinitions);
    return <RouterProvider router={router}/>;
}

export default App;
