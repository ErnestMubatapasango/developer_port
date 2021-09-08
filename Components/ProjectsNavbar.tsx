import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem:FunctionComponent<{ 
    value: Category | 'all';
    handlerFilterCategory:Function;
    active:string;
}> = ({value,
    handlerFilterCategory,
    active,
}) => {

    let className = 'capitalize cursor-pointer hover:text-green-400'
    if(active === value)
        className = 'text-green-400'

    /**List of the categories */
    return(
    <li className={className}

     onClick={() => handlerFilterCategory(value)}>
        {value}
        </li>);
    }
const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
     return (
        <div className='flex flex-row px-3 py-2 space-x-3 overflow-x-auto list-none'>
            <NavItem value='all'{...props}/>
            <NavItem value='React' {...props}/>
            <NavItem value='Next' {...props}/>
            <NavItem value='Flutter' {...props}/>
            <NavItem value='Node' {...props}/>
            

            
        </div>
    )
}

export default ProjectsNavbar
