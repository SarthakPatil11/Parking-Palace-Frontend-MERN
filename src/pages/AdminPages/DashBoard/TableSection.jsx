import { MdMoreTime } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { VerifyBookingModal, ExtendTimeModal, DeleteBookingModal } from "./TableSectionModals"
import axios from "axios";

const TableSection = ({ search, filterData }) => {
    let verifyBookingModalID = 'verifyBookingModal'
    let extendTimeModalID = 'extendTimeModal'
    let deleteBookingModalID = 'deleteBookingModal'

    let tableHeaderClasses = "text-xl text-slate-400"
    let actionButonsVerifyClasses = "btn border-success bg-transparent text-xl text-success hover:bg-success hover:text-black"
    let actionButonsExtendClasses = "btn border-primary bg-transparent text-xl text-primary hover:bg-primary hover:text-black"
    let actionButonsDeleteClasses = "btn border-error bg-transparent text-xl text-error hover:bg-error hover:text-black"

    let bookingListDB1 = [
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

    const [verifyUserBooking, setvVerifyUserBooking] = useState(null)
    const [deleteUserBooking, setDeleteUserBooking] = useState(null)
    const [extendUserBooking, setExtendUserBooking] = useState(null)

    const [error, setError] = useState({ isError: false, msg: null })
    const [isLoading, setLoading] = useState(true)
    const [bookingListDB, setBookingListDB] = useState([])
    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true)

                console.log(search ? search : 'no search')
                const apiEndPoint = `/api/booking/${search}`
                console.log(apiEndPoint)
                const res = await axios.get(apiEndPoint)
                console.log(res.data)

                const data = res.data.filter((v) => {
                    if (filterData === "Verified") {
                        return v.isVerified === true;
                    } else if (filterData === "Not-Verified") {
                        return v.isVerified === false;
                    } else if (filterData === "Time-Extended") {
                        return v.isVerified === true;  // Change this condition based on your requirements
                    } else {
                        return true;  // If no filter matches, include all items
                    }
                });

                console.log(data)
                setLoading(false)
                setBookingListDB(data)
                setError({ isError: false, msg: null })
            } catch (error) {
                setLoading(false)
                setError({ isError: true, msg: error })
            }
        })()
    }, [search, filterData])

    if (error.isError) {
        return (
            <>
                <h1>{error.msg}</h1>
            </>
        )
    }

    return (
        <>
            <div className="overflow-x-auto">
                {
                    isLoading ? (<div>Loading...</div>) : (
                        bookingListDB.length === 0 ? "No data" : (
                            <table className="table table-md table-pin-rows table-pin-cols">
                                <thead>
                                    <tr className="bg-slate-800">
                                        <th className="bg-slate-800"></th>
                                        {Object.keys(bookingListDB[0]).map((v, i) => (
                                            <>
                                                {v === "isVerified" || v === "isExtended" || v === "id" ? '' : (
                                                    <td key={i} className={tableHeaderClasses} >{v}</td>
                                                )}
                                            </>
                                        ))}
                                        <td className={tableHeaderClasses} >Status</td>
                                        <td className={tableHeaderClasses} >Action</td>
                                        <th className="bg-slate-800"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookingListDB.map((e, i) => (
                                        <tr key={i}>
                                            <th className="bg-slate-800">{i}</th>
                                            {Object.keys(e).map((v, i) => (
                                                v === "isVerified" || v === "isExtended" || v === "id" ? '' : (
                                                    v === "startTime" || v === "endTime" ? (
                                                        <td key={i} className="text-nowrap" >{new Date(e[v]).toISOString().replace('T', ' ').replace('Z', '')}</td>
                                                    ) : (
                                                        <td key={i} className="text-nowrap" >{e[v]}</td>
                                                    )
                                                )
                                            ))}
                                            <td className="space-y-2">
                                                <div className={`badge badge-${e.isVerified ? "success" : "error"} text-nowrap`}>
                                                    {e.isVerified ? "Verified" : "Not-Verified"}
                                                </div>
                                                {
                                                    e.isExtended ?
                                                        <div className='badge badge-primary'>
                                                            Extended
                                                        </div>
                                                        : ""
                                                }
                                            </td>
                                            <td className="flex space-x-2">
                                                {e.isVerified ? "" :
                                                    <button className={actionButonsVerifyClasses} onClick={() => {
                                                        document.getElementById(verifyBookingModalID).showModal()
                                                        setvVerifyUserBooking({ customerName: e.customerName, id: e.id, endtime: e.endTime })
                                                    }}><RiVerifiedBadgeLine /></button>
                                                }
                                                <button className={actionButonsExtendClasses} onClick={() => {
                                                    document.getElementById(extendTimeModalID).showModal()
                                                    setExtendUserBooking({ customerName: e.customerName, id: e.id, endtime: e.endTime })
                                                }}><MdMoreTime /></button>
                                                <button className={actionButonsDeleteClasses} onClick={() => {
                                                    document.getElementById(deleteBookingModalID).showModal();
                                                    setDeleteUserBooking({ customerName: e.customerName, id: e.id, endtime: e.endTime })
                                                }}><MdOutlineDelete /></button>
                                            </td>
                                            <th className="bg-slate-800">{i}</th>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="bg-slate-800">
                                        <th className="bg-slate-800"></th>
                                        {Object.keys(bookingListDB[0]).map((v, i) => (
                                            <>
                                                {v === "isVerified" || v === "isExtended" || v === "id" ? '' : (
                                                    <td key={i} >{v}</td>
                                                )}
                                            </>
                                        ))}
                                        <td>Status</td>
                                        <td >Action</td>
                                        <th className="bg-slate-800"></th>
                                    </tr>
                                </tfoot>
                            </table>
                        )
                    )
                }
            </div>
            <VerifyBookingModal verifyBookingModalID={verifyBookingModalID} verifyUserBooking={verifyUserBooking} actionButonsVerifyClasses={actionButonsVerifyClasses} />
            <ExtendTimeModal extendTimeModalID={extendTimeModalID} extendUserBooking={extendUserBooking} actionButonsExtendClasses={actionButonsExtendClasses} />
            <DeleteBookingModal deleteBookingModalID={deleteBookingModalID} deleteUserBooking={deleteUserBooking} actionButonsDeleteClasses={actionButonsDeleteClasses} />
        </>
    )
}

export default TableSection