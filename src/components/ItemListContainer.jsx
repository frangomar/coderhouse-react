import React from 'react';
import '../assets/css/itemListContainer.css';
const ItemListContainer = (props) => {
    return (
        <div className='prop'>
            {props.greeting}
            <img src= {props.imagen} alt='' />
        </div>
    )
}

export default ItemListContainer;