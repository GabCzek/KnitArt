import React, {useState} from "react";
import {ChromePicker} from 'react-color'

const ColorPicker = () => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    const [color, setColor] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1',
    });

    const handleColorChange = (color) => {
        setColor(color.rgb);
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
    }

    return (
        <div>
            <div className="template_color-picker" style={colorPickerStyles.swatch} onClick={handleClick}>
                <div style={colorPickerStyles.color}/>
            </div>
            {displayColorPicker ? <div style={colorPickerStyles.popover}>
                <div style={colorPickerStyles.cover} onClick={handleClose}/>
                <ChromePicker
                    color={color}
                    disableAlpha={true}
                    onChange={handleColorChange}/>
            </div> : null}
        </div>
    )
};

export default ColorPicker;