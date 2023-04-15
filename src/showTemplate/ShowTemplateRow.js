import React from "react";

const ShowTemplateRow = ({
                             stitches,
                             currentRowSize,
                             currentRow,
                             gridRowClassName,
                             handleArrowUp,
                             handleArrowDown,
                             className
                         }) => {


    return (
        <div className="showTemplate-display-row">
            <div className>
                <div className={className}
                     style={{
                         gridTemplateColumns: `repeat(${stitches}, ${currentRowSize})`,
                     }}>
                    {currentRow.map((el, i) => <div key={i} className={gridRowClassName} style={{
                        backgroundColor: el.color,
                        borderRadius: "50%"
                    }}></div>)}
                </div>
            </div>
            {className === "showTemplate-display-currentRow" &&
                <div className="showTemplate-display-arrows">
                    <i className="fa-solid fa-caret-up" onClick={handleArrowUp}></i>
                    <i className="fa-solid fa-caret-down" onClick={handleArrowDown}></i>
                </div>
            }
        </div>
    )
}

export default ShowTemplateRow;