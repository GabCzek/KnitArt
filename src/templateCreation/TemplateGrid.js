import React, {useState, useEffect} from "react";
import TemplateIcons from "./TemplateIcons";

const TemplateGrid = ({columns, rows, activeColor, primaryColor, handleGridChange, handleSubmitTemplate, windowWidth}) => {
    const elementSize = rows > 20 || columns > 20 ? "1.2em" : "1.4em";
    const elementSizeMobile = "0.9em"
    const [template, setTemplate] = useState([]);

    const handleClick = (id) => {
        const tempTemplate = [...template];
        tempTemplate[id].color = activeColor;
        setTemplate(tempTemplate);
    };


    useEffect(() => {
        const newTemplate = [...Array(rows * columns)].map((el, i) => ({
            id: i,
            color: primaryColor,
        }));
        setTemplate(newTemplate);
        handleGridChange(newTemplate);
    }, [columns, rows, primaryColor]);

    return (<>
            <div className="template-grid-container">
                <div
                    className="template-grid"
                    style={{
                        gridTemplateColumns: `repeat(${columns}, ${windowWidth <= 820 ? elementSizeMobile : elementSize})`,
                    }}
                >
                    {template.length > 0 &&
                        template.map((el, i) => {
                            return (
                                <div
                                    key={el.id}
                                    className="template-grid-item"
                                    onClick={() => handleClick(el.id)}
                                    style={{
                                        backgroundColor: el.color,
                                        height: `${windowWidth <= 820 ? elementSizeMobile : elementSize}`,
                                    }}
                                />
                            );
                        })}
                </div>
            </div>
            {windowWidth <= 820 ? <TemplateIcons handleSubmitTemplate={handleSubmitTemplate}/> : null}
        </>
    );
};

export default TemplateGrid;
