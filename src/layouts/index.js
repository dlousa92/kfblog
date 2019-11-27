import React from 'react'
import Header from '../components/Header/Header'
import './index.scss'

export default ({ children }) => (
  <div className='app'>
    <Header />
    <div className='app-body'>{children}</div>
  </div>
)
