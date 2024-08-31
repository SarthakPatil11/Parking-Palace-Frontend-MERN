import CardListSection from "./CardListSection"
import ManupulationSection from "../../../components/ManupulationSection"
import { useLocation } from 'react-router-dom';
import { useState } from "react";

const CardListMain = () => {

    const filterOptions = []
    const location = useLocation();
    const [data, setData] = useState(location.state);

    const handleSearch = (formData) => {
        console.log(formData)
        setData({ search: formData.search })
    }

    return (
        <>
            <ManupulationSection filterOptions={filterOptions} handleSearch={handleSearch} />
            <CardListSection search={data.search} />
        </>
    )
}

export default CardListMain