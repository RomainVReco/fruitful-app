import React from "react";
import { Button } from 'react-bootstrap';

function GenericButton ({label, buttonStyle, method}) {

    return (
        <div>
            <button type="submit" className={buttonStyle} onClick={method}>{label}</button>
        </div>
    )
}

export default GenericButton;