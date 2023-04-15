import React from "react";
const ShowTemplateInfo = ({templatesLength, grid, name, rows, stitches, className, currentRow}) => {
    const size = (templatesLength > 0 && rows > 25) ? "0.2" : "0.5";

    return (
        <section className={className}>
            <div className="showTemplate-info">
                <h2>{name}</h2>
                <span>Current row: {currentRow}</span>
                <p>Of all rows: {Math.round(((currentRow) /rows)*100)}%</p>
            </div>
            <div>
                <div className="showTemplate-grid-container">
                    {templatesLength > 0 &&
                        <div className="showTemplate-grid"
                             style={{
                                 gridTemplateColumns: `repeat(${stitches}, ${size}em)`,
                             }}>
                            {grid.map((el, i) => <div key={i} style={{
                                backgroundColor: el.color,
                                borderRadius: "50%",
                                height: `${size}em`
                            }}></div>)}
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default ShowTemplateInfo;