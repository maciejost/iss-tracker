import OurMapContainer from "./(components)/MapContainer";

export default function Tracker() {
 /* const data = await fetch("http://localhost:3000/api/iss-location");
 const coordinates = await data.json() as Coordinates; */

 return (
  <div className=" h-20">
   <OurMapContainer
    coordinates={{
     lat: 51.505,
     lon: -0.09
    }}
   />
  </div>
 );
}