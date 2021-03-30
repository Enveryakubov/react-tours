import Tours from "./components/Tours"
import {useState, useEffect} from "react"
import Loading from "./components/Loading"


function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://course-api.com/react-tours-project"

  const loadData = async() => {
    let res = await fetch(url)
    let data = await res.json()
    setLoading(false)
    setTours(data)
  }
  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id))
  }
  useEffect(() => {
    loadData()
    console.log("eergr")
  }, [])

  if (loading) {
    return (
      <div>
        <Loading/>
      </div>
    )
  }

  if (tours.length === 0) {
    return (
      <div style={{padding:"50px"}}>
        <h1 className="mainTitle">No tours left</h1>
        <div style={{textAlign:"center"}}>
          <button className="btn" style={{border: "1px blue solid", color:"blue"}} onClick={loadData}>Refresh</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{padding:"50px"}}>
        <h1 className="mainTitle">Our Tours</h1>
        <hr/>
      </div>
        <Tours data={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
