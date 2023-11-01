// create your App component here

import { useEffect, useState } from "react";

function App(){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then((imageData) => setData(imageData.message))
   }, [])

  if(!data) {
    return <p>Loading...</p>
  }
    return (

    <img src={data} alt="A Random Dog"/> 
       
    )
}

export default App;