import React,{useState,useEffect} from 'react'
import "./App.css";
function Tempapp() {
const [city,setCity] = useState(null);
const [search,setSearch] = useState('mumbai')

useEffect(()=>{
const  fetchapi = async()=>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=525a91d071d51dbaa44916b3d96d296a`
        const response = await fetch(url)
        const resjson = await response.json();

        console.log(resjson.main);

        setCity(resjson.main)
    }

    fetchapi();
},[search])

    return (
        <div>
            <div className="main-box">
                <div className="box">
                <div className="inputdata">
                    <input type="search"
                    className="inputsearch"
                    onChange={(event)=>{
                        setSearch(event.target.value)

                    }}/>
            

                </div>

                  {!city ? (
                      <p>Data is not found</p>
                  ):(
                      <div>
                          <div className="info">
                        <h2 className="location"><i className ="fas fa-street-view fa-2x"></i>{search}</h2>
                        <h1 className="temp">
                            {city.temp}
                        </h1>
                        <h3 className="temp_max">Min:5:25Cel | Max:5:25Cel</h3>
                    </div>
                      </div>
                  )

                  }

                        
                  
                
              
                </div>
            </div>
        </div>
    )
}

export default Tempapp
