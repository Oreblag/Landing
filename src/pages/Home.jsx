import React from 'react'
import Hero from '../components/Hero'
import Undrawmobile from '../components/Undrawmobile'
import Happynews from '../components/Happynews'
import image1 from '../images/undraw_happy_news_hxmt.png'
import image2 from '../images/undraw_social_influencer_sgsv.png'
import image3 from '../images/undraw_mention_6k5d.png'
import Rectangle from '../components/Rectangle'
import Footer from '../components/Footer'
import Mention from '../components/Mention'

const Home = () => {
  return (
    <div>
        <Hero />
        <Undrawmobile />
        <Happynews image={image1} />
        <Happynews image={image2} />
        <Mention image={image3} button='Purchase Now' />
        <Rectangle />
        <Footer />
    </div>
  )
}

export default Home