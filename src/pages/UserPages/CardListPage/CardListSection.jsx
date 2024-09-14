import { useEffect, useState } from "react"
import Card from "../../../components/Card"
import axios from "axios"

const CardListSection = ({ search, filterData }) => {
    const cardlist = [
        {
            Name: "Lav to park",
            Address: "Sambhaji nagar, kolhapur",
        },
        {
            Name: "Parking 1",
            Address: "Adress/to/Parking1",
        },
        {
            Name: "Parking 2",
            Address: "Adress/to/Parking2",
        },
        {
            Name: "Parking 3 ",
            Address: "Adress/to/Parking3",
        },
        {
            Name: "Parking 4",
            Address: "Adress/to/Parking4",
        },
    ]

    const [error, setError] = useState({ isError: false, msg: null })
    const [isLoading, setLoading] = useState(false)
    const [cardListDB, setCardListDB] = useState([])
    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true)

                console.log(search ? search : 'no search')
                const searchData = search ? search : ''
                const apiEndPoint = `/api/p/${searchData}`
                console.log(apiEndPoint)
                const res = await axios.get(apiEndPoint)
                console.log(res.data)

                setLoading(false)
                setCardListDB(res.data)
                setError({ isError: false, msg: null })
            } catch (error) {
                setLoading(false)
                setError({ isError: true, msg: error })
            }
        })()
    }, [search])

    if (error.isError) {
        return (
            <>
                <h1>{error.msg}</h1>
            </>
        )
    }

    return (
        <>
            <div className="p-6 flex flex-wrap gap-8 justify-center">
                {
                    isLoading ? (<div>Loading...</div>) : (
                        cardListDB && cardListDB.length > 0 ? (
                            cardListDB.map((e, i) => (
                                <Card key={i} index={e._id} parkingName={e.name} parkingAddress={e.address} bikeSlots={e.bikeSlots} carSlots={e.carSlots} />
                            ))
                        ) : (<div>no data</div>)
                    )
                }
            </div>
        </>
    )
}

export default CardListSection