import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function GenericButton ({label, buttonStyle, method}) {

    return (
        <div>
            <button type="submit" className={buttonStyle}  onClick={method}>{label}</button>
        </div>
    )
}

export default GenericButton;