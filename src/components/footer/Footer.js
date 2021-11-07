import React from 'react';
import Divider2 from '../../images/Divider2.png'
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 d-flex flex-column align-items-center ">
                        <h5 className="ff-y">About Us</h5>
                        <img className="mt-2 mb-3" src={Divider2} alt="divider" />
                        <p className="text-center px-4 pb-0 mb-0 fw-light">Lambda's new and expanded Chelsea location represents a truly authentic Greek patisserie, featuring breakfasts of fresh croissants and steaming bowls of café. Lamda the best restaurant in town</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center mt-5 mt-md-0 footer-hours">
                        <h5 className="ff-y">Opening Hours</h5>
                        <img className="mt-2 mb-3" src={Divider2} alt="divider" />
                        <p className="text-center px-4 fw-light">Mon-Thu: 7:00am-8:00pm <br></br> Fri-Sun: 7:00am-10:00pm</p>
                        <div className="d-flex icons">
                            <i className="fab fa-cc-paypal mx-1"></i>
                            <i className="fab fa-cc-mastercard mx-1"></i>
                            <i className="fab fa-cc-visa mx-1"></i>
                            <i className="fab fa-cc-amex mx-1"></i>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center mt-5 mt-md-0 footer-hours">
                        <h5 className="ff-y">Our Location</h5>
                        <img className="mt-2 mb-3" src={Divider2} alt="divider" />
                        <p className="text-center px-4 fw-light">19th Paradise Street Sitia<br></br> 128 Meserole Avenue</p>
                        <div className="d-flex icons">
                            <i className="fab fa-facebook-f mx-1"></i>
                            <i className="fab fa-youtube mx-1"></i>
                            <i className="fab fa-twitter mx-1"></i>
                            <i className="fas fa-utensils mx-1"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer
