import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserContact } from "../redux/slice/userdetailsSlice";
import { useNavigate } from "react-router-dom";
import { Input } from 'antd';

const UserContact = () => {
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const navigate = useNavigate();
    const userContact = useSelector(state => state.UserDetails.userContact)
    const handlePrev = (event) => {
        event.preventDefault();
        navigate("/")
    }
    const handleNext = (event) => {
        event.preventDefault();
        const userData = {
            phone: formRef.current.phone.value,
            address: formRef.current.address.value
        }
        dispatch(addUserContact(userData));
        navigate("/cred")
    }
    return (
        <div>
            <form ref={formRef}>
                <Input className='inpts' name='phone' type="number" placeholder="MOBILE NUMBER" />
                <textarea name="address" />

                <div>
                    <button onClick={(e) => handlePrev(e)}>Prev</button>
                    <button onClick={(e) => handleNext(e)}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default UserContact;