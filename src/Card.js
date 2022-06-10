import React from 'react'

const Card = (props) => {
  return (
   <>
   <div className='cards'>
     <div className='card'>
       <img src={props.img_src} alt='movie_banner' className='card_img'/>
     </div>
     <div className='card_info'>
       <span className='card_category'>{props.title} </span>
       <h3 className='card_title'>{props.Mname} </h3>
       <a href={props.links} target="_blank">
         <button>Watch Now</button>
       </a>
     </div>
   </div>
   


   </>
  )
}

export default Card;