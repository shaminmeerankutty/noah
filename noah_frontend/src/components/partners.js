import React from 'react'

const partnerImages =
    [{
        src: "img/partners/nasscom.svg",
        width: 500,
        height: 200
    },
    {
        src: "img/partners/gtech.svg",
        width: 500,
        height: 200
    }]

export default () => (
    <section id="partners" className="mx-auto bg-dark text-white">
        <div className="container text-center">
            <h2 className="mb-4">In Association With</h2>
            <hr /><br /><br />
            <div className="row">
                <div className="col-md-4">
                    <a target="_blank" href="http://gtechindia.org/"><img className="img-fluid"  src="img/partners/gtech.svg" /></a>
                </div>
                <div className="col-md-4">
                    <a target="_blank" href="https://www.nasscom.in/"><img className="img-fluid"  src="img/partners/nasscom.svg" /></a>
                </div>
                <div className="col-md-4">
                    <a target="_blank" href="http://www.prathidhwani.org/"><img className="img-fluid"  src="img/partners/PrathiDhwani.png" /></a>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </section>
)
