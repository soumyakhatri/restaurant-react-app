import React from 'react'
import { data } from '../../data/data'
import Divider from '../../images/Divider.png'
import line from '../../images/line.png'


function SectionFour() {

    const createList = (course, i) => {
        return (
            <div className='col col-xl-6 mt-4 d-flex flex-column align-items-center sec4-col' key={course}>
                <h3 className="ff-y fs-36 fs-sm-26 mb-0 pb-0 text-center c-g">{course.courseName}</h3>
                <img className='mt-2' src={Divider} />
                {course.dishes.map(dish => {
                    return (
                        <div>
                            <div className='d-flex justify-content-between mt-2 mb-0 c-g ff-y fs-5'>
                                <span>{dish.name}</span>
                                <span className='float-right'>{dish.price}</span>
                            </div>

                            <img className='mt-0 line' src={line} />
                            <p className='dish-des fw-light'>{dish.description}</p>
                        </div>)
                })}

            </div>
        )
    }

    return (
        <div className='section-4 pb-5' id='menu' data-aos="fade-in" data-aos-delay="100">
            <div className='container'>
                <div className='row'>
                    {data.map(createList)}
                </div>
            </div>
        </div>
    )
}

export default SectionFour
