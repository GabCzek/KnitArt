import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ShowTemplateRow from "./ShowTemplateRow";


function ShowTemplate({templates}) {
    const {id} = useParams();

    const currentTemplate = templates.find(obj => {
        return obj.id === id;
    });

    const size = (templates.length > 0 && currentTemplate.stitches > 25) || (templates.length > 0 && currentTemplate.rows > 25) ? "0.4" : "0.5";

    const filterArray = templates.length > 0 && currentTemplate.grid.filter(el => {
        let numberOfStitches = templates.length > 0 && currentTemplate.stitches;
        let highestIdNumber = templates.length > 0 && (currentTemplate.stitches * currentTemplate.rows);
        return (
            el.id < highestIdNumber && el.id >= highestIdNumber - numberOfStitches
        )
    })

    const [currentRow, setCurrentRow] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        templates.length > 0 && setCurrentRow(filterArray)
    }, [templates])

    let gridRowClassName;
    if ((templates.length > 0 && currentTemplate.stitches > 0) && (templates.length > 0 && currentTemplate.stitches <= 25)) {
        gridRowClassName = "small"
    } else if ((templates.length > 0 && currentTemplate.stitches > 25) && (templates.length > 0 && currentTemplate.stitches <= 50)) {
        gridRowClassName = "normal"
    } else if ((templates.length > 0 && currentTemplate.stitches > 50) && (templates.length > 0 && currentTemplate.stitches <= 75)) {
        gridRowClassName = "big"
    } else if ((templates.length > 0 && currentTemplate.stitches > 75) && (templates.length > 0 && currentTemplate.stitches <= 100)) {
        gridRowClassName = "biggest"
    }

    let currentRowSize;
    if (gridRowClassName === "small") {
        currentRowSize = "1.4em"
    } else if (gridRowClassName === "normal") {
        currentRowSize = "1.1em"
    } else if (gridRowClassName === "big") {
        currentRowSize = "0.8em"
    } else if (gridRowClassName === "biggest") {
        currentRowSize = "0.6em"
    }

    const handleArrowUp = () => {
        setCounter(prev => prev + 1)
    }
    const handleArrowDown = () => {
        setCounter(prev => prev - 1)
    }

    useEffect(() => {
        const filterArray2 = templates.length > 0 && currentTemplate.grid.filter(el => {
            const numberOfStitches = templates.length > 0 && currentTemplate.stitches;
            const highestIdNumber = templates.length > 0 && currentTemplate.stitches * currentTemplate.rows
            const currentHighestIdNumber = highestIdNumber - (currentTemplate.stitches * counter)
            return (
                el.id < currentHighestIdNumber && el.id >= currentHighestIdNumber - numberOfStitches
            )
        })
        templates.length > 0 && setCurrentRow(filterArray2)
    }, [counter])


    return (
        <div className="container">
            {templates.length > 0 &&
                <div className="main-container showTemplate-main-container">
                    <section className="showTemplate-info-container">
                        <div className="showTemplate-info">
                            <h2>{currentTemplate.name}</h2>
                            <p>Current row: {counter + 1}</p>
                        </div>
                        <div>
                            <div className="showTemplate-grid-container">
                                {templates.length > 0 &&
                                    <div className="showTemplate-grid"
                                         style={{
                                             gridTemplateColumns: `repeat(${currentTemplate.stitches}, ${size}em)`,
                                         }}>
                                        {currentTemplate.grid.map((el, i) => <div key={i} style={{
                                            backgroundColor: el.color,
                                            borderRadius: "50%",
                                            height: `${size}em`
                                        }}></div>)}
                                    </div>}
                            </div>
                        </div>
                    </section>
                    <section className="showTemplate-display">
                        <ShowTemplateRow
                            stitches={currentTemplate.stitches}
                            currentRowSize={currentRowSize}
                            currentRow={currentRow}
                            gridRowClassName={gridRowClassName}
                            className="showTemplate-display-rowBeforePrevious"
                        />
                        <ShowTemplateRow
                            stitches={currentTemplate.stitches}
                            currentRowSize={currentRowSize}
                            currentRow={currentRow}
                            gridRowClassName={gridRowClassName}
                            className="showTemplate-display-previousRow"
                        />
                        <ShowTemplateRow
                            stitches={currentTemplate.stitches}
                            currentRowSize={currentRowSize}
                            currentRow={currentRow}
                            gridRowClassName={gridRowClassName}
                            handleArrowUp={handleArrowUp}
                            handleArrowDown={handleArrowDown}
                            className="showTemplate-display-currentRow"
                        />
                        <ShowTemplateRow
                            stitches={currentTemplate.stitches}
                            currentRowSize={currentRowSize}
                            currentRow={currentRow}
                            gridRowClassName={gridRowClassName}
                            className="showTemplate-display-previousRow"
                        />
                        <ShowTemplateRow
                            stitches={currentTemplate.stitches}
                            currentRowSize={currentRowSize}
                            currentRow={currentRow}
                            gridRowClassName={gridRowClassName}
                            className="showTemplate-display-rowBeforePrevious"
                        />
                    </section>
                </div>}
        </div>
    )
}

export default ShowTemplate;
