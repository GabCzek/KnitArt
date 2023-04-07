import React, {useState} from "react";
const ProjectImages = ({img, gridColor}) => {
    const arr = new Array(18 * 18).fill('');

    return (
        <div className="project-images">
            <div className="project-gallery-grid"
                 style={{
                     display: "grid",
                     gridTemplateColumns: `repeat(18, 0.6em)`,
                     gap: 1
                 }}>
                {arr.map((el, i) => <div key={i} style={{
                    backgroundColor: gridColor,
                    borderRadius: "50%",
                    height: "0.6em",
                    cursor: "pointer"
                }}>{el}</div>)}
            </div>
            <img src={img} alt="woman wearing knitted scarf" className="scarf-img"/>
        </div>
    )
};

export default ProjectImages;