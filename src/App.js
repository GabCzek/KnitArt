import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { templatesColRef } from "./firebase";

import "./App.scss";
import Home from "./home/Home";
import Template from "./templateCreation/CreateTemplate";
import TemplateGallery from "./templateGallery/TemplateGallery";
import Dashboard from "./dashboard/Dashboard";
import StartKnitting from "./startKnitting/StartKnitting";
import Mobile from "./mobile/Mobile";
import EditTemplate from "./editTemplate/EditTemplate";

function App() {
  const [templates, setTemplates] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [show, setShow] = useState(true);

  const handleShow = (show) => {
    setShow(show);
  };

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  useEffect(
    () =>
      onSnapshot(templatesColRef, (snapshot) =>
        setTemplates(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  useEffect(() => {
    updateDimensions();
    window.addEventListener(`resize`, updateDimensions);
    return () => window.removeEventListener(`resize`, updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const routeDefinitions = createRoutesFromElements(
    <Route>
      <Route element={<Dashboard windowWidth={windowWidth} />}>
        {windowWidth >= "820" ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route
            path="/"
            element={
              <Mobile
                templates={templates}
                windowWidth={windowWidth}
                show={show}
                handleShow={handleShow}
                handleClick={handleClick}
              />
            }
          />
        )}
        <Route
          path="/:id"
          element={
            <Mobile
              templates={templates}
              windowWidth={windowWidth}
              show={show}
              handleShow={handleShow}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/template"
          element={
            <Template windowWidth={windowWidth} handleShow={handleShow} />
          }
        />
        <Route
          path="/template-gallery"
          element={
            <TemplateGallery
              templates={templates}
              windowWidth={windowWidth}
              show={show}
              handleShow={handleShow}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/show-template"
          element={
            <StartKnitting templates={templates} windowWidth={windowWidth} />
          }
        />
        <Route
          path="/show-template/:id"
          element={
            <StartKnitting templates={templates} windowWidth={windowWidth} />
          }
        />
        <Route
          path="/edit-template/:id"
          element={
            <EditTemplate templates={templates} windowWidth={windowWidth} />
          }
        />
      </Route>
    </Route>
  );
  const router = createBrowserRouter(routeDefinitions);
  return <RouterProvider router={router} />;
}

export default App;
