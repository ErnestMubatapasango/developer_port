import { motion } from 'framer-motion'
import React from 'react'
import { fadeEffect, routeAnimation, staggerEffect } from '../animation'
import ServiceCard from '../Components/ServiceCard'
import { services } from '../data'



const index = () => {
  
   return (
    <motion.div 
    className='flex flex-col flex-grow px-6 pt-1'
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    >
      <h5 className='my-3 font-medium'>
        l am currently pursing Bsc Degree(final year) in Computer Science from the
        National University of Science and Technology. l have a year experience in web development.
      </h5>
      <div className='flex flex-col flex-grow p-4 mt-5 bg-black-700 ' style={{marginLeft: '-2.8rem', marginRight:'-2.8rem'}}>
          <h4 className='my-3 text-xl font-bold tracking-wide text-green-600 '>What l offer</h4>

          <motion.div className='grid gap-6 lg:grid-cols-2' variants={staggerEffect} initial="initial" animate="animate">
            {services.map(service => (

              <motion.div key={service.id} className='col-span-2 p-2 rounded-lg bg-black-200 lg:col-span-1' variants={fadeEffect}>
                <ServiceCard  service={service}/>
              </motion.div>
            ))}

      
          </motion.div>
      </div>
     </motion.div> 
  )
            }

export default index
