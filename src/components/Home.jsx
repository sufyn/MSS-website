import React from "react";

function Home() {
    return (
        <div className="home">
            <main />

            <section className="hero-section hero-section-full-height d-flex justify-content-center align-items-center">
                <div className="section-overlay">
    
                 
                                {/* <img class="d-block w-100"  src="images/slideshow/msshero.jpg" alt="First slide" /> */}
                    {/* <img src="images/slideshow/eban3.jpg" className="services-image img-fluid" alt="" style={{ maxWidth: '100%' }}/> */}
                    {/* <img src="images/slideshow/msshero.jpg" className="services-image img-fluid" alt="" style={{ maxWidth: '100%' }}/> */}
                    {/* <img src="images/slideshow/hero2.jpg" className="services-image img-fluid" alt="" style={{ maxWidth: '100%' }}/> */}

                </div>
      
                <div class="container">
                    <div class="row">

                        <div class="col-lg-7 col-12 text-center mx-auto">
                            <h1 class="cd-headline rotate-1 text-white mb-4 pb-2">
                                <span>We help to </span>
                                <span class="cd-words-wrapper">
                                    <b class="is-visible">Invent</b>
                                    <b >Innovate</b>
                                    <b >Inspire</b>
                                </span>
                            </h1>

                            <a class="custom-btn btn button button--atlas smoothscroll me-3" href="#intro-section">
                                <span>Introduction</span>

                                <div class="marquee" aria-hidden="true">
                                    <div class="marquee__inner">
                                        <span>Who ?</span>
                                        <span>Who ?</span>
                                        <span>Who ?</span>
                                        <span>Who ?</span>
                                    </div>
                                </div>
                            </a>

                            <a class="custom-btn custom-border-btn custom-btn-bg-white btn button button--pan smoothscroll" href="#services-section">
                                <span>Explore Us</span>
                            </a>
                        </div>

                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,240C560,224,640,192,720,176C800,160,880,160,960,138.7C1040,117,1120,75,1200,80C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </section>


            <section class="intro-section" id="intro-section">
                <div class="container">
                    <div class="row justify-content-lg-center align-items-center">

                        <div class="col-lg-6 col-12">
                            <h2 class="mb-4">Invent <br /> Innovate &amp; Inspire</h2>
                            <p>
                                The <strong>Microsoft Student Society</strong> is a place where students can unite, build, and grow. This Society serves as a platform for the students to build their network and enhance their technical skills by utilizing all the latest technologies that <strong>Microsoft Company</strong> and <strong>Student Chapter at MJCET</strong> has to offer.
                                All of our members get brilliant exposure as part of our effort to help them advance in their areas of expertise. The <strong>MSS</strong> offers a well-established network that has made interaction amongst various Microsoft groups possible in order to do this.
                                We believe in advancing together rather than individually.

                            </p>
                        </div>

                        <div class="col-lg-6 col-12 custom-block-wrap">
                            <img src="images/ene.png" class="img-fluid" />

                            <div class="custom-block d-flex flex-column">
                                <h6 class="text-white mb-3">Need Help? <br /> Please contact us:</h6>

                                <p class="d-flex mb-0">
                                    <i class="bi-envelope-fill me-2"></i>

                                    <a href="mailto:info@company.com" class="site-footer-link">
                                        mss@mjcollege.ac.in
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="services-section section-padding section-bg" id="services-section">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <h2 class="mb-4">Latest Events</h2>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="services-thumb">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5 col-12">
                                        <div class="services-image-wrap">
                                            <a href="services-detail.html">
                                                <img src="images/services/byteofc.jpg" className="services-image img-fluid" alt="" style={{ maxWidth: '100%' }} />

                                                <img src="images/avatar/eloogo.png" class="services-image services-image-hover img-fluid" alt="" />

                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                        <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                            <h4 class="services-title mb-1 mb-lg-2">
                                                <a class="services-title-link" href="services-detail.html">Big Byte Of C</a>
                                            </h4>

                                            <p> “A Big Byte of C” — the perfect event to kickstart your journey in programming.
                                                From Datatypes, arrays and functions to structures, pointers and files. Join us to learn All the Basics of C.
                                            </p>

                                            <div class="d-flex flex-wrap align-items-center">
                                                <a href="services-detail.html" class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                    <span>Learn More</span>

                                                    <div class="marquee" aria-hidden="true">
                                                        <div class="marquee__inner">
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="services-thumb">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5 col-12">
                                        <div class="services-image-wrap">
                                            <a href="services-detail.html">
                                                <img src="images/services/runtime2.jpg" class="services-image img-fluid" alt="" />
                                                <img src="images/services/runtime.jpg" class="services-image services-image-hover img-fluid" alt="" />

                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                        <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                            <h4 class="services-title mb-1 mb-lg-2">
                                                <a class="services-title-link" href="services-detail.html">RunTime Error</a>
                                            </h4>

                                            <p>We aim to brush up and hone your knowledge of programming languages, debugging and logic building.
                                                Through 4 competitive rounds, you can be the team that wins it all.
                                                The team that is triumphant gets their hands on a💲cash prize💲.</p>

                                            <div class="d-flex flex-wrap align-items-center">

                                                <a href="services-detail.html" class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                    <span>Learn More</span>

                                                    <div class="marquee" aria-hidden="true">
                                                        <div class="marquee__inner">
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="services-thumb mb-lg-0">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5 col-12">
                                        <div class="services-image-wrap">
                                            <a href="services-detail.html">
                                                <img src="images/services/msslearn.jpg" class="services-image img-fluid" alt="" />
                                                <img src="images/services/msslearn1.jpg" class="services-image services-image-hover img-fluid" alt="" />


                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                        <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                            <h4 class="services-title mb-1 mb-lg-2">
                                                <a class="services-title-link" href="services-detail.html">MSS Learn</a>
                                            </h4>

                                            <p>MSS Learn What next?
                                                Students all have the questions: "What should we do now?" , and "How do we do it?" But how do we get the answers to these questions? Don't you worry,
                                                MSS has all the information in store for you.</p>

                                            <div class="d-flex flex-wrap align-items-center">
                                                <a href="services-detail.html" class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                    <span>Learn More</span>

                                                    <div class="marquee" aria-hidden="true">
                                                        <div class="marquee__inner">
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="services-thumb mb-lg-0">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5 col-12">
                                        <div class="services-image-wrap">
                                            <a href="services-detail.html">
                                                <img src="images/services/imaginhack2.jpg" class="services-image img-fluid" alt="" />
                                                <img src="images/services/imagine hack.jpg" class="services-image services-image-hover img-fluid" alt="" />


                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                        <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                            <h4 class="services-title mb-1 mb-lg-2">
                                                <a class="services-title-link" href="services-detail.html">Imagine Hack</a>
                                            </h4>

                                            <p>Imagine Hack: A 12-hr 2-days Hackthon brought to you by MSS MJCET</p>

                                            <div class="d-flex flex-wrap align-items-center">


                                                <a href="services-detail.html" class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                    <span>Learn More</span>

                                                    <div class="marquee" aria-hidden="true">
                                                        <div class="marquee__inner">
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                            <span>Learn More</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="testimonial-section section-padding section-bg">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-12 text-center">
                            <h2 class="text-white mb-4">Governing Body</h2>
                        </div>

                        <div class="col-lg-4 col-12">
                            <div class="featured-block">
                                <div class="d-flex align-items-center mb-3">
                                    <img src="images\avatar\WhatsApp Image 2023-08-31 at 23.23.59.jpg" 
                                    style= {{width: '120px', height:'120px'}} class="avatar-image img-fluid" />

                                    <div class="ms-3">
                                        <h4 class="mb-0">RANIYA FARHAN SHEIKH</h4>
                                        <h5 class="mb-0">Chief Coordinator</h5>
                                    </div>
                                </div>

                                <p class="mb-0">
                                    Best lorem epsom Provider Ipsum dolor sit consectetur kengan
                                </p>
                            </div>

                            <div class="featured-block mb-lg-0">
                                <div class="d-flex align-items-center mb-3">
                                    <img src="images\avatar\WhatsApp Image 2023-08-31 at 23.24.00.jpg" 
                                    style= {{width: '120px', height:'120px'}} class="avatar-image img-fluid" />

                                    <div class="ms-3">
                                        <h4 class="mb-0">UMAIMA KHAN</h4>
                                        <h5 class="mb-0">Vice Chief Coordinator</h5>
                                    </div>
                                </div>

                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-12">
                            <div class="featured-block">
                                <div class="d-flex align-items-center mb-3">
                                    <img
                                        src="images\avatar\WhatsApp Image 2023-08-31 at 23.200.jpg"
                                        class="avatar-image img-fluid" style= {{width: '120px', height:'120px'}}
                                    />

                                    <div class="ms-3">
                                        <h4 class="mb-0">NABAHAT INJELA</h4>
                                        <h5 class="mb-0">Chief Representative</h5>
                                    </div>
                                </div>

                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>

                            <div class="featured-block mb-lg-0">
                                <div class="d-flex align-items-center mb-3">
                                    <img
                                        src="images/avatar/futuristic.png"
                                        class="avatar-image img-fluid" style= {{width: '120px', height:'120px'}}
                                    />

                                    <div class="ms-3">
                                        <h4 class="mb-0">MOHAMMED SUFYAAN TALISH</h4>
                                        <h5 class="mb-0">Tech Lead</h5>
                                    </div>
                                </div>

                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-12">
                            <div class="featured-block mb-lg-0">
                                <div class="d-flex align-items-center mb-3">
                                    <img
                                        src="images\avatar\WhatsApp Image 2023-08-31 at 23.46.05.jpg"
                                        class="avatar-image img-fluid" style= {{width: '120px', height:'120px'}}
                                    />

                                    <div class="ms-3">
                                        <h4 class="mb-0">NADIA AREF</h4>
                                        <h5 class="mb-0">Principal Secretary</h5>
                                    </div>
                                </div>

                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="partners-section">
                <div class="container">
                    <div class="row justify-content-center align-items-center">

                        <div class="col-lg-12 col-12">
                            <h4 class="partners-section-title bg-white shadow-lg">Our Beloved Partner</h4>
                        </div>

                        <div class="col-lg-2 col-md-4 col-6">
                            <img src="images/partners/microsoftlogo.jpg" class="partners-image img-fluid" />
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;