
function convertToRadians(deg) {
  return deg * (Math.PI/180)
}

export default function getDistance(lat,lon) {
  let storyparkLat = -41.2920728
  let storyparkLong = 174.7748162
  let earthRadius = 6378

  let latDiff = convertToRadians(lat-storyparkLat)
  let londiff = convertToRadians(lon-storyparkLong)

  let latSin = Math.sin(latDiff/2)
  let storyparkLatRad = convertToRadians(storyparkLat)
  let latRad = convertToRadians(lat)

  let haversine = Math.pow(latSin, 2) + Math.cos(storyparkLatRad) * Math.cos(latRad) * Math.sin(londiff/2) * Math.sin(londiff/2)
  let centralAngle = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1-haversine))
  let distance =  earthRadius * centralAngle

  return distance
}
