import React from "react";

import ColorPicker from "./ColorPicker";

const TemplateInfoForm = ({ rows, columns, changeRows, changeColumns }) => {
  const handleRowsChange = ({ target: { value } }) => {
    changeRows(value);
  };

  const handleColumnsChange = ({ target: { value } }) => {
    changeColumns(value);
  };

  return (
    <form>
      <label className="template-label">
        Number of rows:
        <input onChange={handleRowsChange} value={rows} type="number" />
      </label>
      <label className="template-label">
        Number of stitches:
        <input onChange={handleColumnsChange} value={columns} type="number" />
      </label>
      <label className="template-label">
        Choose main color:
        <ColorPicker />
      </label>
      <label className="template-label">
        Choose second color:
        <ColorPicker />
      </label>
      <label className="template-label">
        Choose third color:
        <ColorPicker />
      </label>
    </form>
  );
};

export default TemplateInfoForm;
