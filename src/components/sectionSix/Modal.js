import React from 'react'

function Modal(props) {

    const { customerData } = props;
    const lastPos = customerData.length - 1;

    console.log('Information entered by the customers', customerData)

    return (
        <div className='full-modal'>
            <div className=' small-modal'  >
                <p className='ff-y'>Hello {customerData[lastPos].name}, thank you for making reservation with us.</p>
            </div>

        </div>
    )
}

export default Modal

