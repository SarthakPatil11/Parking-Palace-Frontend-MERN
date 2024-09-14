import { RiMotorbikeFill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFieldNumber } from "react-icons/ai";
import CTAButton from "../../../components/CTAButton";
import Modal from "../../../components/Modal";
import OTPInput from "../../../components/OTPInput";
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react";

export const BookNowModal = ({ bookNowModalID, isBickClicked, parkingName, bookCheckModalID, bikeSlots, carSlots, setBookingFormData }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onBookNowClicked = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        ; (async () => {
            try {
                const res = await axios.post('api/user/send-otp', { username: user.username })
                console.log("res: ")
                console.log(res.data)
            }
            catch (error) {
                console.log(error)
            }
        })()
        document.getElementById(bookCheckModalID).showModal()
    }

    const onSubmitBooking = (data) => {
        console.log(data)
        const user = JSON.parse(localStorage.getItem('user'));
        const parkingOwnerID = bookNowModalID.replace("bookNowModal_", "")
        setBookingFormData({ isBickClicked, parkingOwnerID, ...data, user })
        onBookNowClicked()
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
                        </label>
                        <label className="input input-bordered flex items-center gap-2 pe-0">
                            <IoMdTime className="text-2xl" />
                            <input type="time" className="grow" placeholder="End time" {...register("endTime")} />
                        </label>
                    </div>
                    <div className="flex justify-between items-center mt-5 mx-2">
                        <p><i>Available Slot(s): </i>{isBickClicked ? bikeSlots : carSlots}</p>
                        <CTAButton>Book Now</CTAButton>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </Modal>
    )
}

export const BookCheckModal = ({ bookCheckModalID, bookingFormData }) => {
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
        const user = JSON.parse(localStorage.getItem('user'))
            ; (async () => {
                try {
                    const res = await axios.post('api/user/verify-otp', { username: user.username, otp })
                    console.log("res: ")
                    console.log(res.data)
                    if (res.status === 200){
                        const res = await axios.post('api/booking/create', { ...bookingFormData })
                        console.log("booking res: ")
                        console.log(res.data)
                    }
                    // window.location.reload();
                }
                catch (error) {
                    console.log(error)
                }
            })()
    }

    return (
        <Modal id={bookCheckModalID}>
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
