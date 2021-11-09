import React, { useState } from 'react'
import Form from './Form'
import Modal from './Modal';
import SectionSixPresentational from './SectionSixPresentational'

function SectionSix() {

    const [customerData, setCustomerData] = useState([])
    const [visibility, setVisiblity] = useState(false);

    const saveCustomerInfo = (info) => {
        setCustomerData([...customerData, info])
    }

    return (
        <div id='reservation' data-aos="fade-in" data-aos-delay="100">
            <SectionSixPresentational>
                <Form
                    saveCustomerInfo={saveCustomerInfo}
                    setVisiblity={setVisiblity}
                />
            </SectionSixPresentational>
            {visibility && <Modal customerData={customerData} />}
        </div>
    )
}

export default SectionSix
