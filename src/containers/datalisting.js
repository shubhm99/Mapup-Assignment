import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from 'antd';
import { Select } from 'antd';
import { useRef } from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'

const { Option } = Select;
const DataListing = () => {
    const[name, setname] = useState("Select Country");
    const[currencyb, setcurrency] = useState("")
    const[uosb, setuos] = useState("")
    const[uodb, setuod] = useState("")
    const[uovb, setuov] = useState("")
    const [position, setPosition] = useState({lat:40.50000, lng:-89.50000})

    const zoomLevel = 5;
    const mapRef = useRef();

    const datas = useSelector((state) => state.allData.datas);
    const { country, currency, uos, uod, uov, pos } = datas;
    console.log(position);

     const uptval = (event) =>{
         event.preventDefault();
    }
     const updata = (event) => {
        setname(datas[event].country);
        setcurrency(datas[event].currency);
        setuos(datas[event].uos);
        setuod(datas[event].uod);
        setuov(datas[event].uov);
        setPosition(datas[event].pos);
     }

    return(
        <>
        <div style={{position:"relative"}}>
                <div style={{position:"absolute", zIndex:0, height:520, width:'100%', top:0, left:0}}>
                <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false} ref={mapRef} style={{height:520, width:'100%'}}> 
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                </div>
                <div style={{position:"absolute", zIndex:9, width:'100%'}}> 
                <form  onSubmit={uptval}>
                <Select defaultValue="Select Country" style={{ width: 180 }} onChange={updata}>
                <Option value={0} key={0}>United States</Option>
                <Option value={1} key={1}>United Kingdom</Option>
                <Option value={2} key={2}>India</Option>
                </Select>
                <button type='submit' style={{ background:'#84DFFF', borderColor:'#84DFFF', borderRadius:5, cursor:'pointer', margin:10}}>Load</button>
                <Card title={name} style={{float:'right', width: 300 }}>
                <p>Currency Symbol: {currencyb}</p>
                <p>Units of Speed: {uosb}</p>
                <p>Units of Distance: {uodb}</p>
                <p>Units of Volume: {uovb}</p>
                </Card>
                </form>
                </div>
        </div>
        </>
    );
};

export default DataListing;