import React, { useEffect, useState } from "react";

const ShowTemplateRow = ({
  stitches,
  currentRowSize,
  row,
  gridRowClassName,
  className,
  counter,
  templatesLength,
  grid,
  rows,
  id,
}) => {
  const [thisRow, setThisRow] = useState(row);

  useEffect(() => {
    const filterArray2 =
      templatesLength > 0 &&
      grid.filter((el) => {
        const numberOfStitches = templatesLength > 0 && stitches;
        const highestIdNumber = templatesLength > 0 && stitches * rows;
        const currentHighestIdNumber = highestIdNumber - stitches * counter;
        return (
          el.id < currentHighestIdNumber &&
          el.id >= currentHighestIdNumber - numberOfStitches
        );
      });
    templatesLength > 0 && setThisRow(filterArray2);
  }, [counter, id]);

  return (
    <div className="showTemplate-display-row">
      <div
        className={className}
        style={{
          gridTemplateColumns: `repeat(${stitches}, ${currentRowSize}em)`,
        }}
      >
        {thisRow.map((el, i) => (
          <div
            key={i}
            className={gridRowClassName}
            style={{
              backgroundColor: el.color,
              borderRadius: "50%",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ShowTemplateRow;
