import React from "react";

export default function TypeTache ({label, color}) {

    return (
        <div className="type-tache m-2" style={{backgroundColor:color}}>
            {label}
        </div>
    )


}