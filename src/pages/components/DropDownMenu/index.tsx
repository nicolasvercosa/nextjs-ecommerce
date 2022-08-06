import React from 'react'
import DropDownMenuItem from '../DropDownMenuItem'
import { Container } from './styles'

interface Props {
  className?: string,
  onMouseLeave?: () => void
}

const DropDownMenu:React.FC<Props> = ({className, onMouseLeave}) => {
   
  return (
    <Container className={className} onMouseLeave={onMouseLeave} >
      <DropDownMenuItem title='Todos' />
      <DropDownMenuItem title='Mais Vendidos' />
      <DropDownMenuItem title='Acadêmicos' />
      <DropDownMenuItem title='Didáticos' />
      <DropDownMenuItem title='HQs e Mangás' />
      <DropDownMenuItem title='Infantil' />
    </Container>
  )
}

export default DropDownMenu