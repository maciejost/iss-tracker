"use client"

import { Coordinates } from "@/app/api/iss-location/route";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function OurMapContainer({ coordinates }: {
 coordinates: Coordinates;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

 return (
  <>
    {
      isMounted && (
        <MapContainer center={[
          coordinates.lat,
          coordinates.lon
          ]} zoom={13} scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
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
  </>
 )
}