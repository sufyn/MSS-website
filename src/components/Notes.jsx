import React from "react";
import { Outlet } from "react-router-dom";

function Notes() {
  return (
    <div className="home">
       <main>

<section class="banner-section d-flex justify-content-center align-items-end">
    <div class="section-overlay"></div>

    <div class="container">
        <div class="row">

            <div class="col-lg-7 col-12">
                <h1 class="text-white mb-lg-0">Mss Notes</h1>
            </div>

            <div class="col-lg-4 col-12 d-flex justify-content-lg-end align-items-center ms-auto">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                        <li class="breadcrumb-item active" aria-current="page">Mss Notes</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
</section>


<section class="section-padding">
    <div class="container">
        <div class="row">

            <div class="col-lg-8 col-12 text-center mx-auto">
                
                <h2 class=""><a href="###########">Notes link</a></h2>
            </div>

        </div>
    </div>
</section>
</main>
    </div>
  );
}

export default Notes;