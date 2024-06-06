import React from 'react'
import Hero from '../../components/Hero/Hero'
import Picture from '../../components/Picture/Picture'
import Title from '../../components/Title/Title'
import Features from '../../components/Features/Features'
import Faq from '../../components/Faq/Faq'
import dark_arrow from '../../components/assets/dark-arrow.png'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Picture />
      <Title subtitle='Manage your events' title='Everything you need to start managing your events' subtitleAnother='Discover a complete solution designed to effortlessly kickstart your event management journey, offering all the essential tools you need ' />
      <Features />
      <Title subtitleAnother='Find Detailed Answers to Your Most Commonly Asked Questions' title='Frequently asked questions' />
      <Faq />
      <Title title='Optimize Your Event Managing process!' subtitleAnother='Ease your event planning and managing process with Softech Event management system' />
      <div className="get-started-button">
        <RouterLink to="/login">
          <button className="get-started">
            Get started <img src={dark_arrow} alt="arrow" />
          </button>
        </RouterLink>
      </div>
      <Footer />
    </div>
  )
}

export default Home