type House = {street: string, house: string, lat: number, lon: number};
type Polygon = {latitudes: number[], longitudes: number[]}
type StreetWithHouseFilter = {street: string, houses: string[]}

function parseContent(content: string): House[] {
    const lines = content.split('\n').map(parseLine)
    return lines
}

function parseLine(line: string, index: number): House {

    const parts = line.split(',')
    const street = parts[6]
    const house = parts[7]
    const lat = +parts[10]
    const lon = +parts[11]
    return {street, house, lat, lon}
}

function isInsidePolygon(house: House, polygon: Polygon): boolean {
    const {latitudes, longitudes} = polygon
    const {lat, lon} = house
    var i, j=latitudes.length-1 ;
    var odd = 0;

    var pLat = latitudes;
    var pLong = longitudes;

    for (i=0; i<latitudes.length; i++) {
        if ((pLong[i]< lon && pLong[j]>=lon ||  pLong[j]< lon && pLong[i]>=lon)
            && (pLat[i]<=lat || pLat[j]<=lat)) {
              odd ^= Number( (pLat[i] + (lon-pLong[i])*(pLat[j]-pLat[i])/(pLong[j]-pLong[i])) < lat );  
        }

        j=i; 
    }

    return Boolean(odd);
}

function parsePolygon(text: string): Polygon {
    const latitudes: number[] = []
    const longitudes: number[] = []

    text.split('\n').forEach(line => {
        const parts = line.split(',')
        longitudes.push(+parts[0])
        latitudes.push(+parts[1])
    })

    return ({latitudes, longitudes})
}

function filterHousesInPolygon(houses: House[], polygon: Polygon) {
    return houses.filter((h, i) => {
        return isInsidePolygon(h, polygon)
    })
}

function groupStreetsByHouse(houses: House[]): StreetWithHouseFilter[] {
    const resultDict: {[street: string]: StreetWithHouseFilter} = {}

    houses.forEach(({street, house}) => {
        if (resultDict[street])
            resultDict[street].houses.push(house)
        else
            resultDict[street] = {street, houses: [house]}
    })

    const result: StreetWithHouseFilter[] = []
    Object.keys(resultDict).forEach(s => result.push(resultDict[s]))

    return result
}

function formatAsDodoCsv(streets: StreetWithHouseFilter[]): string {
    const header = `Type,pl-PL,House Filter,Post code`;
    const body = streets.map(s => `,${s.street},"${s.houses.join(',')}",`).join('\n')
    return `${header}\n${body}`
}