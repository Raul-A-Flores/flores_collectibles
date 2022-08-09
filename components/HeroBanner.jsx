import React from 'react'
import Link from 'next/link'
import { urlFor} from '../lib/client'

const HeroBanner = ({heroBanner: { product, image, smallText, midText, desc, largeText1, largeText2, buttonText}}) => {
  return (
    
<div className='hero-banner-container'>
    <div>
      <p className='beats-solo'>
          {smallText}
      </p>
      <h3>{midText}</h3>
      <h1>{largeText1}</h1>

      <img src={urlFor(image)} alt='image' className='hero-banner-image' />
      <div>
        <Link href={`/`}>
          <button type='button'>{buttonText}</button>

        </Link>
        <div className='desc'>
          <h5>Desc</h5>
          <p>{desc}</p>

        </div>
      </div>
    </div>

</div>

  )
}

export default HeroBanner