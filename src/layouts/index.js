import React from 'react'
import Header from '../components/Header/Header'
import './index.scss'

export default ({ children }) => (
  <div className='app' style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Header />
    {children}
  </div>
)
