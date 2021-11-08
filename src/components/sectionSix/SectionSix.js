import React, { useState } from 'react'
import Form from './Form'
import Modal from './Modal';
import SectionSixPresentational from './SectionSixPresentational'

function SectionSix() {

    const [customerInfo, setCustomerInfo] = useState([])
    const [visibility, setVisiblity] = useState(false);


    const saveCustomerInfo = (info) => {
        setCustomerInfo([...customerInfo, info])
    }

    console.log('Information entered by the customers', customerInfo)
    return (
        <div id='reservation' data-aos="fade-in" data-aos-delay="100">
            <SectionSixPresentational>
                <Form 
                saveCustomerInfo={saveCustomerInfo} 
                customerInfo={customerInfo}
                visibility={visibility}
                setVisiblity={setVisiblity}
                />
                
            </SectionSixPresentational>
            {visibility && <Modal customerInfo={customerInfo} />}
        </div>
    )
}

export default SectionSix
