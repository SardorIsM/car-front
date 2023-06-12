import React from 'react'
import c from './AdminMain.module.css'

const AdminMain = ({setIsCarModelsModuleActive, setIsCarModuleActive}) => {
  return (
    <div className={c.container}>
      <div className={c.main_wrapper}>
        <div className={c.top}>
          <h3 className={c.top_h3}>Mashinalar</h3>
          <div className={c.qoshish_wrapper}>
            <div className={c.qoshish} onClick={() => {setIsCarModelsModuleActive(true)}}>+ Kategoriya qoshish</div>
            <div className={c.qoshish} onClick={() => {setIsCarModuleActive(true)}}>+ Mashina qoshish</div>
          </div>
        </div>
        <div className={c.bottom}></div>
      </div>
    </div>
  )
}

export default AdminMain