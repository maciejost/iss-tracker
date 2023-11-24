'use client'
import { useEffect, useMemo, useState } from 'react';
import OurMapContainer from "./(components)/MapContainer";
import dynamic from 'next/dynamic';
import { Coordinates } from '../api/iss-location/route';




export default function Tracker() {

 const [coordinates, setCoordinates] = useState<Coordinates>({
  lat: 51.505,
  lon: -0.09
 });

 async function getCoordinates() {
  const data = await fetch("/api/iss-location");
  const coordinates = await data.json() as Coordinates;
  return coordinates;
 }

 const Map = useMemo(
  () => dynamic(() => import("./(components)/MapContainer"), { ssr: false }),
  []
 );

 useEffect(() => {
  setInterval(() => {
   getCoordinates().then((coordinates) => {
    setCoordinates(coordinates);
   });
  }, 1000);
 }, []);

 return (
  <div className=" h-96 max-w-4xl mx-auto">
    <h1 className="text-4xl text-center my-5">ISS Tracker</h1>
   <Map
    coordinates={coordinates}
   />
  </div>
 );
}