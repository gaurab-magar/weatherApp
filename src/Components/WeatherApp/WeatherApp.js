import React from 'react';
import './weatherApp.css';
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";


const WeatherApp = () => {
    let api_key = "f9382b5b05752b999597ef0937bcc0b0";
    const [wicon,setWicon] = useState(cloud_icon);
    const search_icon = async() =>{
        const element = document.getElementById("city-input");
        if(element[0].value === "")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&lon=10.99&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity");
        const wind = document.getElementsByClassName("wind");
        const temperature = document.getElementsByClassName("temperature");
        const location = document.getElementsByClassName("location");

        humidity[0].innerHTML = data.main.humidty;
        wind[0].innerHTML = data.wind.speed;
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
        if(data.weather[0].icon === '01d' || data.weather[0].icon === "01n" )
        {
            setWicon(clear_icon)
        }else if (data.weather[0].icon === '02d' || data.weather[0].icon === "02n" )
        {
            setWicon(cloud_icon)
        }else if (data.weather[0].icon === '03d' || data.weather[0].icon === "03n" )
        {setWicon(drizzle_icon)}
        else if (data.weather[0].icon === '04d' || data.weather[0].icon === "04n" )
        {setWicon(rain_icon)};
        

}
  return (
    <div>
         <div className="container">
            <div className="card rounded-4 text-white border-0">
                <div className="card-body p-4 py-5 text-center">
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-10'> 
                            <input id='city-input' className='form-control rounded-5' placeholder='Search'/>
                        </div>
                        <div className='col-2 ps-0'> 
                            <img className='bg-white search-icon' src={search_icon} alt=''/>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center py-2' onClick={()=>{search_icon()}}>
                        <img className='img-element' src={wicon} alt="" />
                    </div>
                        <h4 className='temperature'>24 c</h4>
                        <h5 >London</h5>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='icon' src={humidity_icon} alt=''/>
                            <div className='data'>
                                <p className='m-0 humidity'>64%</p>
                                <p className='m-0 '>Humidity</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='icon' src={wind_icon} alt=''/>
                            <div className='data'>
                                <p className='m-0 wind'>18km/hr</p>
                                <p className='m-0'>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp