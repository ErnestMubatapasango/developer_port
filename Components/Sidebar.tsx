import React from 'react';
import {AiFillGithub,AiFillFacebook,AiFillLinkedin,AiFillPhone} from 'react-icons/ai';
import {GiTie} from 'react-icons/gi';
import {GoLocation} from 'react-icons/go';




const Sidebar = () => {

    return ( 

        <div>
            <div style={{display: "flex",
                        justifyContent: "center"}}>
                <img 
                    src="/images/IMG-20200909-WA0026.jpg"
                    alt='Bugs Bunny'
                    className='w-40 h-40 mx-auto rounded-full '
                />
            </div>
           
            <h1 className='my-4 text-4xl font-medium tracking-wider ' >
                <span className='text-green-400' >Ernest </span>
                 Dev
            </h1>  

            <h5 className='px-2 py-1 my-3 rounded-full bg-black-700 '>
                 Web Developer
            </h5>

            <a className='flex items-center justify-center px-2 py-1 my-3 rounded-full bg-black-700 '
                href="/Assets/Tawanda's Resume.pdf"
                download="Tawanda's Resume.pdf"
            >
                <GiTie className='w-5 h-5'/>Download Resume
            </a>

            {/**Social icons */}
            <div className='flex justify-around w-9/12 mx-auto text-green-400'>
                <a href='https://github.com/ErnestMubatapasango'>
                    <AiFillGithub className="w-8 h-8"/>
                </a>
                
                <a href='https://www.facebook.com/tawanda.mubatapasngo'>
                    <AiFillFacebook className="w-8 h-8"/>
                </a>
                
                <a href='https://www.linkedin.com/in/ernest-mubatapasango-8070b21b4/'>
                    <AiFillLinkedin className="w-8 h-8"/>
                </a>
                </div> 
                
                {/**addresses */}
                <div className='px-2 py-4 my-5 space-x-2 bg-black-700 ' style={{marginLeft: '-1.25rem', marginRight:'-1.25rem'}} >
                    <div>
                    <span className='flex items-center justify-center py-2 my-2' >
                        <GoLocation className='w-5 h-5'/> Zimbabwe,Bulawayo 🇿🇼 
                    </span>

                    </div>
                    <p className='flex items-center justify-center py-2 my-2' >
                     tawandamubatapasango@gmail.com
                    </p>
                    <p className='flex items-center justify-center py-2' > 
                    <AiFillPhone className='w-5 h-5'/> +263 783 486 305
                    </p>
                </div>
            
            

            {/**Buttons */}
            <div  style={{display: "flex", alignItems: 'center' ,justifyContent:'center', flexDirection:'column'}}>
                <button className= 'w-8/12 px-2 py-1 my-4 text-white bg-black rounded-full bg-gradient-to-r from-blue-500 to-green-500 focus:outline-none ' 
                    onClick={() => window.open('mailto:tawandamubatapasango@gmail.com')}
                >Email me</button>
                {/**<button 
                    className= 'w-8/12 px-2 py-1 my-4 text-white bg-black rounded-full bg-gradient-to-r from-blue-500 to-green-500 focus:outline-none '>Toggle UI</button>*/}
            </div>
        </div>
    )
}


export default Sidebar
