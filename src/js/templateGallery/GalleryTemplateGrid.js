import React from "react";

const GalleryTemplateGrid = ({gridColor}) => {
    const arr = new Array(18 * 18).fill('');

    return (
        <div className="templates-grid">
            <div className="template-gallery-grid"
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
        </div>
    )
};

export default GalleryTemplateGrid;