import Modal from "./Modal"
import { FaKey } from "react-icons/fa";
import CTAButton from "./CTAButton"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from "axios"

const ChangePasswordModal = ({ changePasswordModalID, loginData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate();

    const onSubmitLogin = (data) => {
        console.log(data)
            ; (async () => {
                try {
                    const res = await axios.put(`api/user/${loginData.username}`, data)
                    console.log("res: ")
                    console.log(res.data)
                    // localStorage.removeItem('user');
                    // localStorage.removeItem('access_token');
                    navigate('/');
                    window.location.reload();
                }
                catch (error) {
                    console.log(error)
                }
            })()
    }

    return (
        <>
            <Modal id={changePasswordModalID}>
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmitLogin)}>
                        <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById(changePasswordModalID).style = "display:None"}>✕</div>
                        <h3 className="font-bold text-3xl mb-6">Login</h3>
                        <div className="m-2 space-y-6">
                            <label className="input input-bordered flex items-center gap-2">
                                <FaKey className="text-slate-500" />
                                <input type="password" className="grow" placeholder="password" {...register("password", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                {errors.password && <div className="error">{errors.password.message}</div>}
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaKey className="text-slate-500" />
                                <input type="password" className="grow" placeholder="password" {...register("cpassword", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                {errors.cpassword && <div className="error">{errors.cpassword.message}</div>}
                            </label>
                        </div>
                        <div className="flex justify-between items-center mt-5 ms-3 me-2 ">
                            <CTAButton>Confirm</CTAButton>
                        </div>
                    </form>
                </div>
            </Modal>
            {/* {toast != null ? <Toast severity={toast?.severity} duration={toast?.duration} onClose={handleCloseToast}>{toast?.message}</Toast> : ""} */}
        </>
    )
}

export default ChangePasswordModal