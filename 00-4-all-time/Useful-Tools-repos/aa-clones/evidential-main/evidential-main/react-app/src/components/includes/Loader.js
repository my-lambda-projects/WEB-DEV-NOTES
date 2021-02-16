import React from 'react'
import FAI from './FAI';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Loader = (props) => {
  return (
    <FAI icon={faCircleNotch} {...props} className={`loader ${props.className}`} />
  )
}

export default Loader
