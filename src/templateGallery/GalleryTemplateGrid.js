import React from "react";


const GalleryTemplateGrid = ({templates, template}) => {
    // const size = template.stitches > 24 || template.rows > 24 ? "0.2em" : "0.5em";

    let size2;
    if(template.stitches <= 20 || template.rows <= 20 ) {
        size2 = "0.5em";
    } else if ((template.stitches > 20 || template.rows > 20) && (template.stitches <= 40 || template.rows < 40)) {
        size2 = "0.2em";
    } else if ((template.stitches > 40 || template.rows > 40) && (template.stitches <= 60 || template.rows < 60)) {
        size2 = "0.2em";
    } else {
        size2 = "0.1em";
    }


    return (
            <div className="templates-grid">
                {templates.length > 0 &&
                    <div className="template-gallery-grid"
                         style={{
                             gridTemplateColumns: `repeat(${template.stitches}, ${size2})`,
                         }}>
                        {templates.length > 0 && template.grid.map((el, i) => <div key={i} style={{
                            backgroundColor: el.color,
                            borderRadius: "50%",
                            height: size2
                        }}></div>)}
                    </div>}
            </div>
    )
};

export default GalleryTemplateGrid;