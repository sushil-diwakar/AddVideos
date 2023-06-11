import React from 'react'

const About = ({mode}) => {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-4" style={{color:`${mode==='dark'?'white':'black'}`}}>Created By Sushil</h2>
         <h3 className="text-center " style={{color:`${mode==='dark'?'white':'black'}`}}>This is a simple react website to add,update,delete video details in a list.</h3>
      </div>
    </>
  )
}

export default About