import React from 'react'

function DropdownColor(props) {
    const colors = ["red", "green", "yellow", "blue", "magenta"];

    function handleChange(e) {
        document.body.style.background = e.target.value
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">select</option>
                {colors.map(function (color, i) {
                    return (
                        <option key={i} value={color}>
                            {color}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
export default DropdownColor