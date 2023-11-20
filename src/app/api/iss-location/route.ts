export type Coordinates = {
	lat: number
	lon: number
}

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  const response = await fetch('http://api.open-notify.org/iss-now.json');
  const data = await response.json();
  const { latitude, longitude } = data.iss_position;
    const coordinates: Coordinates = {
        lat: parseFloat(latitude),
        lon: parseFloat(longitude)
        }
    return Response.json(coordinates);
}

