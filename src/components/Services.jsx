import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title : "Advertising",
            description: "We turn bold idea into power digital products",
            icon: assets.ads_icon
        },
        {
            title: "Content marketing",
            description: "We turn bold idea into power digital products",
            icon: assets.marketing_icon
        },
        {
            title: "Content Writing",
            description: "We turn bold idea into power digital products",
            icon: assets.content_icon
        },
        {
            title: "Social media",
            description: "We turn bold idea into power digital products",
            icon: assets.social_icon
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'> 
        <img src={assets.bgImage2} alt="" className='absolute -top-10 -left-70 -z-1 dark:hidden'/>

        <Title title='How can we help?' description="From strategy to execution, we craft digital solutions that move your business forward."/>
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default Services