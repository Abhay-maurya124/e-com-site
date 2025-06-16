import React from 'react'
import styled from 'styled-components'
import Herosecction from '../component/Herosecction'
import { data } from 'react-router-dom'
import Services from '../component/Services.jsx'
import Trusted from '../component/Trusted.jsx'
import FeatureProduct from '../component/FeatureProduct.jsx'

const Homepage = () => {
  const data ={
    name:"Abhay store"
  }
  return (<>
    <Herosecction myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
  </>
  
  )
}
export default Homepage;