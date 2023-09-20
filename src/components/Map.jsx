import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import "../css/styles.css"

let iconUbication = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
});

export default function Map() {
    return (
        <>
            <MapContainer center={[-34.34497215, -55.7610155]} zoom={15} scrollWheelZoom={false} className='mapa'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-34.34497215, -55.7610155]}>
                    <Popup>
                    Lunes a Viernes <br />
                    08:30 - 12:00 <br />
                    14:00 - 19:30 <br />
                    Sábado <br />
                    09:00 - 13:00 <br />
                    Domingo <br />
                    Cerrado <br />
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}