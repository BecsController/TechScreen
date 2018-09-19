import React from 'react'
import Employee from './Employee'

const StaffList = ({staff}) => (
  <div className="hero-body columns">
    <div className="box column is-8 is-offset-2">
      <h1 style={{marginBottom: '3vw'}} className="is-size-1 has-text-centered has-text-grey">Employees that live within 2km of Storypark</h1>
      <div style={{paddingBottom: '3vw'}} className="columns is-multiline">
        {staff.map((employee, i) => <Employee employee={employee} key={i} />)}
      </div>
    </div>
  </div>
)

export default StaffList
