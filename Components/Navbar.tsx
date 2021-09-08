import React, { FunctionComponent, useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const NavItem:FunctionComponent<{
    activeItem : string,
    setActiveItem: Function,
    route: string,
    name: string
    
}> = ({activeItem,setActiveItem,route,name}) => {
    return(
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span className='hover:text-green-400' onClick= {() => setActiveItem(name)}>{name}</span>
                </a>
            </Link>
        ): null
    )
}
const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>();

    const {pathname} = useRouter()

    useEffect(() => {/**Changing the pathname to become the same as the activeItem name */
        if(pathname === '/') setActiveItem['About']
        if(pathname === '/Projects') setActiveItem['Projects']
        if(pathname === '/resume') setActiveItem['Resume']
        
    }, [])
    return (
        <div className='flex justify-between px-5 py-3 my-3'>
             <span className='text-xl font-bold text-green-400 border-b-4 border-green-400 '>{activeItem}</span>
            <div className='flex space-x-3 text-lg'>
             
               
             {/**ActiveItem selects the state between the about project and resume pages */}
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route='/' name='About'/>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route='/Projects' name='Projects'/>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route='/resume' name='Resume'/>

                           
            </div>
        </div>
    )
}

export default Navbar

