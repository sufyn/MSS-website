import React from "react";

function Contact() {
  return (
    <div className="contact">
 <main>

<section class="banner-section d-flex justify-content-center align-items-end">
    <div class="section-overlay"></div>

    <div class="container">
        <div class="row">

            <div class="col-lg-7 col-12">
                <h1 class="text-white mb-lg-0">Contact</h1>
            </div>

            <div class="col-lg-4 col-12 d-flex justify-content-lg-end align-items-center ms-auto">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                        <li class="breadcrumb-item active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
</section>


<section class="contact-section section-padding">
    <div class="container">
        <div class="row">

            <div class="col-lg-5 col-12 me-auto mb-lg-0 mb-5">
                <h2 class="my-3">We're happy to help</h2>

                <p>    The Mission of the student club is to foster entrepreneurial thinking, promote business knowledge and inculcate confidence in every student.</p>

                <div class="contact-info bg-white shadow-lg">
                    <h3 class="mb-4">Contact Information</h3>

                    <h5 class="d-flex mt-3 mb-3">
                        <i class="bi-geo-alt-fill custom-icon me-3"></i>
                        8-2-249 TO 267, ROAD NO. 3, BANJARA HILLS, Hyderabad, 500034, IN, Hyderabad, Telangana 500034, IN
                    </h5>

                    <h5 class="d-flex mb-3">
                        <i class="bi-telephone-fill custom-icon me-3"></i>

                        <a href="tel: 110-220-9800">
                            110-220-9800
                        </a>
                    </h5>

                    <h5 class="d-flex">
                        <i class="bi-envelope-fill custom-icon me-3"></i>

                        <a href="mailto:info@company.com">
                            mss@gmail.com
                        </a>
                    </h5>
                </div>
            </div>

            <div class="col-lg-6 col-12">
                <form class="custom-form consulting-form bg-white shadow-lg mb-5 mb-lg-0" action="#" method="post" role="form">
                    <div class="consulting-form-header d-flex align-items-center">
                        <h3 class="mb-4">Get a Free Help</h3>
                    </div>

                    <div class="consulting-form-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <input type="text" name="volunteer-name" id="volunteer-name" class="form-control" placeholder="Name" required/>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12">
                                <input type="email" name="volunteer-email" id="volunteer-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="yours@gmail.com" required/>
                            </div>
                        </div>

                        <select class="form-select form-control" name="job-salary" id="job-salary" aria-label="Default select example">
                            <option selected>Area Of Your Interest</option>
                            <option value="1">Machine Learning</option>
                            <option value="2">Deep Learning</option>
                            <option value="2">Computer Vision</option>
                            <option value="2">Web Development</option>
                        </select>

                        <textarea name="volunteer-message" rows="3" class="form-control" id="volunteer-message" placeholder="Comment (Optional)"></textarea>

                        <div class="col-lg-6 col-md-10 col-8 mx-auto">
                            <button type="submit" class="form-control">Submit Request</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</section>
</main>
    </div>
  );
}

export default Contact;