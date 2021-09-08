import { ThemeProvider } from 'next-themes'
import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../styles/globals.css'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
        <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 "> 

            <div className="col-span-12 p-4 px-5 my-12 text-base text-center bg-black-500 lg:col-span-3 rounded-2xl" >
              <Sidebar/>
              </div>

              <div className='flex flex-col col-span-12 p-4 px-5 my-12 overflow-hidden bg-black-500 lg:col-span-9 rounded-2xl'>
                    <Navbar/>

                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                    
                </div>
    
      </div>
    </ThemeProvider>
  )
 
}

export default MyApp
