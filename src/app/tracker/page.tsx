import { useMemo } from 'react';
import OurMapContainer from "./(components)/MapContainer";
import dynamic from 'next/dynamic';



export default function Tracker() {
 /* const data = await fetch("http://localhost:3000/api/iss-location");
 const coordinates = await data.json() as Coordinates; */

 const Map = useMemo(
  () => dynamic(() => import("./(components)/MapContainer"), { ssr: false }),
  []
);


 return (
  <div className=" h-96">
   <Map
    coordinates={{
     lat: 51.505,
     lon: -0.09
    }}
   />
  </div>
 );
}