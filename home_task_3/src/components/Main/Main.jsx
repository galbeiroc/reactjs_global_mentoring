import React from 'react'
import { Nav } from './Nav/Nav'

import './Main.scss'
import { Content } from './Content/Content'

export const Main = () => {
  return (
    <main>
      <Nav />
      <Content value={'1'} />
    </main>
  )
}
