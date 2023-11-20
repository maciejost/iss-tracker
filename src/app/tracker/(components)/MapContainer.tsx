"use client"
import { Coordinates } from "@/app/api/iss-location/route";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function OurMapContainer({ coordinates }: {
 coordinates: Coordinates;
}) {
 const [isClient, setIsClient] = useState(false);
 useEffect(() => setIsClient(true), []);

 if (!window || !isClient) return null;

 return (
  <MapContainer center={[
   coordinates.lat,
   coordinates.lon
  ]} zoom={13} scrollWheelZoom={false}>
   <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   <Marker position={[51.505, -0.09]}>
    <Popup>
     A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
   </Marker>
  </MapContainer>
 )
}