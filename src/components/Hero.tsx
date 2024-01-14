function Hero() {
  return (
    <>
      {/* <!--begin::Hero--> */}
      <div className='position-relative mb-17'>
        {/* <!--begin::Overlay--> */}
        <div className='overlay overlay-show'>
          {/* <!--begin::Image--> */}
          <div
            className='bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-250px'
            style={{
              backgroundImage:
                "url('https://equitativa.properti.es/wicket/resource/es.properti.intranet.entities.companies.humanResources.portal.EmploymentPortalPage/banner-ver-34E6FCE50CB30604B165EA958649B42B.jpg')",
            }}
            // style={{
            //   backgroundImage:
            //     "url('https://equitativa.com/favicon.ico')",
            // }}
          ></div>
          {/* <!--end::Image--> */}
          {/* <!--begin::layer--> */}
          <div
            className='overlay-layer rounded bg-black'
            style={{ opacity: 0.4 }}
          ></div>
          {/* <!--end::layer--> */}
        </div>
        {/* <!--end::Overlay--> */}
        {/* <!--begin::Heading--> */}
        <div className='position-absolute text-white mb-8 ms-10 bottom-0'>
          {/* <!--begin::Title--> */}
          <h3 className='fs-2qx fw-bolder mb-3 text-white'>
            Careers at Equitativa
          </h3>
          {/* <!--end::Title--> */}
          {/* <!--begin::Text--> */}
          <div className='fs-5 fw-bold'>
            Manage Your Job Applications with Our User-Friendly Recruitment
            Platform. Track Your Progress, and Land Your Dream Job.
          </div>
          {/* <!--end::Text--> */}
        </div>
        {/* <!--end::Heading--> */}
      </div>
      {/* <!--end::Hero--> */}
    </>
  );
}

export default Hero;
