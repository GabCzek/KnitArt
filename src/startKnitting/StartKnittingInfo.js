import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowTemplateInfo = ({
  templatesLength,
  grid,
  name,
  rows,
  stitches,
  className,
  currentRow,
  counter,
  windowWidth,
  handleShow,
}) => {
  const [thisRow, setThisRow] = useState(currentRow);

  const size = templatesLength > 40 || rows > 40 ? "0.2" : "0.4";
  const phoneSize = templatesLength > 40 || rows > 40 ? "0.09" : "0.2";

  useEffect(() => {
    const filterArray2 =
      templatesLength > 0 &&
      grid.filter((el) => {
        const numberOfStitches = templatesLength > 0 && stitches;
        const highestIdNumber = templatesLength > 0 && stitches * rows;
        const currentHighestIdNumber =
          highestIdNumber - stitches * (counter - 1);
        return (
          el.id < currentHighestIdNumber &&
          el.id >= currentHighestIdNumber - numberOfStitches
        );
      });
    templatesLength > 0 && setThisRow(filterArray2.map((el) => el.id));
  }, [counter]);

  const handleBtnClick = () => {
    handleShow(true);
    document.getElementById("gallery-template").scrollIntoView();
  };

  return (
    <section className={className}>
      <div className="showTemplate-info">
        <h2>{name}</h2>
        <span>Current row: {counter}</span>
        <p>Of all rows: {Math.round((counter / rows) * 100)}%</p>
        {windowWidth >= 820 ? (
          <Link to="/template-gallery" className="link showTemplate-info-link">
            <button className="showTemplate-info-link">Change</button>
          </Link>
        ) : (
          <button onClick={handleBtnClick} className="showTemplate-info-link">
            Change
          </button>
        )}
      </div>
      <div>
        <div className="showTemplate-grid-container">
          {templatesLength > 0 && (
            <div
              className="showTemplate-grid"
              style={{
                gridTemplateColumns: `repeat(${stitches}, ${
                  windowWidth >= 820 ? size : phoneSize
                }em)`,
              }}
            >
              {grid.map((el, i) => (
                <div
                  key={i}
                  className={thisRow.includes(el.id) ? "currentRow" : null}
                  style={{
                    backgroundColor: `${
                      className !== "currentRow" ? el.color : null
                    }`,
                    borderRadius: "50%",
                    height: `${windowWidth >= 820 ? size : phoneSize}em`,
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowTemplateInfo;
