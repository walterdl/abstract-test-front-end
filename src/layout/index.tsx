import React, { FC } from 'react'

// Own
import Header from './header'
import Container from './container'

const Layout: FC = props => (
  <>
    <Header />
    <Container>
      {props.children}
    </Container>
  </>
)

export default Layout
