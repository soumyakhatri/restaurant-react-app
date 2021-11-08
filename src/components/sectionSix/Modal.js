import React from 'react'

function Modal(props) {
    const {customerInfo} = props;

    const length = customerInfo.length - 1
    console.log(customerInfo)
    return (
        <div className=''>
            <p>Hello, {customerInfo[length].name}</p>
        </div>
    )
}

export default Modal
