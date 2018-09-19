import React from 'react'
import getDistance from '../../server/distance'

import {staff} from '../../staff_list.json'

let sortedStaff = staff.filter(staffMember => getDistance(staffMember.location.latitude, staffMember.location.longitude) <= 2)
//filter staff who are within 2km of office

sortedStaff.sort((a, b) => a.name > b.name)
//sort filtered staff into alphabetical order

sortedStaff.map(employee => employee.distance = getDistance(employee.location.latitude, employee.location.longitude).toFixed(2))
//add new key value pair to each employee of the result of the distance function

const Staff = (props) => {

  return (
    <div className="hero-body columns">
      <div className="box column is-8 is-offset-2">
        <h1 className="is-size-1 has-text-centered has-text-grey">Employees that live within 2km of Storypark</h1>
        <div className="columns is-multiline">
          {sortedStaff.map(employee => {
            return (
              <div key={employee.name} className="column is-4">
                <h3>{employee.name}</h3>
                <h4>{employee.role}</h4>
                <p>Distance from Storypark office: {employee.distance} km</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Staff
