import React, {useEffect, useState} from "react";
const ShowTemplateInfo = ({templatesLength, grid, name, rows, stitches, className, currentRow, counter}) => {
    const size = (templatesLength > 0 && rows > 25) ? "0.2" : "0.5";
    const [thisRow, setThisRow] = useState(currentRow)

    useEffect(() => {
        const filterArray2 = templatesLength > 0 && grid.filter(el => {
            const numberOfStitches = templatesLength > 0 && stitches;
            const highestIdNumber = templatesLength > 0 && stitches * rows
            const currentHighestIdNumber = highestIdNumber - (stitches * (counter-1))
            return (
                el.id < currentHighestIdNumber && el.id >= currentHighestIdNumber - numberOfStitches
            )
        })
        templatesLength > 0 && setThisRow(filterArray2.map(el => el.id))
    }, [counter])

    return (
        <section className={className}>
            <div className="showTemplate-info">
                <h2>{name}</h2>
                <span>Current row: {counter}</span>
                <p>Of all rows: {Math.round(((counter) /rows)*100)}%</p>
            </div>
            <div>
                <div className="showTemplate-grid-container">
                    {templatesLength > 0 &&
                        <div className="showTemplate-grid"
                             style={{
                                 gridTemplateColumns: `repeat(${stitches}, ${size}em)`,
                             }}>
                            {grid.map((el, i) => <div key={i} className={thisRow.includes(el.id) ? "currentRow" : null} style={{
                                backgroundColor: `${className !== "currentRow" ? el.color : null}`,
                                borderRadius: "50%",
                                height: `${size}em`
                            }}
                            ></div>)}
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default ShowTemplateInfo;