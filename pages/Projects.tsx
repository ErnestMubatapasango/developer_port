import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeEffect, staggerEffect } from '../animation'
import ProjectCard from '../Components/ProjectCard'
import ProjectsNavbar from '../Components/ProjectsNavbar'

import { projects as projectsData  } from '../data'
import { Category } from '../type'

const Projects = () => {

    const [projects,setProjects] = useState(projectsData);
    const [active, setActive] =useState('all');

    const[ showDetail, setShowDetail] = useState<number | null>(null);

    const handlerFilterCategory = (category: Category | 'all') => {
        if(category === 'all')
        {
            setProjects(projectsData);
            setActive(category);
            return;
        }
     const newArray =   projectsData.filter((project) => project.category.includes(category));
     setProjects(newArray);
     setActive(category);
    };
    return (
        <div className='px-5 py-2 overflow-y-scroll ' style={{height: '65vh'}}>
             <ProjectsNavbar 
             handlerFilterCategory={handlerFilterCategory}
             active={active}/>

             <motion.div className='relative grid grid-cols-12 gap-4 my-3 '  variants={staggerEffect} initial="initial" animate="animate">
                {
                projects.map((project) => (
                    <motion.div className='col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4 bg-black-200' variants={fadeEffect} key={project.name}>
                        <ProjectCard project={project}  showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>     
                ))
                    }
            </motion.div>
        </div>

       
    )
}

export default Projects

