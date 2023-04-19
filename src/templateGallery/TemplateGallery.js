import React from "react";
import SingleGalleryTemplate from "./SingleGalleryTemplate";


const TemplateGallery = ({templates, windowWidth}) => {
    const color1 = "#F0E0D6";
    const color2 = "#1D7874";
    let gridColumns;

    if (windowWidth >= 1440) {
        gridColumns = 3
    } else if (windowWidth < 1440 && windowWidth >= 900) {
        gridColumns = 2
    } else {
        gridColumns = 1
    }

    return (
        <div className="container gallery-template-container-media">
            {windowWidth <= 820 &&
                <div className="gallery-template-title">
                    <h2 >Template Gallery</h2>
                </div>
            }
            <div className="main-container gallery-template-container"
                 style={{gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}>
                {templates.map((template, i) =>
                    <SingleGalleryTemplate key={i}
                                           className={`gallery-template-${i + 1} gallery-template`}
                                           colorId={i + 1}
                                           templates={templates}
                                           template={template}
                                           color1={color1}
                                           color2={color2}
                    />)}
            </div>
        </div>
    )
};

export default TemplateGallery;