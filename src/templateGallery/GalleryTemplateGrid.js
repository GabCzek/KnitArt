import React from "react";


const GalleryTemplateGrid = ({templates, template}) => {
    const size = template.stitches > 25 || template.rows > 25 ? "0.3em" : "0.5em";

    return (
            <div className="templates-grid">
                {templates.length > 0 &&
                    <div className="template-gallery-grid"
                         style={{
                             gridTemplateColumns: `repeat(${template.stitches}, ${size})`,
                         }}>
                        {templates.length > 0 && template.grid.map((el, i) => <div key={i} style={{
                            backgroundColor: el.color,
                            borderRadius: "50%",
                            height: size
                        }}></div>)}
                    </div>}
            </div>
    )
};

export default GalleryTemplateGrid;