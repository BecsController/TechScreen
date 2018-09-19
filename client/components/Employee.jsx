import React from 'react'

 const Employee = ({employee}) => (
  <div style={{marginBottom: '1vw'}} key={employee.name} className="column is-4">
    <h3 className="is-size-4 has-text-link">{employee.name}</h3>
    <h4 className="is-size-5 has-text-info">{employee.role}</h4>
    <p>Distance from Storypark office: {employee.distance} km</p>
  </div>
)

export default Employee
