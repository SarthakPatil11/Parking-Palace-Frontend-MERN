import { RiMotorbikeFill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFieldNumber } from "react-icons/ai";
import CTAButton from "../../../components/CTAButton";
import Modal from "../../../components/Modal";
import OTPInput from "../../../components/OTPInput";
import { useForm } from "react-hook-form"
import axios from "axios"

export const BookNowModal = ({ bookNowModalID, isBickClicked, parkingName, bookCheckModalID, bikeSlots, carSlots }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmitBooking = (data) => {
        console.log(data)
        // ; (async () => {
        //     try {
        //         const res = await axios.post('api/user/login', data)
        //         console.log("res: ")
        //         console.log(res.data)
        //         localStorage.setItem("access_token", res.data.token)
        //         localStorage.setItem("user", JSON.stringify(res.data.user))
        //         window.location.reload();
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // })()
    }

    return (
        <Modal id={bookNowModalID}>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmitBooking)}>
                    <h3 className="flex font-bold text-3xl mb-6 gap-2">{isBickClicked ? <RiMotorbikeFill className="text-4xl" /> : <FaCarRear className="text-4xl" />} Park in {parkingName}</h3>
                    <div className="m-2 space-y-6">
                        <label className="input input-bordered flex items-center gap-2">
                            <AiOutlineFieldNumber className="text-2xl" />
                            <input type="text" className="grow" placeholder="Vehicle number" {...register("vehicleNumber", { required: true, minLength: { value: 6, message: "Min-length should be 6." }, maxLength: { value: 10, message: "Max-length should be 10." } })} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 pe-0">
                            <IoMdTime className="text-2xl" />
                            <input type="time" className="grow" placeholder="Start time" {...register("startTime")} />
                            <select className="select select-bordered max-w-xs" {...register("duration")}>
                                <option disabled selected>Duration</option>
                                <option>30 Minutes</option>
                                <option>1 Hour</option>
                                <option>2 Hour</option>
                                <option>3 Hour</option>
                                <option>4 Hour</option>
                                <option>5 Hour</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex justify-between items-center mt-5 mx-2">
                        <p><i>Available Slot(s): </i>{isBickClicked ? bikeSlots : carSlots}</p>
                        <CTAButton onClick={() => document.getElementById(bookCheckModalID).showModal()}>Book Now</CTAButton>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </Modal>
    )
}

export const BookCheckModal = ({ bookCheckModalID }) => {

    const handleOTPChange = (otp) => {
        console.log("Current OTP:", otp);
    };

    return (
        <Modal id={bookCheckModalID}>
            <div className="modal-box">
                <form method="dialog">
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
