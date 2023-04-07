import React from "react";
import '../../scss/elements/ProjectGallery.scss';
import '../../scss/general/variables.scss';
import scarf from "../../images/scarf.png";
import sweater from "../../images/sweaters.png";
import blanket from "../../images/blanket.png";
import SingleProject from "./SingleProject";

const ProjectGallery = () => {
    const color1 = "#1D7874";
    const color2 = "#F0E0D6";
    const color3 = "#679289";



    return (
        <div className="container">
            <div className="main-container main-container-projects">
                <div className="all-projects">
                    <SingleProject color={color1} img={scarf} gridColor={color3}/>
                    <SingleProject color={color2} img={sweater} gridColor={color1}/>
                    <SingleProject color={color3} img={blanket} gridColor={color2}/>
                </div>
            </div>
        </div>
    )
};

export default ProjectGallery;