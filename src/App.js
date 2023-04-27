import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.scss";
import Home from "./home/Home.js";
import Template from "./templateCreation/CreateTemplate";
import TemplateGallery from "./templateGallery/TemplateGallery";
import Dashboard from "./dashboard/Dashboard";
import ShowTemplate from "./showTemplate/ShowTemplate";
import Mobile from "./mobile/Mobile";
import { onSnapshot, doc } from "firebase/firestore";
import { templatesColRef } from "./firebase";

function App() {
  const [templates, setTemplates] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);

  const [isOpenTemplate, setIsOpenTemplate] = useState(false);
  const [isOpenShowTemplate, setIsOpenShowTemplate] = useState(false);
  const [isOpenTemplateGallery, setIsOpenTemplateGallery] = useState(false);
  const [height, setHeight] = useState("100%");

  const [showTemplateGallery, setShowTemplateGallery] = useState(true);

  const handleShowTemplateGallery = (showTemplateGallery) => {
    setShowTemplateGallery(showTemplateGallery)
  }

  // useEffect(() => {
  //   if (
  //     isOpenTemplate === false &&
  //     isOpenShowTemplate === false &&
  //     isOpenTemplateGallery === false
  //   ) {
  //     setHeight("calc(100vh - 48px)");
  //   } else {
  //     setHeight("100%");
  //   }
  // }, [isOpenTemplate, isOpenShowTemplate, isOpenTemplateGallery]);

  const handleIsOpenShowTemplate = (isOpenTemplate) => {
    setIsOpenTemplate(isOpenTemplate);
  };

  const handleIsOpenTemplate = (isOpenShowTemplate) => {
    setIsOpenShowTemplate(isOpenShowTemplate);
  };

  const handleIsOpenTemplateGallery = (isOpenTemplateGallery) => {
    setIsOpenTemplateGallery(isOpenTemplateGallery);
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
                height={height}
                handleIsOpenShowTemplate={handleIsOpenShowTemplate}
                handleIsOpenTemplate={handleIsOpenTemplate}
                handleIsOpenTemplateGallery={handleIsOpenTemplateGallery}
                handleShowTemplateGallery={handleShowTemplateGallery}
              />
            }
          />
        )}
        <Route
          path="/template"
          element={
            <Template
              windowWidth={windowWidth}
              handleIsOpenTemplate={handleIsOpenTemplate}
            />
          }
        />
        <Route
          path="/template-gallery"
          element={
            <TemplateGallery
              templates={templates}
              windowWidth={windowWidth}
              handleIsOpenTemplateGallery={handleIsOpenTemplateGallery}
              handleShowTemplateGallery={handleShowTemplateGallery}
            />
          }
        />
        <Route
          path="/show-template"
          element={
            <ShowTemplate
              templates={templates}
              windowWidth={windowWidth}
              handleIsOpenShowTemplate={handleIsOpenShowTemplate}
            />
          }
        />
        <Route
          path="/show-template/:id"
          element={
            <ShowTemplate
              templates={templates}
              windowWidth={windowWidth}
              handleIsOpenShowTemplate={handleIsOpenShowTemplate}
            />
          }
        />
      </Route>
    </Route>
  );
  const router = createBrowserRouter(routeDefinitions);
  return <RouterProvider router={router} />;
}

export default App;
