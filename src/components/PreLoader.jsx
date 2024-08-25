import React from 'react'
import './PreLoader.css'
import { useEffect } from 'react'
import { preLoaderAnim } from '../animations'


function PreLoader() {
    useEffect(() => {
      preLoaderAnim()
    
    }, [])
  return (
    <>
        <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </>
  )
}

export default PreLoader