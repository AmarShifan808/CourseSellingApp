import React from 'react'

function CourseBanner() {
  return (
    <>
     <div className='d-flex align-items-center' style={{ backgroundImage: "url('https://leadersinnpk.com/wp-content/uploads/2021/01/chairman-message-title-1.png')", width: "100%", height: "300px", backgroundSize: "cover" }}>
        <div className='container'>
          <h1 className='fw-bold text-white'>Our Courses</h1>
          <p className='fw-bold text-white'>Home / <span className='text-warning'>Courses</span></p>
        </div>
      </div>
    </>
  )
}

export default CourseBanner