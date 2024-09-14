import ManupulationSection from "../../../components/ManupulationSection"
import TableSection from "./TableSection"
import { useState } from "react";

const DashBoard = () => {
    const filterOptions = ["All", "Verified", "Not-Verified", "Time-Extended"]
    const [data, setData] = useState({ search: '' });
    const [filterData, setFilterData] = useState('');

    const handleSearch = (formData) => {
        console.log(formData)
        setData({ search: formData.search })
    }

    return (
        <>
            <ManupulationSection filterOptions={filterOptions} handleSearch={handleSearch} setFilterData={setFilterData} />
            <TableSection search={data.search} filterData={filterData}  />
        </>
    )
}

export default DashBoard