import React from "react";

import TemplateInfoForm from "./TemplateInfoForm";
import TemplateIcons from "./TemplateIcons";

const TemplateInfo = ({
  rows,
  columns,
  name,
  changeName,
  handleSubmitTemplate,
  changePrimaryColor,
  changeSecondaryColor,
  changeTertiaryColor,
  changeActiveColor,
  changeRows,
  changeColumns,
  windowWidth,
  createNewArray,
}) => (
  <div className="template-info">
    <TemplateInfoForm
      rows={rows}
      columns={columns}
      name={name}
      changeName={changeName}
      changeRows={changeRows}
      changeColumns={changeColumns}
      changePrimaryColor={changePrimaryColor}
      changeSecondaryColor={changeSecondaryColor}
      changeTertiaryColor={changeTertiaryColor}
      changeActiveColor={changeActiveColor}
      windowWidth={windowWidth}
    />
    {windowWidth >= 820 ? (
      <TemplateIcons
        handleSubmitTemplate={handleSubmitTemplate}
        createNewArray={createNewArray}
      />
    ) : null}
  </div>
);

export default TemplateInfo;
