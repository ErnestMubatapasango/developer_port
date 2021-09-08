import React from 'react'
import Bar from '../Components/Bar'
import { languages, tools } from '../data'
 import {motion} from 'framer-motion'
import { fadeEffect } from '../animation'
const resume = () => {
    return (
        <div className='px-6 py-2'>
            {/**Education and Experience */}
            <div className='grid grid-cols-2 gap-6'>
                <motion.div variants={fadeEffect} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'> Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Computer Science</h5>
                        <p className='font-semibold'> @ National University of Science and Technology <br/> [2017 - 2021]</p>
                        <p>I am currently pursuing my Bsc in Computer Science </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeEffect} initial='initial' animate='animate'>
                    <h5 className='my-3 text-2xl font-bold'> Experience</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Web Developer</h5>
                        <p className='font-semibold'> @ Zimbabwe Power Company <br/> [2019 - 2020]</p>
                        <p>I worked as a Web Developer and IT Techician during my internship  </p>
                    </div>
                </motion.div>
            </div>

            {/**Language and tools */}
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <h5 className='my-2 text-2xl font-bold'>Languages & Frameworks</h5>
                        <div className='my-2'>
                            {
                                languages.map(Language => <Bar data={Language} key={Language.name}/>)
                            }
                        </div>
                </div>
                    {/**TOOLS */}
                <div>
                    <h5 className='my-2 text-2xl font-bold'>Tools & Softwares</h5>
                        <div className='my-2'>
                            {
                                tools.map(Tool => <Bar data={Tool} key={Tool.name}/>)
                            }
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default resume
