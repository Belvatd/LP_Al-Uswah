import React from 'react';
import square from '../../../images/square.png';
import { Button } from 'react-bootstrap'

export default function CardCarousel() {
  return (
    <div className="containerCard">
      <div className="contentCard">
        <img src={square} alt="" />
        <p>Play Group Islam Terpadu (PGIT)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
        <Button variant="outline-dark">Dark</Button>
      </div>
    </div>
  )
}
