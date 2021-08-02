import React from 'react';

const Item = props => {
    const handleClick = () => {
        props.handleFinished(props.item.id)
    }

    return (
        <div
            onClick={handleClick}
            className={`todo-item${props.item.finished ? ' finished' : ''}`}            
        >
            <p>{props.item.name}</p>
        </div>
    )
}

export default Item;
