import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.scss";
import Main from "./js/main.js";
import Template from "./js/templateCreation/CreateTemplate";
import TemplateGallery from "./js/templateGallery/TemplateGallery";
import ProjectGallery from "./js/projectGallery/ProjectGallery";

function App() {
  const routeDefinitions = createRoutesFromElements(
    <Route>
      <Route path="/" element={<Main />} />
      <Route path="/template" element={<Template />} />
      <Route path="/template-gallery" element={<TemplateGallery />} />
      <Route path="/project-gallery" element={<ProjectGallery />} />
    </Route>
  );
  const router = createBrowserRouter(routeDefinitions);
  return <RouterProvider router={router} />;
}

export default App;
