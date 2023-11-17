# ISS-Tracker

En app som skal fungere som en innføring i frontendteknologier vi bruker i BM-Kjøp.

Det vi skal lage er en applikasjon som henter posisjonen til den internasjonale romstasjonen, proxye denne via Next sitt API til frontenden, og vise denne på et kart fra Leaflet. For å få jobbet med skjemaer, som vi kommer til å ha en haug av i løsningen, vil vi også implementere et skjema der brukeren kan legge inn adresser, og se hvor langt unna romstasjoner disse er.


## API'er og pakker

http://open-notify.org/Open-Notify-API/ISS-Location-Now/ - API'et til romstasjonen

https://leafletjs.com/ - Leaflet.js med dokumentasjon

https://geocode.maps.co/ - API som gjør adresser om til koordinater

https://nerdcave.com/tailwind-cheat-sheet - Cheat sheet for tailwind


## Teknisk implementasjon
### Sider
* En rot-layout som huser header og footer
* En forside på `/` som fungerer som en innføring i løsningen
* En side på `/tracker/` som viser kartet med gjeldende posisjon, og skjema for input av adresser
* En `GET`-route på `/api/iss-location` som returnerer lenge- og breddegrad av typen `Coordinates`
* En `GET`-route på `/api/coordinates` som returnerer lengde- og breddegrad av typen Coordinates

### Komponenter
* Komponent for skjemaet
* Komponent som viser frem adresser brukeren har skrevet inn
* Kart-komponent som henter posisjonen til romstasjonen, og viser denne på kartet. Kart-komponenten skal også ta i mot en prop `addressArray` av typen `AddressWithCoords[]` som er alle adresser brukeren har ført inn i skjemaet.

### Typer
```ts
type Address = {
	street: string
	postalCode: number
	country: string
}
```

```ts
type Coordinates = {
	lat: number
	lon: number
}
```

```ts
type AddressWithCoords = Address & Coordinates
```
