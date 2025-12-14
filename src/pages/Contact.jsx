import React from 'react'

function Contact() {
  return (
    <>
      <div className='bg-body-secondary'>

        <section className='d-flex align-items-center' style={{ backgroundImage: "url('https://i.redd.it/0ei6tp999i4d1.jpeg')", width: "100%", height: "300px", backgroundSize: "cover", backgroundPosition: "top" }}>
          <div className='container'>
            <h1 className='fw-bold text-white'>Contact</h1>
            <p className='fw-bold text-white'>Home / <span className='text-warning'>Contact</span></p>
          </div>
        </section>

        <section style={{ marginTop: "100px" }}>
          <div className="container">



            <div className="row">
              <div className=" bg-white mb-5 p-5 col-md-12 col-lg-8">
                <h6 className='fw-bold text-primary-emphasis'>Contact Us</h6>
                <div className='mt-1' style={{ width: "40px", height: "2px", backgroundColor: "yellow", borderRadius: "5px" }}></div>
                <h4 className='text-black mb-5'>Get in touch with us</h4>
                <form className='' action="">
                  <div className='mb-5'>
                    <input className='p-2 me-4 border rounded' style={{ width: "40%" }} type="text" placeholder='Your Name' />
                    <input className='p-2 me-4 border rounded' style={{ width: "40%" }} type="email" placeholder='Email' />
                  </div>
                  <div className='mb-5'>
                    <input className='p-2 me-4 border rounded' style={{ width: "40%" }} type="text" placeholder='Subject' />
                    <input className='p-2 me-4 border rounded' style={{ width: "40%" }} type="text" placeholder='Phone' />
                  </div>
                  <div className='mb-5'>
                    <input className='border rounded' style={{ width: "83%", height: "100px" }} type="text" placeholder='Message' />
                  </div>

                  <div>
                    <button className='btn btn-warning fs-5 fw-bold px-4 py-2'>Send</button>
                  </div>
                </form>
              </div>
              <div className="col-md-12 col-lg-4 bg-white p-5  mb-5">

                <h1 className='text-black '>Skill Hub</h1>
                <div className='mb-5' style={{ width: "40px", height: "2px", backgroundColor: "yellow", borderRadius: "5px" }}></div>
                <p className='fs-5 '>SkillHub is a transformative initiative designed to nurture young talent and empower them with essential skills for a promising career in the tech industry.</p>
                <button className='btn btn-outline-danger mt-5 px-5 fs-6'>LEAD MORE</button>
              </div>

            </div>
          </div>

        </section>

      </div>

    </>
  )
}

export default Contact