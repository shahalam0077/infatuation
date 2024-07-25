import React from 'react'
import SecondarySectionTwo from './secondarySectionTwo';
import '../css/footer.css'

const SecondarySection = ({title,data}:{title:string,data:any}) => {
  return (
    <div>   
      <div className='footer-title' >{title}</div>
    {data.map((item: { item: any; }, index: number) => (
      <SecondarySectionTwo key={index} type={item.item} />
    ))}
    </div>
  )
}

export default SecondarySection;
