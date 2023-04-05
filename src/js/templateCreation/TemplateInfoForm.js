import React from "react";
import ColorPicker from "./ColorPicker";
const TemplateInfoForm = () => {
    return (
        <form>
            <label className="template-label">
                Number of rows:
                {/*Zrobić tak żeby pojawiał się span z numerem, jak klikniemy, to pojawia się input i możemy zmienić*/}
                <input type="number"/>
            </label>
            <label className="template-label">
                Number of stitches:
                <input type="number"/>
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
    )
};

export default TemplateInfoForm;

