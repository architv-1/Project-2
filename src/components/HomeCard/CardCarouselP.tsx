import React from 'react'
import { CardCarousel } from "../ui/card-carousel"

const CardCarouselP = () => {
  const images = [
    { src: "/images/1.png", alt: "Image 1" },
    { src: "/images/2.png", alt: "Image 2" },
    { src: "/images/3.png", alt: "Image 3" },
  ]
  return (
   <div className="pt-40">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default CardCarouselP
