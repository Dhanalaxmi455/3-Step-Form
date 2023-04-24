import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserCreds } from "../redux/slice/userdetailsSlice";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";


const UserCreds = () => {
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const navigate = useNavigate();
    const userCreds = useSelector(state => state.UserDetails.userCreds)
    const handlePrev = (event) => {
        event.preventDefault();
        navigate("/contact");
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: formRef.current.email.value,
            password: formRef.current.password.value
        }
        dispatch(addUserCreds(userData))
    }

    return (
        <div>
            <form ref={formRef}>

                <Input className='inpts' type='email' name='email' placeholder="EMAIL" />
                <Input className='inpts' type="password" name="password" placeholder="EMAIL" />

                <input type="password" name="password" />
                <div>
                    <button onClick={(e) => handlePrev(e)}>Prev</button>
                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserCreds;