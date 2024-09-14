import CTAButton from "./CTAButton";
import { FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Modal from "./Modal";
import { useForm } from "react-hook-form"


const ManupulationSection = ({ filterOptions, handleSearch, setFilterData }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    let btnClasses = "border-slate-300 text-slate-300"
    let filterModalID = "filterModal"

    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 left-0 z-50">
                <form className="card-body flex-row p-2" onSubmit={handleSubmit(handleSearch)}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow sm:w-[23rem] md:w-[23rem] lg:w-[33rem]" placeholder="Search" {...register("search")} />
                    </label>
                    <CTAButton isOutlined={true} className="border-slate-300 text-slate-300">
                        <FaSearch />
                    </CTAButton>
                </form>
                <CTAButton isOutlined={true} className={btnClasses} onClick={() => document.getElementById(filterModalID).showModal()} >
                    <FaFilter />
                </CTAButton>
            </div>
            <Modal id={filterModalID} >
                <div className="modal-box max-w-fit">
                    <div className="space-x-2">
                        <form method="dialog" className="modal-backdrop flex">
                            {filterOptions.map((e, i) => (
                                <CTAButton key={i} onClick={() => { setFilterData(e === "All"? '' : e) }} >{e}</CTAButton>
                            ))}
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </Modal>
        </>
    )
}

export default ManupulationSection