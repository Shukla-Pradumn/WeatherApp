import React, { useEffect, useState } from "react";
import "./style.css";

const Tempapp = ()=>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lucknow");

    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bb51506316fac7be16d70762711eaa80`
            const response = await fetch(url);
           
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    },[search])

    return(
        <>
        <div className="main">
            <div className="box">
                <div className="inputData"><h3>Search Your City Temperature  </h3>
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event)=>{
                            setSearch(event.target.value)
                        }}
                        />
                </div>
            </div>

        {! city ? (
            <p>No data Found</p>
        ) : (
            <div className="info">
                <h2 className="location">
                    {search}
                </h2>
                <h1 className="temp">
                        {city.temp} ° cel
                </h1>
                <h3 className="tempmin_max">Min:{city.temp_min} cel | Max:{city.temp_max}° cel  </h3>
            </div>
        )}
        </div>
        </>
    )
}

export default Tempapp; 