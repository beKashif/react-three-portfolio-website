import React from 'react'
import headerStyles from './Header.module.css'

const Header = () => {
  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.headerContent}>
            <h1>Kashif Shehzad</h1>
            <p>Developer | Content Creater</p>
        </div>
    </header>
  )
}

export default Header