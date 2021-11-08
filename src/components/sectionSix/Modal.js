import React from 'react'

function Modal(props) {
    const { customerInfo } = props;
    const length = customerInfo.length - 1;

    console.log(customerInfo)

    return (
        <div className='full-modal'>
            <div className=' small-modal'  >
                <p className='ff-y'>Hello {customerInfo[length].name}, thank you for making reservation with us.</p>
            </div>

        </div>
    )
}

export default Modal

