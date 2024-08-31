import { FaSearch } from "react-icons/fa";
import CTAButton from "../../components/CTAButton";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data)
        const formData = { search: data.search };
        navigate(`/CardListMain`, { state: formData });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 shrink-0 shadow-2xl">
                    <form className="card-body flex-row" onSubmit={handleSubmit(onSubmit)} >
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow sm:w-[23rem] md:w-[23rem] lg:w-[33rem]" placeholder="Search" {...register("search")} />
                        </label>
                        <CTAButton className={"w-[80px]"} ><FaSearch /></CTAButton>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Search Parking!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SearchSection