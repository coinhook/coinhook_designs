import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { SSRProvider } from 'react-bootstrap'

const Home: NextPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        }
        }, []);
    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = "/js/tiles.js";
        script.async = true;
        
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        }
        }, []);
  return (

      <div className='tileContainer'>
            </div>
  )
}

export default Home
