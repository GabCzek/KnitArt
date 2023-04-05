import Main from "./js/main.js";
import "./App.scss";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Template from "./js/templateCreation/CreateTemplate";
import TemplateGallery from "./js/templateGallery/TemplateGallery"
import ProjectGallery from "./js/projectGallery/ProjectGallery"

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/template' element={<Template/>}/>
                <Route path='/template-gallery' element={<TemplateGallery />}/>
                <Route path='/project-gallery' element={<ProjectGallery />}/>
            </Routes>
        </HashRouter>
    )
}


export default App;
