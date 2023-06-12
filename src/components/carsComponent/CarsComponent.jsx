import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import c from './CarsComponent.module.css'

const CarsComponent = () => {

    const { id } = useParams();

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3030/cars/list/${id}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [id])


    return (
        <div>
            <div className={c.a_wrapper}>
                <a href="/" className={c.a}>Bosh sahifa</a>
                <IoIosArrowForward className={c.a_icon} />
                <a href="/" className={c.a}>modellari</a>
            </div>
            <div className={c.h1_wrapper}>
                <h1 className={c.h1}>Moddelar turlari</h1>
            </div>
            <div className={c.product_wrapper}>
                {
                    cars?.map(product =>
                        <Link to={`/car/${product.id}`} key={product.id} className={c.model_container}>
                            <img src={product.main_img} alt="img" className={c.img} />
                            <p className={c.title}>{product.name}</p>
                            <p className={c.title}>{product.narxi}</p>
                        </Link>
                    )
                }
                {/* <div className={c.model_container}>
                    <img src="https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$DV2W,$IBB1,$PPSW,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&" alt="tesla" className={c.img} />
                    <p className={c.title}>Tesla</p>
                    <p className={c.title}>Narxi: 100$</p>
                </div> */}
            </div>
        </div>
    )
}

export default CarsComponent