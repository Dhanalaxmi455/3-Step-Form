import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './userdetails'
import UserContact from './usercontact'
import UserCreds from './usercred'

export default function StepForm() {
    return (
        <div>
            <Routes>
                <Route index element={<UserDetails />} />
                <Route path='/contact' element={<UserContact />} />
                <Route path='/cred' element={<UserCreds />} />
            </Routes>
        </div>
    )
}