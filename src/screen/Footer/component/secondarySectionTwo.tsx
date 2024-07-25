import React from 'react';
import '../css/footer.css'

const SecondarySectionTwo = ({type}:{type:string}) => {
  return (
    <div className='section-text' >
    {type}
  </div>
  )
}

export default SecondarySectionTwo;