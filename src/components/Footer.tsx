function Footer() {
  return (
    <>
      {/* <!--begin::Footer--> */}
      <div className='footer  d-flex flex-lg-column' id='kt_footer'>
        {/* <!--begin::Container--> */}
        <div className='container-xxl d-flex flex-column flex-md-row align-items-center pb-4 justify-content-between'>
          {/* <!--begin::Copyright--> */}
          <div className='text-dark order-2 order-md-1'>
            <span className=' text-white fw-bold me-1'>2024©</span>
            <a
              href='/'
              target='_blank'
              className='text-white text-hover-primary'
            >
              Equatitiva
            </a>
          </div>
          {/* <!--end::Copyright--> */}
          {/* <!--begin::Menu--> */}
          <ul className='menu menu-white menu-hover-primary fw-bold order-1'>
            <li className='menu-item'>
              <a href='/' target='_blank' className='menu-link px-2'>
                About
              </a>
            </li>
            <li className='menu-item'>
              <a href='/' target='_blank' className='menu-link px-2'>
                Support
              </a>
            </li>
            <li className='menu-item'>
              <a href='/' target='_blank' className='menu-link px-2'>
                Purchase
              </a>
            </li>
          </ul>
          {/* <!--end::Menuff--> */}
        </div>
        {/* <!--end::Container--> */}
      </div>
      {/* <!--end::Footer--></> */}
    </>
  );
}

export default Footer;
