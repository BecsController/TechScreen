import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import StaffList from './StaffList'

import sortStaff from '../utils/sortStaff'
import {staff} from '../staff_list.json'

const App = () => {
  return (
    <Router>
        <StaffList staff={sortStaff(staff)} />
    </Router>
  )
}

export default App
