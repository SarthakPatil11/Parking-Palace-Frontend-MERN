import CardListSection from "./CardListSection"
import ManupulationSection from "../../../components/ManupulationSection"
import { useState } from "react";

const CardListMain = () => {
    const filterOptions = ["All"]
    const [data, setData] = useState({ search: '' });
    const [filterData, setFilterData] = useState('');

    const handleSearch = (formData) => {
        console.log(formData)
        setData({ search: formData.search })
    }

    return (
        <>
            <ManupulationSection filterOptions={filterOptions} handleSearch={handleSearch} setFilterData={setFilterData} />
            <CardListSection search={data.search} filterData={filterData} />
        </>
    )
}

export default CardListMain