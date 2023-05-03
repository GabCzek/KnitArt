import React from "react";


const GalleryTemplateGrid = ({templates, template}) => {
    const size = template.stitches > 30 || template.rows > 30 ? "0.12em" : "0.3em";

    return (
            <div className="templates-grid">
            {templates.length > 0 &&
                <div className="gallery-template-grid"
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