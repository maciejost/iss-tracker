"use client"

import { Coordinates } from "@/app/api/iss-location/route";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function OurMapContainer({ coordinates }: {
  coordinates: Coordinates;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function ChangeView({ center} : {
    center: [number, number];
  }) {
    const map = useMap();
    map.setView(center, 5);
    return null;
  }


  return (
    <>
      {
        isMounted && (
          <MapContainer

          center={[
            coordinates.lat,
            coordinates.lon
          ]} zoom={5} scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <ChangeView center={[coordinates.lat, coordinates.lon]} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coordinates.lat, coordinates.lon]}>
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