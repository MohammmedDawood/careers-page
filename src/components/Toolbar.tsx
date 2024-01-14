function Toolbar() {
  return (
    <>
      {/* <!--begin::Toolbar--> */}
      <div className='toolbar' id='kt_toolbar'>
        {/* <!--begin::Container--> */}
        <div
          id='kt_toolbar_container  my-5 my-lg-15'
          className='container-xxl d-flex flex-stack flex-wrap'
        >
          {/* <!--begin::Page title--> */}
          <div className='page-title d-flex flex-column me-3'>
            {/* <!--begin::Title--> */}
            <h1 className='d-flex text-white fw-bolder my-1 fs-3'>
              Careers List
            </h1>
            {/* <!--end::Title--> */}
            {/* <!--begin::Breadcrumb--> */}
            <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
              {/* <!--begin::Item--> */}
              <li className='breadcrumb-item text-white opacity-75'>
                <a
                  href='../../demo2/dist/index.html'
                  className='text-white text-hover-primary'
                >
                  Home
                </a>
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li className='breadcrumb-item'>
                <span className='bullet bg-white opacity-75 w-5px h-2px'></span>
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li className='breadcrumb-item text-white opacity-75'>Careers</li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li className='breadcrumb-item'>
                <span className='bullet bg-white opacity-75 w-5px h-2px'></span>
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li className='breadcrumb-item text-white opacity-75'>
                Careers List
              </li>
              {/* <!--end::Item--> */}
            </ul>
            {/* <!--end::Breadcrumb--> */}
          </div>
          {/* <!--end::Page title--> */}
          {/* <!--begin::Actions--> */}
          <div className='d-flex align-items-center py-3 py-md-1'>
            {/* <!--begin::Button--> */}
            <a
              href='#'
              className='btn btn-bg-white btn-active-color-primary'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_create_app'
              id='kt_toolbar_primary_button'
            >
              See Openings
            </a>
            {/* <!--end::Button--> */}
          </div>
          {/* <!--end::Actions--> */}
        </div>
        {/* <!--end::Container--> */}
      </div>
      {/* <!--end::Toolbar--> */}
    </>
  );
}

export default Toolbar;
