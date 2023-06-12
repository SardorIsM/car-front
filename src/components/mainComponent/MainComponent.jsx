import React, { useState, useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import c from './MainComponent.module.css'
import { Link } from 'react-router-dom'

const MainComponent = () => {

    const [carModels, setCarModels] = useState()

    useEffect(() => {
        fetch("http://localhost:3030/carModels/list")
            .then(res => res.json())
            .then(data => setCarModels(data))
    }, [])


    return (
        <div className={c.main}>
            <div className={c.a_wrapper}>
                <a href="/" className={c.a}>Bosh sahifa</a>
                <IoIosArrowForward className={c.a_icon} />
                <a href="/" className={c.a}>modellari</a>
            </div>
            <div className={c.h1_wrapper}>
                <h1 className={c.h1}>Moddelari</h1>
            </div>
            <div className={c.product_wrapper}>
                {
                    carModels?.map(product =>
                        <Link to={`/cars/${product.id}`} key={product.id} className={c.model_container}>
                            <img src={product.img} alt="img" className={c.img}/>
                            <p className={c.title}>{product.name}</p>
                        </Link>
                    )
                }
                {/* <div className={c.model_container}>
                    <img src="https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$DV2W,$IBB1,$PPSW,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&" alt="tesla" className={c.img} />
                    <p className={c.title}>Tesla</p>
                </div> */}
            </div>
        </div>
    )
}

export default MainComponent