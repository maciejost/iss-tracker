import { Coordinates } from "../iss-location/route";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const address = searchParams.get('address')
    const response = await fetch(`https://geocode.maps.co/search?q=${address}`);
    const data = await response.json();
    const { lat, lon } = data[0];
    const coordinates: Coordinates = {
        lat: parseFloat(lat),
        lon: parseFloat(lon)
        }
    return Response.json(coordinates);
}
