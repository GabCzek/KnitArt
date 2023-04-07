import React from "react";

const ProjectInfo = ({color}) => {
    const textColor = color === "#1D7874" ? "#FFF" : "#000";

    return (
        <div className="project-info" style={{color: textColor}}>
            <div className="project_main-info">
                <span>Name:</span>
                <span>Description:</span>
            </div>
            <div className="project_specific-info">
                <span>Wool:</span>
                <span>Needles:</span>
                <span>Stitches:</span>
                <span>Rows:</span>
            </div>
        </div>
    )
};

export default ProjectInfo;