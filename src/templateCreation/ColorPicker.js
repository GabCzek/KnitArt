import React, {useState} from "react";
import {ChromePicker} from 'react-color'

const ColorPicker = ({changeColor, defaultColor}) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    const [color, setColor] = useState({
        r: defaultColor.r,
        g: defaultColor.g,
        b: defaultColor.b,
        a: defaultColor.a,
    });


    const handleColorChange = (color) => {
        setColor(color.rgb);
        changeColor(color.rgb)
    };
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
    };

    const handleClose = () => {
        setDisplayColorPicker(false)
    };

    const colorPickerStyles = {
        color: {
            width: '46px',
            height: '24px',
            borderRadius: '2px',
            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        },
        swatch: {
            padding: '3px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
        },
        popover: {
            position: 'absolute',
            zIndex: '2',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
        position: {
            position: "absolute",
            right: '250px'
        }
    }

    return (
        <div>
            <div className="template-color-picker" style={colorPickerStyles.swatch} onClick={handleClick}>
                <div style={colorPickerStyles.color}/>
            </div>
            {displayColorPicker ? <div
                style={colorPickerStyles.position}
            ><div style={colorPickerStyles.popover}>
                <div style={colorPickerStyles.cover} onClick={handleClose}/>
                <ChromePicker
                    color={color}
                    disableAlpha={true}
                    onChange={handleColorChange}/>
            </div></div> : null}
        </div>
    )
};

export default ColorPicker;