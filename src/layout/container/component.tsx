import React, { FC } from 'react'

interface Props {
  className?: string
}

const Container: FC<Props> = props => (
  <div className={props.className}>{props.children}</div>
)

export default Container
