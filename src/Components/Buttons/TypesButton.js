import React from 'react'


const TypesButton = (props) => {
    const { color, title, icon } = props;
    return (
        <div className={`btn ${color}`} onClick={() =>
            console.log("Clicked")
        }>
            <h1 className="title">{title}</h1>
            
    </div>
  );
}

export default TypesButton
