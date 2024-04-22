import React from 'react'
import Aboutpagenavbar from '../components/Aboutpagenavbar'
import Aboutcomponent from '../components/Aboutcomponent'
import image1 from '../images/Image.png'
import image2 from '../images/Image Copy.png'

const About = () => {
  return (
    <div>
        <Aboutpagenavbar />
        <Aboutcomponent image={image1} header='Light, Fast & Powerful' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam unde eos quia nesciunt id, in tempora vel! Odit, ducimus pariatur! Quaerat culpa excepturi consequuntur nostrum 

        reprehenderit perferendis, ipsa expedita ducimus harum numquam! Fugit facere vero, rerum id ipsum autem debitis dolore sunt fuga accusantium.'
        />
        <Aboutcomponent image={image2} />
    </div>
  )
}

export default About