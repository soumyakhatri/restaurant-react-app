import React, { useState } from 'react'
import Modal from './Modal'

function Form({ saveCustomerInfo, setVisiblity }) {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [phone, setPhone] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        const customerInfo = {
            name,
            email,
            date,
            phone
        }
        saveCustomerInfo(customerInfo);
        
        setName('');
        setEmail('');
        setDate('');
        setPhone('');

        setVisiblity(true)

        setTimeout(() => {
            setVisiblity(false)
        }, 3000);
    }

    return (
        <div className='form'>
            <form onSubmit={submitHandler}>
                <div className='row form-div'>
                    <div className='col-sm-6 mt-3 d-sm-block d-flex flex-column justify-content-center align-items-center text-start'>
                        <label className='d-block fw-bold c-g'>Name</label>
                        <input
                            className='mt-1'
                            placeholder='your name*'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='col-sm-6 mt-3 d-sm-block d-flex flex-column justify-content-center align-items-center text-start'>
                        <label className='d-block fw-bold c-g'>Email</label>
                        <input
                            className='mt-1'
                            placeholder='your email*'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='col-sm-6 mt-3 d-sm-block d-flex flex-column justify-content-center align-items-center text-start'>
                        <label className='d-block fw-bold c-g'>Date</label>
                        <input
                            placeholder='date*'
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className='col-sm-6 mt-3 d-sm-block d-flex flex-column justify-content-center align-items-center text-start'>
                        <label className='d-block fw-bold c-g'>Number</label>
                        <input
                            className='mt-1'
                            placeholder='party number*'
                            type='number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='col mt-4 d-flex justify-content-center'>
                        <button className='book-now-btn btn' disabled={name && email && date && phone ? false : true} type='submit'>Book Now!</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default React.memo(Form)
