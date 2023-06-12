import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register, Login, Main, Cars, Admin, Car } from '../pages'

const RoutesWrapper = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cars/:id' element={<Cars />} />
                <Route path='/car/:id' element={<Car />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </div>
    )
}

export default RoutesWrapper