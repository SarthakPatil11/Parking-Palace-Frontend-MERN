import Modal from "./Modal"
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import CTAButton from "./CTAButton"
import Toast from "./Toast";
import { useForm } from "react-hook-form"
import { useState } from "react";

const LoginModal = ({ loginModalID, fogetPassModalID, setLoginData }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const [loginFormData, setLoginFormData] = useState(null)
    const [toast, setToast] = useState(null)

    const handleCloseToast = () => {
        setToast(null);
    };

    const onForgetPasswordClicked = () => {
        document.getElementById(fogetPassModalID).showModal()
    }

    const onSubmitLogin = (data) => {
        console.log(data)
        setLoginFormData(data)
        setLoginData(data)
    }

    return (
        <>
            <Modal id={loginModalID}>
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmitLogin)}>
                        <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById(loginModalID).style = "display:None"}>✕</div>
                        <h3 className="font-bold text-3xl mb-6">Login</h3>
                        <div className="m-2 space-y-6">
                            <label className="input input-bordered flex items-center gap-2">
                                <FaUserAlt className="text-slate-500" />
                                <input type="text" className="grow" placeholder="Username" {...register("username", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                {errors.username && <div className="error">{errors.username.message}</div>}
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaKey className="text-slate-500" />
                                <input type="password" className="grow" placeholder="password" {...register("password", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                {errors.password && <div className="error">{errors.password.message}</div>}
                            </label>
                        </div>
                        <div className="flex justify-between items-center mt-5 ms-3 me-2 ">
                            <p className="cursor-pointer" onClick={() => onForgetPasswordClicked()}>Forget Password?</p>
                            <CTAButton>Login</CTAButton>
                        </div>
                    </form>
                </div>
            </Modal>
            {toast != null ? <Toast severity={toast?.severity} duration={toast?.duration} onClose={handleCloseToast}>{toast?.message}</Toast> : ""}
        </>
    )
}

export default LoginModal