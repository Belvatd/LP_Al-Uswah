import React from 'react'
import CarouselContent from '../../fragments/CarouselContent'
import Footer from '../../fragments/Footer'
import NavBar from '../../fragments/NavBar'
import TopMenu from '../../fragments/TopMenu'
import WhyContent from '../../fragments/WhyContent'

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <TopMenu />
      <CarouselContent />
      <WhyContent/>
      <Footer/>
    </div>
  )
}
