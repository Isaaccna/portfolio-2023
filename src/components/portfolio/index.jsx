/* eslint-disable no-undef */
import { Heading } from '../heading';

import CoffeeDelivery from '../../assets/portfolio/coffee-delivery.png'
import DoctorCare from '../../assets/portfolio/doctor-care.png'
import RocketCoffee from '../../assets/portfolio/rocketcoffee.png'
import RunBuddy from '../../assets/portfolio/run-buddy.png';

import { PortfolioProject } from './portfolioProject';
export function Portfolio() {
  const projects = [
    {
      title: 'Coffee Delivery',
      image: CoffeeDelivery,
      link: "https://coffee-delivery-imwtg7i7i-isaaccna.vercel.app/",
      description: "Coffee store's website prototype.",
      technologies: ["React", "TS", "NodeJS"]
      
    },
    {
      title: 'Doctor Care',
      image : DoctorCare,
      link: 'https://isaaccna.github.io/NLW/',
      description: "Doctor clinic website prototype.",
      technologies: ["HTML","CSS"]
    },
    {
      title: 'RocketCoffee',
      image : RocketCoffee,
      link: 'https://idyllic-pika-f56ccc.netlify.app/',
      description: "Coffee shop menu prototype.",
      technologies: ["HTML","CSS"]
    },
    {
      title: 'Run Buddy',
      image : RunBuddy,
      link: 'https://isaaccna.github.io/run-buddy/',
      description: "Application prototype which purpose is to find a trainer for an exercise rotine. ",
      technologies: ["HTML","CSS"]
    }
  ]
  return (
    <section id='portfolio'>
      <Heading title='Portfolio' />
      <div className='list'>
        {projects.map((project, index) =>(
         <PortfolioProject key={index} project={project}/> 
  ))}
  </div>
  </section>
  )
}