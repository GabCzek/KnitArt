import React from "react";
import ProjectImages from "./ProjectImgs";
import ProjectInfo from "./ProjectInfo";


const SingleProject = ({color, img, gridColor}) => {

    return (
        <section style={{backgroundColor: color}} className="single-project">
            <ProjectImages img={img} gridColor={gridColor}/>
            <ProjectInfo color={color}/>
        </section>
    )
};

export default SingleProject;