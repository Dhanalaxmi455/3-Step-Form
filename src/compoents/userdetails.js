import React, { useRef } from 'react';
import "../styles/userdetails.css";
import { Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { addUserDetails } from '../redux/slice/userdetailsSlice';
import { useNavigate } from 'react-router-dom';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};





const UserDetails = () => {

    const userDetails = useSelector(state => state.UserDetails.userDetails);
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const navigate = useNavigate();

    const handleNxt = (e) => {
        e.preventDefault();

        const userData = {
            firstname: formRef.current.firstname.value,
            lastname: formRef.current.lastname.value,
            gender: formRef.current.gender.value,
        }
        dispatch(addUserDetails(userData));
        navigate("/contact");
    }



    return (
        <div className='userdetails-container'>
            <form ref={formRef}>

                <Input className='inpts' name='firstname' placeholder="FIRST NAME" />
                <Input className='inpts' name='lastname' placeholder="LAST NAME" />

                <Select
                    defaultValue="GENDER"
                    style={{ width: 300 }}
                    onChange={handleChange}
                    options={[
                        { name: 'gender', value: 'MALE', label: 'MALE' },
                        { name: 'gender', value: 'FEMALE', label: 'FEMALE' },
                        { name: 'gender', value: 'OTHERS', label: 'OTHERS' },
                    ]}
                />
                <div className='button-container'>
                    <button className='prev-btn' disabled>Prev</button>
                    <button onClick={(e) => handleNxt(e)} className='nxt-btn'>Next</button>
                </div>

            </form>
        </div>
    )
}

export default UserDetails;