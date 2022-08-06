import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

type Props = {
  title: string
}

const DropDownMenuItem: React.FC<Props> = ({title})  => {
  return (
    <Container>
      {title}
    </Container>
  )
}
 

export default DropDownMenuItem







