import React from "react";
import ShowTemplateRow from "./ShowTemplateRow";

const ShowTemplateDisplay = ({
                                 templatesLength,
                                 stitches,
                                 currentRow,
                                 className,
                                 handleArrowUp,
                                 handleArrowDown,
                                 counter,
                                 grid,
                                 rows
                             }) => {

    let gridRowClassName;
    let currentRowSize;

    if ((templatesLength > 0 && stitches > 0) && (templatesLength > 0 && stitches <= 25)) {
        gridRowClassName = "small";
        currentRowSize = "1.4";
    } else if ((templatesLength > 0 && stitches) && (templatesLength > 0 && stitches <= 50)) {
        gridRowClassName = "normal"
        currentRowSize = "1.1"
    } else if ((templatesLength > 0 && stitches) && (templatesLength > 0 && stitches <= 75)) {
        gridRowClassName = "big"
        currentRowSize = "0.8"
    } else if ((templatesLength > 0 && stitches) && (templatesLength > 0 && stitches <= 100)) {
        gridRowClassName = "biggest"
        currentRowSize = "0.6"
    }

    return (
        <section className={className}>
            <div>
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={currentRowSize}
                    row={currentRow}
                    gridRowClassName={gridRowClassName}
                    counter={counter + 2}
                    rows={rows}
                    grid={grid}
                    templatesLength={templatesLength}
                    className="showTemplate-display-rowAfterNext"
                />
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={currentRowSize}
                    row={currentRow}
                    gridRowClassName={gridRowClassName}
                    counter={counter + 1}
                    rows={rows}
                    grid={grid}
                    templatesLength={templatesLength}
                    className="showTemplate-display-nextRow"
                />
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={currentRowSize}
                    row={currentRow}
                    gridRowClassName={gridRowClassName}
                    handleArrowUp={handleArrowUp}
                    handleArrowDown={handleArrowDown}
                    counter={counter}
                    rows={rows}
                    grid={grid}
                    templatesLength={templatesLength}
                    className="showTemplate-display-currentRow"
                />
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={currentRowSize}
                    row={currentRow}
                    gridRowClassName={gridRowClassName}
                    counter={counter - 1}
                    rows={rows}
                    grid={grid}
                    templatesLength={templatesLength}
                    className="showTemplate-display-previousRow"
                />
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={currentRowSize}
                    row={currentRow}
                    grid={grid}
                    rows={rows}
                    gridRowClassName={gridRowClassName}
                    templatesLength={templatesLength}
                    counter={counter - 2}
                    className="showTemplate-display-rowBeforePrevious"
                />
            </div>
            <div className="showTemplate-display-arrows">
                <button className="showTemplate-display-arrows-btn" disabled={counter > rows - 2}
                        onClick={handleArrowUp}>
                    <i className="fa-solid fa-caret-up"></i>
                </button>
                <button className="showTemplate-display-arrows-btn" disabled={counter <= 0} onClick={handleArrowDown}>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
            </div>
        </section>
    )
}

export default ShowTemplateDisplay;