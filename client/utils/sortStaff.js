import getDistance from './distance'

export default staff => staff
  .map(employee => {
    const {location} = employee
    employee.distance = getDistance(location.latitude, location.longitude).toFixed(2)
    return employee
  })
  .filter(({distance}) => distance <= 2)
  .sort((a, b) => a.name > b.name)
