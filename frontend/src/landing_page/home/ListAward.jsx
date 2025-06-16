import React from 'react';
function ListAward({heading,containt}) {
    return ( 
        <div>
            <h4>{heading}</h4>
            <p>{containt}</p>
        </div>
     );
}

export default ListAward;