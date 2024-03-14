import React from "react";

function GenericButton ({label, buttonStyle}) {

    return (
        <div>
            <button type="submit" className={buttonStyle}>{label}</button>
        </div>
    )
}

export default GenericButton;