
const convertToRadians = deg => deg * (Math.PI/180)

export default function getDistance(lat,lon) {
  const
    storyparkLat = -41.2920728,
    storyparkLong = 174.7748162,
    earthRadius = 6378

  let
    latDiff = convertToRadians(lat-storyparkLat),
    londiff = convertToRadians(lon-storyparkLong),
    latSin = Math.sin(latDiff/2),
    storyparkLatRad = convertToRadians(storyparkLat),
    latRad = convertToRadians(lat)

  let
    haversine = Math.pow(latSin, 2) + Math.cos(storyparkLatRad) * Math.cos(latRad) * Math.sin(londiff/2) * Math.sin(londiff/2),
    centralAngle = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1-haversine))

  return earthRadius * centralAngle
}
