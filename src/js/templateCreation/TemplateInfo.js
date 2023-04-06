import React, {useState} from "react";
import TemplateInfoForm from "./TemplateInfoForm";
import TemplateIcons from "./TemplateIcons";
import ColorPicker from "./ColorPicker";
const TemplateInfo = ({changeRows, changeColumns}) => {
    return (
        <div className="template-info">
            <TemplateInfoForm changeRows={changeRows} changeColumns={changeColumns}/>
            <TemplateIcons />
        </div>
    )
}

export default TemplateInfo;