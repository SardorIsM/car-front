import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import c from './CarComponent.module.css'
import { useParams, useNavigate } from 'react-router-dom';


const CarComponent = () => {

    const history = useNavigate()

    const { id } = useParams();


    if (localStorage.getItem("token")) {
        fetch(`http://localhost:3030/cars/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => setCar(data))
    }



    const [car, setCar] = useState([])

    useEffect(() => {
        !localStorage.getItem("token") && history('/login')
    }, [history])


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
            {
                car.map(product =>
                    <div key={product.id} className={c.main_wrapper}>
                        <div className={c.left}>
                            <h3>{product.name}</h3>
                            <p>{product.narxi}</p>
                            <img src={product.main_img} alt="" className={c.left_img} />
                            <p className={c.left_title}><span className={c.left_span}>Marka:</span>{product.name}</p>
                            <p className={c.left_title}><span className={c.left_span}>Tanirovka:</span>{product.tanirovka}</p>
                            <p className={c.left_title}><span className={c.left_span}>Motor:</span>{product.motor}</p>
                            <p className={c.left_title}><span className={c.left_span}>Year:</span>{product.year}</p>
                            <p className={c.left_title}><span className={c.left_span}>Color:</span>{product.color}</p>
                            <p className={c.left_title}><span className={c.left_span}>Distance:</span>{product.distance}</p>
                            <p className={c.left_title}><span className={c.left_span}>Gearbook:</span>{product.gearbook}</p>
                            <p className={c.left_title}><span className={c.left_span}>Description:</span>{product.description}</p>
                        </div>
                        <div className={c.right}>
                            <h3>{product.name}</h3>
                            <img src={product.tashqi_img} alt="" className={c.right_img} />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CarComponent