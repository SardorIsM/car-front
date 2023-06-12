import React, { useState } from 'react'
import './CarModal.css'
import { useEffect } from 'react'

const CarModal = ({ isCarModuleActive, setIsCarModuleActive }) => {

  const [mainImg_url, setMainImg_url] = useState('')
  const [tashqiImg_url, setTashqiImg_url] = useState('')
  const [ichkiImg_url, setIchkiImg_url] = useState('')
  const [motor, setMotor] = useState('')
  const [nomi, setNomi] = useState('')
  const [color, setColor] = useState('')
  const [gearbook, setGearbook] = useState('')
  const [description, setDescription] = useState('')
  const [year, setYear] = useState('')
  const [distance, setDistance] = useState('')
  const [narxi, setNarxi] = useState('')
  const [marka, setMarka] = useState('')
  const [tanirovka, setTanirovka] = useState('true')
  const [qwe, setQWE] = useState()

  useEffect(() => {
    fetch("http://localhost:3030/carModels/list")
      .then(res => res.json())
      .then(data => setQWE(data))
  }, [])


  const uploadMainFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "car_asosiy")

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddhlxazxf/image/upload",
      {
        method: 'POST',
        body: data
      }
    )
    const data2 = await res.json()
    setMainImg_url(data2.secure_url);
  }

  const uploadTashqiFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "car_asosiy")

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddhlxazxf/image/upload",
      {
        method: 'POST',
        body: data
      }
    )
    const data2 = await res.json()
    setTashqiImg_url(data2.secure_url);
  }

  const uploadIchkiFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "car_asosiy")

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddhlxazxf/image/upload",
      {
        method: 'POST',
        body: data
      }
    )
    const data2 = await res.json()
    setIchkiImg_url(data2.secure_url);
  }

  const createCar = (e) => {
    e.preventDefault()

    fetch("http://localhost:3030/cars/create", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem("token")
      },
      body: JSON.stringify({
        name: nomi,
        marka,
        tanirovka,
        motor,
        year,
        color,
        distance,
        gearbook,
        description,
        narxi,
        main_img: mainImg_url,
        tashqi_img: tashqiImg_url,
        ichki_img: ichkiImg_url
      })
    })
      .then(res => res.json())
      .then(data => alert(data.msg))
      .catch((err) => {
        console.log(err.message)
      })
  }


  
  useEffect(() => {
    qwe && setMarka(qwe[0].id)
  }, [qwe])

  return (
    <div className={isCarModuleActive === true ? "car_modal car_modalActive" : "car_modal"}>
      <h2>Mashinani qoshish</h2>
      <form onSubmit={createCar}>
        <div className='carModal_wrapper'>
          <div>
            <p>Markasi</p>

            <select onChange={e => { setMarka(e.target.value) }}>
              {
                qwe?.map(product =>
                  <option key={product.id} value={product.id}>{product.name}</option>
                )
              }
            </select>

            <p>Motor</p>
            <input type="text" required placeholder='kiriting' onChange={e => { setMotor(e.target.value) }} />
            <p>Nomi</p>
            <input type="text" required placeholder='kiriting' onChange={e => { setNomi(e.target.value) }} />
            <p>Color</p>
            <input type="text" required placeholder='kiriting' onChange={e => { setColor(e.target.value) }} />
            <p>Gearbook</p>
            <input type="text" required placeholder='kiriting' onChange={e => { setGearbook(e.target.value) }} />
            <p>Ichki rasim</p>
            <input type="file" required onChange={(e) => uploadIchkiFile(e)} />
            <p>Description</p>
            <input type="text" required onChange={e => { setDescription(e.target.value) }} />
          </div>
          <div>
            <p>Tanirovka</p>
            <select onChange={e => { setTanirovka(e.target.value) }}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            <p>Year</p>
            <input type="text" required placeholder='kiriting' onChange={e => { setYear(e.target.value) }} />
            <p>Distance</p>
            <input type="text" required placeholder='kiriting' onChange={e => { setDistance(e.target.value) }} />
            <p>Narxi</p>
            <input type="text" required placeholder='kiriting' onChange={e => { setNarxi(e.target.value) }} />
            <p>Tashqi rasim</p>
            <input type="file" required onChange={(e) => uploadTashqiFile(e)} />
            <p>Asosiy rasim</p>
            <input type="file" required onChange={(e) => uploadMainFile(e)} />
          </div>
        </div>
        <button type='submit' className='carModals_btn'>Saqlash</button>
      </form>
    </div>
  )
}

export default CarModal