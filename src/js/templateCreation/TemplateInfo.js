import React from "react";

import TemplateInfoForm from "./TemplateInfoForm";
import TemplateIcons from "./TemplateIcons";

const TemplateInfo = ({ rows, columns, changeRows, changeColumns }) => (
  <div className="template-info">
    <TemplateInfoForm
      rows={rows}
      columns={columns}
      changeRows={changeRows}
      changeColumns={changeColumns}
    />
    <TemplateIcons />
  </div>
);

export default TemplateInfo;
