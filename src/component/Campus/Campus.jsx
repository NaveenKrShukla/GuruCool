import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/img/gallery-1.png'
import gallery_2 from '../../assets/img/gallery-2.png'
import gallery_3 from '../../assets/img/gallery-3.png'
import gallery_4 from '../../assets/img/gallery-4.png'
import white_arrow from '../../assets/img/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="Campus 1" />
        <img src={gallery_2} alt="Campus 2" />
        <img src={gallery_3} alt="Campus 3" />
        <img src={gallery_4} alt="Campus 4" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
