import { config } from '@/helpers/config'
import React from 'react'

const ButtonCallNow = () => {
  return (
    <a href={`tel: ${config.contact.phone1}`} className="btn btn-outline-primary">CALL NOW</a>
  )
}

export default ButtonCallNow