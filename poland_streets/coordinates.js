function parseContent(content) {
    var lines = content.split('\n').map(parseLine);
    return lines;
}
function parseLine(line, index) {
    var parts = line.split(',');
    var street = parts[6];
    var house = parts[7];
    var lat = +parts[10];
    var lon = +parts[11];
    return { street: street, house: house, lat: lat, lon: lon };
}
function isInsidePolygon(house, polygon) {
    var latitudes = polygon.latitudes, longitudes = polygon.longitudes;
    var lat = house.lat, lon = house.lon;
    var i, j = latitudes.length - 1;
    var odd = 0;
    var pLat = latitudes;
    var pLong = longitudes;
    for (i = 0; i < latitudes.length; i++) {
        if ((pLong[i] < lon && pLong[j] >= lon || pLong[j] < lon && pLong[i] >= lon)
            && (pLat[i] <= lat || pLat[j] <= lat)) {
            odd ^= Number((pLat[i] + (lon - pLong[i]) * (pLat[j] - pLat[i]) / (pLong[j] - pLong[i])) < lat);
        }
        j = i;
    }
    return Boolean(odd);
}
function parsePolygon(text) {
    var latitudes = [];
    var longitudes = [];
    text.split('\n').forEach(function (line) {
        var parts = line.split(',');
        longitudes.push(+parts[0]);
        latitudes.push(+parts[1]);
    });
    return ({ latitudes: latitudes, longitudes: longitudes });
}
function filterHousesInPolygon(houses, polygon) {
    return houses.filter(function (h, i) {
        return isInsidePolygon(h, polygon);
    });
}
function groupStreetsByHouse(houses) {
    var resultDict = {};
    houses.forEach(function (_a) {
        var street = _a.street, house = _a.house;
        if (resultDict[street])
            resultDict[street].houses.push(house);
        else
            resultDict[street] = { street: street, houses: [house] };
    });
    var result = [];
    Object.keys(resultDict).forEach(function (s) { return result.push(resultDict[s]); });
    return result;
}
