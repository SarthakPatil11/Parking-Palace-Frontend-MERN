import CTAButton from "./CTAButton"
import Modal from "./Modal"
import OTPInput from "./OTPInput";
import { useForm } from "react-hook-form"
import { useState } from "react";
import axios from "axios"

const OTPModal = ({ fogetPassModalID, changePasswordModalID, loginData, doAfterVerify }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [otp, setOTP] = useState()
    const handleOTPChange = (otp) => {
        setOTP(otp)
    };

    const onSubmitOTP = (data) => {
        console.log({ otp, ...data })
            ; (async () => {
                try {
                    const res = await axios.post('api/user/verify-otp', { username: loginData.username, otp })
                    console.log("res: ")
                    console.log(res.data)
                    if (doAfterVerify){
                        doAfterVerify()
                    }
                    if (changePasswordModalID){
                        document.getElementById(changePasswordModalID).showModal()
                    }
                    else{
                        window.location.reload();
                    }
                }
                catch (error) {
                    console.log(error)
                }
            })()
    }

    return (
        <Modal id={fogetPassModalID}>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmitOTP)}>
                    <div className="mb-6">
                        <h3 className="font-bold text-3xl mb-2">Check OTP</h3>
                        <p>OTP is e-mailed to your registred e-mail.</p>
                    </div>
                    <div className="flex justify-center m-2 space-y-6">
                        <OTPInput length={6} onChangeOTP={handleOTPChange} />
                    </div>
                    <div className="flex justify-end mt-5 me-2 ">
                        <CTAButton>Check</CTAButton>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </Modal>
    )
}

export default OTPModal