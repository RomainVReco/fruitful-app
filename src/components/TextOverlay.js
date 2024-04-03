import React from 'react';


function TextOverlay({paragraphText}) {
    return (
        <div className="text-overlay-container">
            <h1 className='text-overlay'>{paragraphText}</h1>
        </div>
    );
}

export default TextOverlay;