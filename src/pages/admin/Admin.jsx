import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/adminComponent/adminHeader/AdminHeader'
import AdminLeft from '../../components/adminComponent/adminLeft/AdminLeft'
import AdminMain from '../../components/adminComponent/adminMain/AdminMain'
import c from './Admin.module.css'
import { useNavigate } from 'react-router-dom';
import CarModelsModal from '../../components/modal/carModelsModal/CarModelsModal'
import CarModal from '../../components/modal/carModal/CarModal'
import { Overlay } from '../../utils';

const Admin = () => {

  const history = useNavigate()

  const [isCarModuleActive, setIsCarModuleActive] = useState(false)
  const [isCarModelsModuleActive, setIsCarModelsModuleActive] = useState(false)

  useEffect(() => {
    !localStorage.getItem("token") && history('/login')
  }, [history])

  return (
    <div className={c.container}>

      <div className={c.left}>
        <AdminLeft />
      </div>
      <div className={c.right}>
        <AdminHeader />
        <AdminMain setIsCarModelsModuleActive={setIsCarModelsModuleActive} setIsCarModuleActive={setIsCarModuleActive}/>
      </div>
      <CarModelsModal isCarModelsModuleActive={isCarModelsModuleActive} setIsCarModelsModuleActive={setIsCarModelsModuleActive}/>
      <CarModal isCarModuleActive={isCarModuleActive} setIsCarModuleActive={setIsCarModuleActive}/>
      {isCarModuleActive && <Overlay  callback={setIsCarModuleActive} />}
      {isCarModelsModuleActive && <Overlay  callback={setIsCarModelsModuleActive} />}
    </div>
  )
}

export default Admin