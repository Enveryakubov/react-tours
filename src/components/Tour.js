import React, {useState} from 'react'

const Tour = ({data, removeTour}) => {

    const [text, setText] = useState(true)
 
    const textV = () => {
        setText(prev => !prev)
      }

    return (
        <div className="tourMain">
            <img className="tourImg" src={data.image} alt=""/>
            <div style={{padding:"20px"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{fontSize:"20px"}}><strong>{data.name}</strong></p>
                    <p style={{color:"blue", backgroundColor:"rgb(242, 250, 255)", padding:"5px"}}>RUB {data.price}</p>
                </div>
                <p style={{color:"rgb(102, 102, 167)"}}>{text? data.info.slice(0, 200): data.info}...<button onClick={textV} style={{color:"blue", backgroundColor:"white", border:"0px"}}> {text? "Read More": "Show Less"}</button></p>
                <div style={{textAlign:"center"}}>
                    <button className="btn" onClick={() => removeTour(data.id)}>Не интересно</button>
                </div>
            </div>
        </div>
    )
}

export default Tour
