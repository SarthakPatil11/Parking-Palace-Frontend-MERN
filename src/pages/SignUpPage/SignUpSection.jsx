import { useState } from "react"
import CTAButton from "../../components/CTAButton"
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useForm } from "react-hook-form"
import axios from "axios"

const SignUpSection = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [isParkingOwner, setIsParkingOwner] = useState(false)
    const [isNextClicked, setIsNextClicked] = useState(false)

    const onSubmit = (data) => {
        if (!isNextClicked) {
            const { parkingname, areaname, fulladdress, parkingImage, bikeslots, carslots, ...newData } = data
            data = newData
            console.log(data)
        }

        ; (async () => {
            try {
                const res = await axios.post('api/user/create', { isParkingOwner, ...data })
                console.log("res: " + res.data)
            }
            catch (error) {
                console.log(error)
            }
        })()
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 shrink-0 shadow-2xl min-w-96">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        {isNextClicked ?
                            <>
                                <div className="gap-2 flex-wrap md:flex lg:flex">
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Parking Name</span>
                                        </label>
                                        <input type="text" placeholder="parking name" className="input input-bordered" {...register("parkingname", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                        {errors.parkingname && <div className="error">{errors.parkingname.message}</div>}
                                    </div>
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Area Name</span>
                                        </label>
                                        <input type="text" placeholder="area name" className="input input-bordered" {...register("areaname", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                        {errors.areaname && <div className="error">{errors.areaname.message}</div>}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Address</span>
                                    </label>
                                    <textarea type="text" rows={2} placeholder="full address" className="textarea textarea-bordered" {...register("fulladdress", { required: true })} />
                                    {errors.fulladdress && <div className="error">{errors.fulladdress.message}</div>}
                                </div>
                                <div className="gap-2 flex-wrap md:flex lg:flex">
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Bike Slots</span>
                                        </label>
                                        <input type="number" placeholder="bike slots" className="input input-bordered" {...register("bikeslots")} />
                                    </div>
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Car Slots</span>
                                        </label>
                                        <input type="number" placeholder="car slots" className="input input-bordered" {...register("carslots")} />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Parking image</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full" {...register("parkingImage", { required: true })} />
                                </div>
                            </>
                            :
                            <>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <input type="text" placeholder="username" className="input input-bordered" {...register("username", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                    {errors.username && <div className="error">{errors.username.message}</div>}
                                </div>
                                <div className="gap-2 flex-wrap md:flex lg:flex">
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                        {errors.password && <div className="error">{errors.password.message}</div>}
                                    </div>
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" placeholder="confirm password" className="input input-bordered" {...register("confpassword", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                        {errors.confpassword && <div className="error">{errors.confpassword.message}</div>}
                                    </div>
                                </div>
                                <div className="gap-2 flex-wrap md:flex lg:flex">
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="first name" className="input input-bordered" {...register("firstname", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                        {errors.firstname && <div className="error">{errors.firstname.message}</div>}
                                    </div>
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="last name" className="input input-bordered" {...register("lastname", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                        {errors.lastname && <div className="error">{errors.lastname.message}</div>}
                                    </div>
                                </div>
                                <div className="gap-2 flex-wrap md:flex lg:flex">
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" })} />
                                        {errors.email && <div className="error">{errors.email.message}</div>}
                                    </div>
                                    <div className="form-control flex-grow">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" placeholder="phone" className="input input-bordered" {...register("phone", { required: true, minLength: { value: 3, message: "Min-length should be 3." }, maxLength: { value: 20, message: "Max-length should be 20." } })} />
                                        {errors.phone && <div className="error">{errors.phone.message}</div>}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Are you a Parking Owner?</span>
                                        <input type="checkbox" className="checkbox checkbox-warning" defaultChecked={isParkingOwner} onClick={() => setIsParkingOwner(!isParkingOwner)} />
                                    </label>
                                </div>
                            </>
                        }
                        <div className="form-control mt-6 flex-grow items-end">
                            {isParkingOwner ?
                                <div className="w-full flex justify-end space-x-2">
                                    {isNextClicked ?
                                        <>
                                            <CTAButton isOutlined={true} className="max-w-fit lg:w-1/3" onClick={() => setIsNextClicked(false)}><IoChevronBackCircleSharp className="text-2xl" /></CTAButton>
                                            <CTAButton className="w-[80%] lg:w-1/3">SignUp</CTAButton>
                                        </>
                                        :
                                        <>
                                            <CTAButton className="w-full lg:w-1/3" onClick={() => setIsNextClicked(true)}>Next</CTAButton>
                                        </>
                                    }
                                </div>
                                :
                                <CTAButton className="w-full lg:w-1/3">SignUp</CTAButton>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpSection