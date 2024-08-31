import { FaLocationDot } from "react-icons/fa6";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";
import CTAButton from "./CTAButton";
import { useState } from "react";
import { BookCheckModal, BookNowModal } from "../pages/UserPages/CardListPage/CardListModals";
import LoginModal from "./LoginModal";
import OTPModal from "./OTPModal";

const Card = ({ index, parkingName, parkingAddress, parkingCoordinets, bikeSlots, carSlots }) => {
    const [isBookNowClicked, setBookNowClicked] = useState(false);
    const [isBickClicked, setBickClicked] = useState(false);
    const [loginData, setLoginData] = useState({})
    let bookNowModalID = `bookNowModal_${index}`
    let bookCheckModalID = `bookCheckModalID_${index}`
    let loginModalID = 'loginModal'
    let fogetPassModalID = 'forgetPassModal'

    return (
        <>
            <div className="card bg-base-100 image-full min-w-96 max-w-96 shadow-xl">
                <figure>
                    <img
                        src="/images/Parking_Card.jpg"
                        // src="/images/parking.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body justify-between">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="card-title uppercase text-slate-200 text-wrap">{parkingName}</h2>
                            <p className="text-slate-300 text-balance">{parkingAddress}</p>
                        </div>
                        {(!bikeSlots && !carSlots) ? <div className="badge badge-info">FULL</div> : ''}
                    </div>
                    <div className={`card-actions justify-between ${isBookNowClicked ?? "hidden"}`}>
                        {isBookNowClicked ? (
                            <>
                                <CTAButton isOutlined={true} className="text-2xl" onClick={() => setBookNowClicked(false)} ><IoChevronBackCircleSharp /></CTAButton>
                                <div className="space-x-2">
                                    <CTAButton isOutlined={false} className="text-2xl" isDisabled={!bikeSlots} onClick={() => {
                                        document.getElementById(bookNowModalID).showModal()
                                        setBickClicked(true)
                                    }} ><RiMotorbikeFill /></CTAButton>
                                    <CTAButton isOutlined={false} className="text-2xl" isDisabled={!carSlots} onClick={() => {
                                        document.getElementById(bookNowModalID).showModal()
                                        setBickClicked(false)
                                    }} ><FaCarRear /></CTAButton>
                                </div>
                            </>
                        ) : (
                            <>
                                <CTAButton isOutlined={true} href={parkingCoordinets} className="text-2xl" ><FaLocationDot className="text-lg" /></CTAButton>
                                <CTAButton isOutlined={false} onClick={() => setBookNowClicked(true)} isDisabled={(!bikeSlots && !carSlots)} >Book Now</CTAButton>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <BookNowModal bookNowModalID={bookNowModalID} isBickClicked={isBickClicked} parkingName={parkingName} bookCheckModalID={bookCheckModalID} bikeSlots={bikeSlots} carSlots={carSlots} />
            <BookCheckModal bookCheckModalID={bookCheckModalID} />
            <LoginModal loginModalID={loginModalID} fogetPassModalID={fogetPassModalID} setLoginData={setLoginData} />
            <OTPModal fogetPassModalID={fogetPassModalID} loginData={loginData} />
            {/* <Toast>{toastMsg}</Toast> */}
        </>
    )
}

export default Card