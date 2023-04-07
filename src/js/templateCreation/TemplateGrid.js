import React, {useState} from "react";
import '../../scss/elements/templateGrid.scss';

const TemplateGrid = ({columns, rows}) => {
    const arr = new Array(rows * columns).fill('');
    const [color, setColor] = useState("#679289");
    const elementHeight = rows >= 20 ? "1.5em" : "2em"
    const elementWidth = columns >= 20 ? "1.5em" : "2em"

    const handleClick = (e) => {
        e.target.style.backgroundColor = "#852E0F";
    }


    return (
        <div className="template-grid"
             style={{
                 display: "grid",
                 gridTemplateColumns: `repeat(${columns}, ${elementWidth})`,
                 gap: 1
             }}>
            {arr.map((el, i) => <div onClick={e => handleClick(e)} key={i} style={{
                backgroundColor: color,
                borderRadius: "50%",
                height: elementHeight,
                cursor: "pointer"
            }}>{el}</div>)}
        </div>
    )
}

export default TemplateGrid;