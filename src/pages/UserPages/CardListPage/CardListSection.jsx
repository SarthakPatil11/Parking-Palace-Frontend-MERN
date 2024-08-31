import { useState } from "react"
import Card from "../../../components/Card"

const CardListSection = ({ search }) => {
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

    const [isLoading, setLoading] = useState(false)

    return (
        <>
            <div className="p-6 flex flex-wrap gap-8 justify-center">
                {/* {
                    cardlist && cardlist.length > 0 ? (
                        cardlist.map((e, i) => (
                            <Card key={i} parkingName={e.Name} parkingAddress={e.Address} />
                        ))
                    ) : (<div>no data</div>)
                } */}
                {
                    isLoading ? (<div>Loading...</div>) : (
                        cardlist && cardlist.length > 0 ? (
                            cardlist.map((e, i) => (
                                <Card key={i} index={i} parkingName={e.name} parkingAddress={e.address} bikeSlots={e.bikeSlots} carSlots={e.carSlots} />
                            ))
                        ) : (<div>no data</div>)
                    )
                }
            </div>
        </>
    )
}

export default CardListSection