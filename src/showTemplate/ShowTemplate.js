import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ShowTemplateDisplay from "./ShowTemplateDisplay";
import ShowTemplateInfo from "./ShowTemplateInfo";

function ShowTemplate({templates, windowWidth}) {
    const {id} = useParams();
    const template = templates.find(obj => {
        return obj.id === id;
    });

    console.log(windowWidth)

    const filterArray = templates.length > 0 && template.grid.filter(el => {
        let numberOfStitches = templates.length > 0 && template.stitches;
        let highestIdNumber = templates.length > 0 && (template.stitches * template.rows);
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
                        name={template.name}
                        counter={counter + 1}
                        currentRow={currentRow}
                        rows={template.rows}
                        templatesLength={templates.length}
                        stitches={template.stitches}
                        windowWidth={windowWidth}
                        grid={template.grid}
                        className="showTemplate-info-container"/>
                    <ShowTemplateDisplay
                        stitches={template.stitches}
                        currentRow={currentRow}
                        rows={template.rows}
                        templatesLength={templates.length}
                        handleArrowUp={handleArrowUp}
                        handleArrowDown={handleArrowDown}
                        counter={counter}
                        grid={template.grid}
                        windowWidth={windowWidth}
                        className="showTemplate-display"
                    />
                </div>
        }
        </div>
    )
}

export default ShowTemplate;
