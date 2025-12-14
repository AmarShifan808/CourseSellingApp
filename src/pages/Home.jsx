import React from 'react'
import CoursesList from '../components/CourseList'



function Home() {
    return (
        <>
            <section className='d-flex align-items-center' style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?cs=srgb&dl=pexels-marta-klement-636760-1438081.jpg&fm=jpg')", width: "100%", height: "100vh", backgroundSize: "cover" }}>
                <div className="container">

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8  text-white text-center p-5 " style={{ background: 'linear-gradient(rgba(4, 14, 63, 0.73))' }}>
                            <h1>Skill Hub's 6-Month <br /> Empowerment Journey: <br /> Building Skills, Shaping Futures</h1>
                            <h4>Skill Hub: Your Gateway to a Brighter Future</h4> 
                        </div>
                        <div className="col-2"></div>
                    </div>

                </div>
            </section>

            <CoursesList/>

            <section>
                <div className="container" style={{marginTop:"200px"}}>

                    <div className="row">

                        <div className="col-md-12 col-lg-6">
                            <h6 className='fs-5 text-primary-emphasis'>Featured Instructor</h6>
                            <div className='mb-3' style={{ width: "40px", height: "2px", backgroundColor: "yellow", borderRadius: "5px" }}></div>
                            <h1 className='text-black mb-5'>Meet Our Instructor</h1>
                            <p>Meet Our Instructor: Our dedicated and experienced instructor is <br /> passionate about sharing their expertise and knowledge. With a <br /> proven track record of success, they are committed to guiding and <br /> empowering students on their learning journey. Get ready to learn <br /> from the best and achieve your educational goals with our <br /> exceptional instructor.</p>
                            <button className='btn btn-warning px-5 py-3 fw-bold text-primary-emphasis mt-5'>Career With Us</button>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                                    <div className='d-flex flex-column px-5 py-2' style={{ backgroundImage: "url('https://skillhub.co.in/images/trainer/Paresh%20Mutha.png')", width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "5px", overflow: "hidden" }} >
                                        <div className='mt-auto bg-white rounded text-center'>
                                            <p className='text-black'><b>Paresh MUtha</b> <br /> Senior Software Engineer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                                    <div className='d-flex flex-column px-5 py-2' style={{ backgroundImage: "url('https://skillhub.co.in/images/trainer/Nikita%20Muthiyan.png')", width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "5px", overflow: "hidden" }} >
                                        <div className='mt-auto bg-white rounded text-center'>
                                            <p className='text-black'><b>Dr.Nikita Muthiyan</b> <br /> BPTh-Dr.Nikita’s physiotherapy clinic</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                                    <div className='d-flex flex-column px-5 py-2' style={{ backgroundImage: "url('https://skillhub.co.in/images/trainer/Snehal%20Manjare.png')", width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "5px", overflow: "hidden" }} >
                                        <div className='mt-auto bg-white rounded text-center'>
                                            <p className='text-black'><b>Snehal Manjare</b> <br /> Volunteer at Art Of Living</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                                    <div className='d-flex flex-column px-5 py-2' style={{ backgroundImage: "url('https://skillhub.co.in/images/trainer/Rohiet%20Loadhaa.png')", width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "5px", overflow: "hidden" }} >
                                        <div className='mt-auto bg-white rounded text-center'>
                                            <p className='text-black'><b>Rohit Lodha</b> <br /> VP-Barclays</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home