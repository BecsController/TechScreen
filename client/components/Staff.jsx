import React from 'react'
import getDistance from '../../server/distance'

import {staff} from '../../staff_list.json'

let sortedStaff = staff.filter(staffMember => getDistance(staffMember.location.latitude, staffMember.location.longitude) <= 2)

sortedStaff.sort((a, b) => a.name > b.name)

sortedStaff.map(employee => employee.distance = getDistance(employee.location.latitude, employee.location.longitude).toFixed(2))

const Staff = () => {

  return (
    <div className="hero-body columns">
      <div className="box column is-8 is-offset-2">
        <h1 style={{marginBottom: '3vw'}} className="is-size-1 has-text-centered has-text-grey">Employees that live within 2km of Storypark</h1>
        <div style={{paddingBottom: '3vw'}} className="columns is-multiline">
          {sortedStaff.map(employee => {
            return (
              <div style={{marginBottom: '1vw'}} key={employee.name} className="column is-4">
                <h3 className="is-size-4 has-text-link">{employee.name}</h3>
                <h4 className="is-size-5 has-text-info">{employee.role}</h4>
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
