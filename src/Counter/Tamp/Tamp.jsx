import './Tamp.css'
import React, {useState , useEffect} from 'react';

import Variable from '../Variable/Variable';

function Tamp() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);   
    const [kelvin, setKelvin] = useState(273.15);

        useEffect(() => {
            setFahrenheit((celsius * 9/5) + 32);    
            setKelvin(celsius + 273.15);
        }, [celsius]);
    
        useEffect(() => {
            setCelsius((fahrenheit - 32) * 5/9);
            setKelvin((fahrenheit - 32) * 5/9 + 273.15);
        }, [fahrenheit]);
    
        useEffect(() => {
            setCelsius(kelvin - 273.15);
            setFahrenheit((kelvin - 273.15) * 9/5 + 32);
        }, [kelvin])


    return ( 
        <div className='temperletar-container'>
            <h3 className='temperletar-title'>Temperatures</h3>
            <h3 className='temperletar-display'>
                <span className='badge bg-primary'>{celsius.toFixed(2)} °C</span>
                <span className='badge bg-primary'>{fahrenheit.toFixed(2)} °F</span>
                <span className='badge bg-primary'>{kelvin.toFixed(2)} K</span>
                </h3>
            <div className='temperletar-variables'>
                <Variable type='float' name={'Celsius'} value={celsius} setValue={setCelsius}/>
                <Variable type='float' name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit}/>
                <Variable  type='float'name={'Kelvin'} value={kelvin} setValue={setKelvin}/>
            </div>
        </div>
     );
}

export default Tamp;