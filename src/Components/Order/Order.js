import React from 'react';
import './Order.css';

const Order = (props) => {
    return (
        <div key={props.index} className='orderElemRemove orderElem'>
            <b className='itemsFoot addSome'>{props.nameFoot}</b>
            <span className='itemsFoot addPrice'>{props.countFoot * props.menuOrder.price}</span>
            <i className='itemsFoot count'>x{props.countFoot}</i>
            <button className='hide' onClick={props.removeBtn}>
                &#10008;
            </button>
        </div>
    );
};

export default Order;
