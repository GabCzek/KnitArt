import React, {useEffect, useState} from "react";
import ShowTemplateRow from "./ShowTemplateRow";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const ShowTemplateDisplay = ({
                                 templatesLength,
                                 stitches,
                                 currentRow,
                                 className,
                                 handleArrowUp,
                                 handleArrowDown,
                                 counter,
                                 grid,
                                 rows,
                                 windowWidth

                             }) => {

    let gridRowClassName;
    let currentRowSize;
    let gridRowClassNamePhone;
    let currentRowSizePhone;

    if ((templatesLength > 0 && stitches > 0) && (templatesLength > 0 && stitches <= 25)) {
        gridRowClassName = "small";
        gridRowClassNamePhone = "smallPhone";
        currentRowSize = 1.4;
        currentRowSizePhone = 1;
    } else if ((templatesLength > 0 && stitches > 20) && (templatesLength > 0 && stitches <= 40)) {
        gridRowClassName = "normal";
        gridRowClassNamePhone = "normalPhone";
        currentRowSize = 1.1;
        currentRowSizePhone = 0.5;
    } else if ((templatesLength > 0 && stitches > 40) && (templatesLength > 0 && stitches <= 60)) {
        gridRowClassName = "big";
        gridRowClassNamePhone = "bigPhone";
        currentRowSize = 0.8;
        currentRowSizePhone = 0.4;
    } else if ((templatesLength > 0 && stitches > 60) && (templatesLength > 0 && stitches <= 80)) {
        gridRowClassName = "biggest";
        gridRowClassNamePhone = "biggestPhone";
        currentRowSize = 0.5;
        currentRowSizePhone = 0.23;
    }

    const [touchPosition, setTouchPosition] = useState(null)
// ...
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientY
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientY
        const diff = touchDown - currentTouch

        if (diff < 5 && counter < +rows - 1) {
            handleArrowUp()
        }


        if (diff > -5 && counter > 0) {
            handleArrowDown()
        }

        setTouchPosition(null)
    }


    return (
        <section className={className} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div >
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={windowWidth >= 820 ? currentRowSize : currentRowSizePhone}
                    row={currentRow}
                    gridRowClassName={windowWidth >= 820 ? gridRowClassName : gridRowClassNamePhone}
                    counter={counter + 2}
                    rows={rows}
                    grid={grid}
                    templatesLength={templatesLength}
                    className="showTemplate-display-rowAfterNext"
                />
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={windowWidth >= 820 ? currentRowSize : currentRowSizePhone}
                    row={currentRow}
                    gridRowClassName={windowWidth >= 820 ? gridRowClassName : gridRowClassNamePhone}
                    counter={counter + 1}
                    rows={rows}
                    grid={grid}
                    templatesLength={templatesLength}
                    className="showTemplate-display-nextRow"
                />
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={windowWidth >= 820 ? currentRowSize : currentRowSizePhone}
                    row={currentRow}
                    gridRowClassName={windowWidth >= 820 ? gridRowClassName : gridRowClassNamePhone}
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
                    currentRowSize={windowWidth >= 820 ? currentRowSize : currentRowSizePhone}
                    row={currentRow}
                    gridRowClassName={windowWidth >= 820 ? gridRowClassName : gridRowClassNamePhone}
                    counter={counter - 1}
                    rows={rows}
                    grid={grid}
                    templatesLength={templatesLength}
                    className="showTemplate-display-previousRow"
                />
                <ShowTemplateRow
                    stitches={stitches}
                    currentRowSize={windowWidth >= 820 ? currentRowSize : currentRowSizePhone}
                    row={currentRow}
                    grid={grid}
                    rows={rows}
                    gridRowClassName={windowWidth >= 820 ? gridRowClassName : gridRowClassNamePhone}
                    templatesLength={templatesLength}
                    counter={counter - 2}
                    className="showTemplate-display-rowBeforePrevious"
                />
            </div>
            {windowWidth >= 820 ?
                <div className="showTemplate-display-arrows">
                    <button className="showTemplate-display-arrows-btn" disabled={counter > rows - 2}
                            onClick={handleArrowUp}>
                        <i className="fa-solid fa-caret-up"></i>
                    </button>
                    <button className="showTemplate-display-arrows-btn" disabled={counter <= 0}
                            onClick={handleArrowDown}>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                </div> : null}

        </section>
    )
}

export default ShowTemplateDisplay;