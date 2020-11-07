import React, { memo } from 'react'
import Styles from './header.scss'
import Logo from '@/presentation/components/logo/logo'

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>ReactJS, Hooks, TDD, Clean Architecture, SOLID & Design Patterns</h1>
    </header>
  )
}

export default memo(Header)
