import React from 'react'
import { netflix_logo } from '../utils/url'

const Header = () => {
  return (
    <div className="absolute px-4 py-3 z-10">
      <img className="w-32" src={netflix_logo}/>
    </div>
  )
}

export default Header;