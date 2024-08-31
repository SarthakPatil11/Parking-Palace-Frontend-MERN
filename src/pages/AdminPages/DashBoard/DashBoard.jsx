import ManupulationSection from "../../../components/ManupulationSection"
import TableSection from "./TableSection"


const DashBoard = () => {
    const filterOptions = ["Verified", "Not-Verified", "Time-Extended"]

    return (
        <>
            <ManupulationSection filterOptions={filterOptions} />
            <TableSection/>
        </>
    )
}

export default DashBoard