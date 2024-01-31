import React from 'react'
import logo from '/public/logo.png'

function Logo({width = '100px'}) {
  return (
    <img src={logo} className='w-24' alt="" />
  )
}

export default Logo