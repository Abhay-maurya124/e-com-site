import React from 'react'
import styled from 'styled-components'
import Herosecction from '../component/Herosecction'
import { data } from 'react-router-dom'
import Services from '../component/Services.jsx'
import Trusted from '../component/Trusted.jsx'

const Homepage = () => {
  const data ={
    name:"Abhay store"
  }
  return (<>
    <Herosecction myData={data}/>
    <Services/>
    <Trusted/>
  </>
  
  )
}
export default Homepage;