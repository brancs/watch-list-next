'use client'
import { MediaType } from '@/@types'
import Image from 'next/image'
import React from 'react'

type CardProps = {
  media: MediaType
}

function Card({ media }: CardProps) {
  return (
    <div>
      {media.imgLink && <Image src={media.imgLink} alt={media.name} />}
      {JSON.stringify(media)}
    </div>
  )
}

export default Card
