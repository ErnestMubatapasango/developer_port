import React, { FunctionComponent, useState } from 'react'
import { IProject } from '../type'
import {MdClose} from 'react-icons/md'
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeEffect, staggerEffect } from '../animation';

const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetail: number;
    setShowDetail:( id: number| null )=> void
}> = ({
    project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_tech,
    id,
    },
    showDetail,
    setShowDetail
         }) => {
             /** the state is for the images not to show all at once*/
             
    return (
        <div>
            {/** the details of a certain project */} 
            
                 <Image
                 src={image_path} 
                 alt={name}
                  className='cursor-pointer' onClick={() => setShowDetail(id)}
                  width= '300'
                  height='150'
                  layout='responsive'
                  />
                 <p className='my-2 text-center'>{name}</p>

                 {showDetail  === id && (
                 <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-white rounded-lg md:p-10 md:grid-cols-2 gap-x-12 bg-black-500">
                   <motion.div variants={staggerEffect} initial="initial" animate="animate">  

                       <motion.div variants={fadeEffect} className='border-4 border-gray-100'>
                            <Image
                                src={image_path} 
                                alt={name}
                                width= '300'
                                height='150'
                                layout='responsive'
                                />
                       </motion.div>
                 
                        <motion.div className='flex justify-center my-4 space-x-3' variants={fadeEffect}>

                                <a href = {github_url} className='flex items-center px-4 py-2 text-lg bg-black-200'>
                                    <AiFillGithub/> <span>Github</span>
                                </a>
                                
                                <a href= {deployed_url} className='flex items-center px-4 py-2 text-lg bg-black-200'>
                                    <AiFillProject/><span>Project</span>
                                </a>
                        </motion.div>
                    </motion.div>
                    

                         <motion.div variants={staggerEffect} initial="initial" animate="animate">

                             <motion.h2  variants={fadeEffect} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                             <motion.h3 variants={fadeEffect} className='mb-3 font-medium'>{description}</motion.h3>
                             <motion.div variants={fadeEffect} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                                 {
                                     key_tech.map(tech =>(
                                         <span className='px-2 py-1 my-1 bg-black-200'
                                          key={tech}>{tech}</span>
                                     ))}
                             </motion.div>
                         
                        </motion.div>
                        <button className='absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-black-200' onClick={() => setShowDetail(null)}>
                            <MdClose size={30}/>
                        </button>
                </div>

                )}
        </div>
    );
};

export default ProjectCard
