import {RiComputerLine } from 'react-icons/ri'
import {IProject, IServices, ISkill} from './type'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaJava, FaPager, FaReact, FaServer} from 'react-icons/fa'
import {BsBootstrapFill} from 'react-icons/bs'
import {BsCircleFill} from 'react-icons/bs'
import {SiReact} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'

{/**this file holds all the information on the pages */}


export const services: IServices[] = [ 
    /**i export the services array so that i will be able to import them the about page */
    {
        /**object */
        id:1,
        Icon: RiComputerLine,
        title: 'Frontend Developement',
        about: 'l can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>', 
        
    },
    
    {
        id:2,
        Icon: AiOutlineAntDesign,
        title: 'User Experience Designs',
        about: 'UX design is all about studying and researching how people use the sites.'//<b>Framer</b>,
        
    },
    
    {
        id:3,
        Icon: FaPager,
        title: 'Landing Page',
        about: 'creation of landing pages for digital marketing of companies and organizations',
        
    },

    {
        id:4,
        Icon: FaServer,
        title: 'User Interface Design',
        about: 'Visual design usually involved in the implementation of the application under development',
        
    },
  

]

/**we create 2 arrays for the language and tools */
export const languages: ISkill[] = [
    {
        id:1,
        Icon: SiReact,
        name: 'React',
        level: '70%',
        
    },

    {
        id:2,
        Icon:IoLogoJavascript,
        name: 'JavaScript',
        level: '70%',
        
    },

    {
        id:3,
        Icon: FaJava,
        name: 'Java',
        level: '30%',
        
    },
    
    {
        id:4,
        Icon: BsBootstrapFill,
        name: 'Bootstrap',
        level: '70%',
        
    },
    {
        id:5,
        Icon: FaReact,
        name: 'React-native',
        level: '50%',
        
    },
    
   

]

export const tools: ISkill[] = [
    {
        id:6,
        Icon: BsCircleFill,
        name: 'Framer',
        level: '50%',
        
    },
    {
        id:7,
        Icon: BsCircleFill,
        name: 'Illustrator',
        level: '40%',
        
    },
    {
        id:8,
        Icon: BsCircleFill,
        name: 'Figma',
        level: '35%',
        
    },
]
/**We create an array for the projects */
export const projects: IProject[] = [
    {
        id:1,
        name: "Epidemic Tracking Application",
        description: " Final Year Project...work in Pogress.....This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid-19.jpg",
        deployed_url:"",
        github_url: "",
        category: ['React'],
        key_tech: ['React','Chart.js','Firebase','Material UI','Node.js'],
    },

    {
        id:2,
        name: "Netflix clone",
        description: "This app is a clone of netflix we shows the basic functionality of  netflix",
        image_path: "/images/netflix-clone.jpg",
        deployed_url:"https://netflix-clone-tawanda.web.app",
        github_url: "https://github.com/ErnestMubatapasango/Netflix-clone",
        category: ["React"],
        key_tech: ['React','Firebase','Material UI','Node.js'],
    },
    {
        id:3,
        name: "Chat App",
        description: "Still under development.....This app is real time chat application which can be used within an organization",
        image_path: "/images/chat_app.jpg",
        deployed_url:"https://chat-app-v2-tawanda.web.app",
        github_url: "",
        category: ["Flutter"],
        key_tech: ['Flutter','Firebase','Material UI'],
    },
    {
        id:4,
        name: "Todo App",
        description: "This app is a todo application which can be used by an individual to create an activity checklist",
        image_path: "/images/todo.jpg",
        deployed_url:"https://todo-app-v2-tawanda.web.app",
        github_url: "https://github.com/ErnestMubatapasango/Todo-App",
        category: ["React"],
        key_tech: ['React','Firebase','Material UI','Node.js'],
    },
    {
        id:5
        ,
        name: "Tiktok Clone",
        description: "This app is a tiktok clone which demonstrates the surface functionality of the tiktok app it also makes use of the firebase backend as a service",
        image_path: "/images/tiktok.png",
        deployed_url:"https://tiktok-clone-tawanda.web.app",
        github_url: "https://github.com/ErnestMubatapasango/Tiktok-clone",
        category: ["React"],
        key_tech: ['React','Firebase','Material UI'],
    },

    
    
]