import React from "react";

import TemplateInfoForm from "./TemplateInfoForm";
import TemplateIcons from "./TemplateIcons";

const TemplateInfo = ({
  rows,
  columns,
  name,
  changeName,
  handleSubmitTemplate,
  primaryColor,
  changePrimaryColor,
  secondaryColor,
  changeSecondaryColor,
  tertiaryColor,
  changeTertiaryColor,
  changeActiveColor,
  changeRows,
  changeColumns,
  windowWidth,
  createNewArray,
  handleShow,
  handleUpdateTemplate
}) => (
  <div className="template-info">
    <TemplateInfoForm
      rows={rows}
      columns={columns}
      name={name}
      changeName={changeName}
      changeRows={changeRows}
      changeColumns={changeColumns}
      primaryColor={ primaryColor}
      changePrimaryColor={changePrimaryColor}
      secondaryColor={ secondaryColor}
      changeSecondaryColor={changeSecondaryColor}
      tertiaryColor={tertiaryColor}
      changeTertiaryColor={changeTertiaryColor}
      changeActiveColor={changeActiveColor}
      windowWidth={windowWidth}
    />
    {windowWidth >= 820 ? (
      <TemplateIcons
        handleSubmitTemplate={handleSubmitTemplate}
        createNewArray={createNewArray}
        handleShow={handleShow}
        windowWidth={windowWidth}
        handleUpdateTemplate={ handleUpdateTemplate}
      />
    ) : null}
  </div>
);

export default TemplateInfo;
