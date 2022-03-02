import React from 'react';
import { Button } from 'react-bootstrap'

export default function CardCarousel({ image, title, desc, link }) {
  return (
    <div className="containerCard">
      <div className="contentCard">
        <img src={image} alt="" />
        <h6>{title}</h6>
        <br />
        <p>{desc}</p>
        <a href={link}>
          <Button size="xl" variant="outline-dark">
            Selengkapnya
          </Button>
        </a>
      </div>
    </div>
  )
}
