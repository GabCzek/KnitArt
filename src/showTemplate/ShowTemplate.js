import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ShowTemplateDisplay from "./ShowTemplateDisplay";
import ShowTemplateInfo from "./ShowTemplateInfo";

function ShowTemplate({templates}) {
    const {id} = useParams();

    const currentTemplate = templates.find(obj => {
        return obj.id === id;
    });


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

    const handleArrowUp = () => {
        setCounter(prev => prev + 1)
    }
    const handleArrowDown = () => {
        setCounter(prev => prev - 1)
    }

    return (
        <div className="container">
            {templates.length > 0 &&
                <div className="main-container showTemplate-main-container">
                    <ShowTemplateInfo
                        name={currentTemplate.name}
                        currentRow={counter + 1}
                        rows={currentTemplate.rows}
                        templatesLength={templates.length}
                        stitches={currentTemplate.stitches}
                        grid={currentTemplate.grid}
                        className="showTemplate-info-container"/>
                    <ShowTemplateDisplay
                        stitches={currentTemplate.stitches}
                        currentRow={currentRow}
                        rows={currentTemplate.rows}
                        templatesLength={templates.length}
                        handleArrowUp={handleArrowUp}
                        handleArrowDown={handleArrowDown}
                        counter={counter}
                        grid={currentTemplate.grid}
                        className="showTemplate-display"
                    />
                </div>}
        </div>
    )
}

export default ShowTemplate;
