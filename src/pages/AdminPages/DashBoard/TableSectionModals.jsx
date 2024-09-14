import { MdMoreTime } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { HiOutlineTicket } from "react-icons/hi2";
import Modal from "../../../components/Modal";
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";
import axios from "axios";

export const VerifyBookingModal = ({ verifyBookingModalID, verifyUserBooking, actionButonsVerifyClasses }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmitVerifyBooking = (data) => {
        console.log(data)

            ; (async () => {
                try {
                    const res = await axios.post('api/booking/verify-token', { token: data.token, id: verifyUserBooking.id })
                    console.log("res: ")
                    console.log(res.data)
                    if (res.status === 200) {
                        window.location.reload();
                    }
                }
                catch (error) {
                    console.log(error)
                }
            })()
    }

    return (
        <Modal id={verifyBookingModalID}>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmitVerifyBooking)} >
                    <h3 className="flex font-bold text-3xl mb-6 gap-2">Verify {verifyUserBooking?.customerName}'s Booking</h3>
                    <div className="m-2 space-y-6">
                        <label className="input input-bordered flex items-center gap-2 pe-4">
                            <HiOutlineTicket className="text-2xl" />
                            <input type="text" className="grow" placeholder="Token Number" {...register("token")} />
                        </label>
                    </div>
                    <div className="flex justify-end mt-5 me-2">
                        <button className={actionButonsVerifyClasses} onClick={() => document.getElementById().showModal()}>Verify</button>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </Modal>
    )
}

const getDateTime = (DateStr) => {
    // Get the date components
    const dateObj = new Date(DateStr);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(dateObj.getDate()).padStart(2, '0');

    // Get the time components
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    // Format the output
    const formattedDate = `${year}-${month}-${day}`; // e.g., "2024-09-10"
    const formattedTime = `${hours}:${minutes}:${seconds}`; // e.g., "16:41:00"

    // Output the results
    console.log("Date:", formattedDate);
    console.log("Time:", formattedTime);

    return { formattedDate, formattedTime }
}

const convertToSeconds = (timeStr) => {
    const [hours, minutes, seconds = 0] = timeStr.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

export const ExtendTimeModal = ({ extendTimeModalID, extendUserBooking, actionButonsExtendClasses }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    let endTime, date, time;

    const onSubmitExtendBooking = (data) => {
        console.log(data)
        console.log(extendUserBooking?.endtime)

        const { formattedDate, formattedTime } = getDateTime(extendUserBooking?.endtime)
        const oldDate = new Date(formattedDate)
        const oldTime = convertToSeconds(formattedTime)
        const newDate = new Date(data.date)
        const newTime = convertToSeconds(data.time)

        date = formattedDate
        time = formattedTime
        console.log("date", date, formattedDate)
        console.log("time", time, formattedTime)

        if (oldDate <= newDate && oldTime < newTime) {
            ; (async () => {
                try {
                    const res = await axios.post('api/booking/extend-time', { date: data.date, time: data.time, id: extendUserBooking.id })
                    console.log("res: ")
                    console.log(res.data)
                    if (res.status === 200) {
                        // window.location.reload();
                    }
                }
                catch (error) {
                    console.log(error)
                }
            })()
        }
        else {
            alert(`Date should be greater or equal to ${formattedDate} and Time should be greater than ${formattedTime}.`)
            return
        }
    }

    return (
        <Modal id={extendTimeModalID}>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmitExtendBooking)}>
                    <h3 className="flex font-bold text-3xl mb-6 gap-2">Extend {extendUserBooking?.customerName}'s Park Time</h3>
                    <div className="m-2 space-y-6">
                        <label className="input input-bordered flex items-center gap-2 pe-4">
                            <MdOutlineDateRange className="text-2xl" />
                            {console.log("endTime", endTime)}
                            <input type="date" className="grow" {...register("date", { min: { value: date, message: `Min date time should be ${endTime}` } })} min={`${date}`} />
                            {errors.date && <div className="error">{errors.date.message}</div>}
                        </label>
                        <label className="input input-bordered flex items-center gap-2 pe-4">
                            <IoMdTime className="text-2xl" />
                            <input type="time" className="grow" {...register("time", { min: { value: time, message: `Min date time should be ${endTime}` } })} min={time} />
                            {errors.time && <div className="error">{errors.time.message}</div>}
                        </label>
                    </div>
                    <div className="flex justify-end mt-5 me-2">
                        <button className={actionButonsExtendClasses} onClick={() => document.getElementById().showModal()}>Extend</button>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </Modal>
    )
}

export const DeleteBookingModal = ({ deleteBookingModalID, deleteUserBooking, actionButonsDeleteClasses }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmitDeleteBooking = (data) => {
        console.log(data)
        console.log(deleteUserBooking)
            ; (async () => {
                try {
                    const res = await axios.delete(`api/booking/${deleteUserBooking.id}`)
                    console.log("res: ")
                    console.log(res.data)
                    if (res.status === 200) {
                        window.location.reload();
                    }
                }
                catch (error) {
                    console.log(error)
                }
            })()
    }

    return (
        <Modal id={deleteBookingModalID}>
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmitDeleteBooking)}>
                    <h3 className="flex font-bold text-3xl mb-6 gap-2">Delete {deleteUserBooking?.customerName}'s booking</h3>
                    <p className="m-2 space-y-6">
                        Are you sure?
                    </p>
                    <div className="flex justify-end mt-5 me-2">
                        <button className={actionButonsDeleteClasses}>Delete</button>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </Modal>
    )
}
