import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FAI = (props) => {
  return (
      <FontAwesomeIcon {...props} className={`ev-icon ${props.className}`} />
  )
}

export default FAI
