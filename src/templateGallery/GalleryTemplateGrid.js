import React from "react";


const GalleryTemplateGrid = ({templates, template}) => {
    const size = template.stitches > 24 || template.rows > 24 ? "0.12em" : "0.4em";

    // let size2;
    // if(template.stitches <= 20 || template.rows <= 20 ) {
    //     size2 = "0.5em";
    // } else if ((template.stitches > 20 || template.rows > 20) && (template.stitches <= 40 || template.rows <= 40)) {
    //     size2 = "0.2em";
    // } else if ((template.stitches > 40 || template.rows > 40) && (template.stitches <= 60 || template.rows <= 60)) {
    //     size2 = "0.2em";
    // } else if (template.stitches > 60 || template.rows > 60) {
    //     size2 = "0.1em";
    // }


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