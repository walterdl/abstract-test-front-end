import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

interface Props {
  className?: string;
}

const linkStyle = {
  textDecorationLine: 'none'
}

const Header: FC<Props> = props => (
  <AppBar className={props.className}>
    <div className="header__links-container">
      <Link to="/" style={linkStyle}>
        <Button>
          Lista de partidos
        </Button>
      </Link>
    </div>
    <p className="header__author">@WalterDevia</p>
  </AppBar>
)

export default Header
