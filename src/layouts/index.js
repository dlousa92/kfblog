import React from 'react'
import Header from '../components/Header/Header'
import './index.scss'

export default ({ children }) => (
  <div className='app'>
    <Header />
    {children}
  </div>
)
