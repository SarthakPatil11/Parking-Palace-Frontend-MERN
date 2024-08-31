import { MdMoreTime } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { HiOutlineTicket } from "react-icons/hi2";
import Modal from "../../../components/Modal";
import { useState } from "react";

const TableSection = () => {
    let verifyBookingModalID = 'verifyBookingModal'
    let extendTimeModalID = 'extendTimeModal'
    let deleteBookingModalID = 'deleteBookingModal'

    let tableHeaderClasses = "text-xl text-slate-400"
    let actionButonsVerifyClasses = "btn border-success bg-transparent text-xl text-success hover:bg-success hover:text-black"
    let actionButonsExtendClasses = "btn border-primary bg-transparent text-xl text-primary hover:bg-primary hover:text-black"
    let actionButonsDeleteClasses = "btn border-error bg-transparent text-xl text-error hover:bg-error hover:text-black"

    let tabData = [
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Verified"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Not-Verified"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
        {
            Username: "Sarthak99",
            FirstName: "Sarthak",
            LastName: "Patil",
            Email: "patilsarthak999@gmil.com",
            Phone: "7387945311",
            VehicalNum: "MH09DK9950",
            VehicalType: "Bike",
            TimeSlot: "12.00 to 24:00",
            Duration: "12hr",
            Status: "Parked"
        },
    ]

    const [verifyUserBooking, setvVerifyUserBooking] = useState()
    const [deleteUserBooking, setDeleteUserBooking] = useState()
    const [extendUserBooking, setExtendUserBooking] = useState()

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-md table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="bg-slate-800">
                            <th className="bg-slate-800"></th>
                            {Object.keys(tabData[0]).map((v, i) => (
                                <td key={i} className={tableHeaderClasses} >{v}</td>
                            ))}
                            <td className={tableHeaderClasses} >Action</td>
                            <th className="bg-slate-800"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabData.map((e, i) => (
                            <tr key={i}>
                                <th className="bg-slate-800">{i}</th>
                                {Object.keys(e).map((v, i) => (
                                    v === "Status" ?
                                        <td key={i} className="space-y-2">
                                            <div className={`badge badge-${e[v].toLowerCase() === "verified" ? "success" : "error"} text-nowrap`}>
                                                {e[v]}
                                            </div>
                                            {
                                                e[v].toLowerCase() === "time-extended" ?
                                                    <div className='badge badge-primary'>
                                                        {e[v]}
                                                    </div>
                                                    : ""
                                            }
                                        </td>
                                        :
                                        <td key={i} className="text-nowrap" >{e[v]}</td>
                                ))}
                                <td className="flex space-x-2">
                                    {e.Status.toLowerCase() !== "verified"? 
                                        <button className={actionButonsVerifyClasses} onClick={() => {
                                            document.getElementById(verifyBookingModalID).showModal()
                                            setvVerifyUserBooking(e.Username)
                                        }}><RiVerifiedBadgeLine /></button>
                                    : ""    
                                }
                                    <button className={actionButonsExtendClasses} onClick={() => {
                                        document.getElementById(extendTimeModalID).showModal()
                                        setExtendUserBooking(e.Username)
                                    }}><MdMoreTime /></button>
                                    <button className={actionButonsDeleteClasses} onClick={() => {
                                        document.getElementById(deleteBookingModalID).showModal();
                                        setDeleteUserBooking(e.Username)
                                    }}><MdOutlineDelete /></button>
                                </td>
                                <th className="bg-slate-800">{i}</th>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-slate-800">
                            <th className="bg-slate-800"></th>
                            {Object.keys(tabData[0]).map((v, i) => (
                                <td key={i} >{v}</td>
                            ))}
                            <td className={tableHeaderClasses} >Action</td>
                            <th className="bg-slate-800"></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <Modal id={verifyBookingModalID}>
                <div className="modal-box">
                    <form method="dialog">
                        <h3 className="flex font-bold text-3xl mb-6 gap-2">Verify {verifyUserBooking}'s Booking</h3>
                        <div className="m-2 space-y-6">
                            <label className="input input-bordered flex items-center gap-2 pe-4">
                                <HiOutlineTicket className="text-2xl" />
                                <input type="text" className="grow" placeholder="Ticket Number" />
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
            <Modal id={extendTimeModalID}>
                <div className="modal-box">
                    <form method="dialog">
                        <h3 className="flex font-bold text-3xl mb-6 gap-2">Extend {extendUserBooking}'s Park Time</h3>
                        <div className="m-2 space-y-6">
                            <label className="input input-bordered flex items-center gap-2 pe-4">
                                <MdOutlineDateRange className="text-2xl" />
                                <input type="date" className="grow" placeholder="Start time" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 pe-4">
                                <IoMdTime className="text-2xl" />
                                <input type="time" className="grow" placeholder="Start time" />
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
            <Modal id={deleteBookingModalID}>
                <div className="modal-box">
                    <form method="dialog">
                        <h3 className="flex font-bold text-3xl mb-6 gap-2">Delete {deleteUserBooking}'s booking</h3>
                        <p className="m-2 space-y-6">
                            Are you sure?
                        </p>
                        <div className="flex justify-end mt-5 me-2">
                            <button className={actionButonsDeleteClasses} onClick={() => document.getElementById().showModal()}>Delete</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </Modal>
        </>
    )
}

export default TableSection