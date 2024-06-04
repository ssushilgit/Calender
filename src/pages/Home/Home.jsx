import React from 'react'
import Hero from '../../components/Hero/Hero'
import Picture from '../../components/Picture/Picture'
import Title from '../../components/Title/Title'
import Features from '../../components/Features/Features'

const Home = () => {
  return (
    <div>
        <Hero />
        <Picture />
        <Title subtitle='Manage your events' title='Everything you need to start managing your events' subtitleAnother='Discover a complete solution designed to effortlessly kickstart your event management journey, offering all the essential tools you need '/>
        <Features/>
    </div>
  )
}

export default Home