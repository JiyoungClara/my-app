import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section';
import Wave from '../components/Wave';


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup" >
      <h1>Learn to <br/>design and code React apps </h1>
      <p>test paragraph </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2 by clicking this.</Link>

      <div className="Logos">
      <img src={require('../images/logo-sketch.png')} width="50"/>
      <img src={require('../images/logo-figma.png')} width="50"/>
      <img src={require('../images/logo-studio.png')} width="50"/>
      <img src={require('../images/logo-framer.png')} width="50"/>
      <img src={require('../images/logo-react.png')} width="50"/>
      <img src={require('../images/logo-swift.png')} width="50"/>
      </div>
      <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="2"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="hey"
          text="8 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="3"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} />
      </div>
    </div>
    <Section>
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify"
    </Section>
  </div>
)

export default IndexPage