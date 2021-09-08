import {IconType} from 'react-icons'

/**Interface for the about page */
export interface IServices {
    /**name  type */
    id:number,
    title: string,
    about: string,
    Icon: IconType
}

/**Interface for the resume page */
export interface ISkill {
    id:number,
    name: string,
    level: string,
    Icon: IconType
    
}

/**We go to data.ts to create the array */
/**Interface for the projects page */
export interface IProject{
    id:number,
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[]/**declared as astring array because one project can belong to different categories */,
    key_tech: string[]
}

/**We create a category type that holds the framework categories */
export type Category = "React"|"Next"|"Flutter"|"Node";