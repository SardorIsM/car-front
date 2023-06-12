import React, { useState } from 'react'
import './CarModelsModal.css'

const CarModelsModal = ({ isCarModelsModuleActive, setIsCarModelsModuleActive }) => {

  const [img_url, setImg_url] = useState('')
  const [marka, setMarka] = useState('')

  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "carModals_img")

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddhlxazxf/image/upload",
      {
        method: 'POST',
        body: data
      }
    )
    const data2 = await res.json()
    setImg_url(data2.secure_url);
  }

  const createCarModels = (e) => {
    e.preventDefault()

    fetch("http://localhost:3030/carModels/create", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem("token")
      },
      body: JSON.stringify({
        name: marka,
        img: img_url
      })
    })
      .then(res => res.json())
      .then(data => alert(data.msg))
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className={isCarModelsModuleActive === true ? "carModels_modal carModels_modalActive" : "carModels_modal"}>
      <h2>Mashinani Modelini qoshish</h2>
      <form onSubmit={createCarModels}>
        <p>Markasi</p>
        <input type="text" placeholder='Kiriting' required onChange={e => { setMarka(e.target.value) }} />
        <p>Rasm</p>
        <input type="file" required onChange={(e) => uploadFile(e)} />
        <button type='submit'>Saqlash</button>
      </form>
    </div>
  )
}

export default CarModelsModal