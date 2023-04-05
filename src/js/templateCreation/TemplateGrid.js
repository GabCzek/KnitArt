import React from "react";

const templateGrid = ({columns, rows}) => {
    const arr = new Array(rows * columns).fill('')

    return (
        <div className="template-grid"
             style={{
                 display: "grid",
                 gridTemplateColumns: `repeat(${columns}, 2em)`,
                 gap: 1
             }}>
            {arr.map((el, i) => <div key={i} style={{
                backgroundColor: '#679289',
                borderRadius: "50%",
                height: "2em"
            }}>{el}</div>)}
        </div>
    )
}

export default templateGrid;