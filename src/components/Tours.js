import React from 'react'
import Tour from "./Tour"
import {v4 as u} from "uuid"


const Tours = ({data, removeTour}) => {
    return (
        <div>
            {data.map(elem => <Tour key={u()} data={elem} removeTour={removeTour}/>)}
        </div>
    )
}

export default Tours
