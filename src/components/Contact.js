import React from 'react'

const Contact = ({mode}) => {
  return (
    <>
      <div className="container">
          <h3 className="text-center mt-4" style={{color:`${mode==='dark'?'white':'black'}`}}>Please contact us Via Email.</h3>
      </div>
    </>
  )
}

export default Contact