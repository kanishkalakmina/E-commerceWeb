import React from 'react'
import PhotoIns from './PhotoIns'


function Photo() {
    const imageUrls =[
        "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1667549494/cld-sample-5.jpg",
        "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821080/vpavic_211006_4796_0061_efn1ps.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1667549492/cld-sample.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821158/ASKET-woven-belt_ggkamz.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821213/w1900_q65_tiyclq.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821266/9vtmpw9qfevpjsfbqxwq_img76101024x10242xwebp_xjr5eg.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821317/photo-1542291026-7eec264c27ff_kyxdpg.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821410/vje6h_512_u2lvsa.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821538/whistles-puff-sleeve-detail-denim-shirt-denim-01_gbikbu.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821739/zacefronthumbnail-1478047681_uu72cx.jpg",
       "https://res.cloudinary.com/dqa0zvxcb/image/upload/v1671821791/mens-denim-jacket-outfits-e1585588309345_bmxfkv.jpg"
        
        
    ]
  return (
    <div>
        <PhotoIns imageUrls={imageUrls} columnCount='3' gap='10'></PhotoIns>
    </div>
  )
}

export default Photo 