import React from "react";

export default function TypeTache ({label, color}) {

    return (
        <div className="type-tache" style={{backgroundColor:color}}>
            {label}
        </div>
    )


}