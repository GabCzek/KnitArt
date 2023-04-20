import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ShowTemplateDisplay from "./ShowTemplateDisplay";
import ShowTemplateInfo from "./ShowTemplateInfo";

function ShowTemplate({templates, windowWidth}) {
    const {id} = useParams();
    const [show, setShow] = useState(true);
    const [height, setHeight] = useState("100%")

    const template = id === undefined ?
        templates[2]
        : templates.find(obj => {
            return obj.id === id;
        })    ;

    useEffect(() => {
        setShow(windowWidth >= 820)
        console.log("x")
    }, [windowWidth])

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

    useEffect(() => {
        if (windowWidth < 820) {
            show === false ? setHeight("auto") : setHeight("30em")
        }
    }, [show])
    const handleClick = () => {
        setShow(prev => !prev)
    }

    return (
        <div className="container mediaContainer" style={{height: height}}>
            {windowWidth < 820 &&
                <div className="showTemplate-info-title" onClick={handleClick}>
                    <h2>Show current template</h2>
                </div>
            }
            {templates.length > 0 && show &&
                <div className={`main-container showTemplate-main-container`}>
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
