import equatitivaLogo from "../assets/logo-white.svg";

function Header() {
  return (
    <>
      {/* <!--begin::Header--> */}
      <div
        id='kt_header'
        className='header align-items-stretch'
        data-kt-sticky='true'
        data-kt-sticky-name='header'
        data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      >
        {/* <!--begin::Container--> */}
        <div className='container-xxl d-flex align-items-center'>
          {/* <!--begin::Heaeder menu toggle--> */}
          <div
            className='d-flex topbar align-items-center d-lg-none ms-n2 me-3'
            title='Show aside menu'
          >
            <div
              className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
              id='kt_header_menu_mobile_toggle'
            >
              {/* <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg--> */}
              <span className='svg-icon svg-icon-2x'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z'
                    fill='black'
                  />
                  <path
                    opacity='0.3'
                    d='M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z'
                    fill='black'
                  />
                </svg>
              </span>
              {/* <!--end::Svg Icon--> */}
            </div>
          </div>
          {/* <!--end::Heaeder menu toggle--> */}
          {/* <!--begin::Header Logo--> */}
          <div className='header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0'>
            <a href='/'>
              <img
                alt='Logo'
                src={equatitivaLogo}
                className='logo-default h-25px'
              />
              <img
                alt='Logo'
                src={equatitivaLogo}
                className='logo-sticky h-25px'
              />
            </a>
          </div>
          {/* <!--end::Header Logo--> */}
          {/* <!--begin::Wrapper--> */}
          <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
            {/* <!--begin::Navbar--> */}
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              {/* <!--begin::Menu wrapper--> */}
              <div
                className='header-menu align-items-stretch'
                data-kt-drawer='true'
                data-kt-drawer-name='header-menu'
                data-kt-drawer-activate='{default: true, lg: false}'
                data-kt-drawer-overlay='true'
                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                data-kt-drawer-direction='start'
                data-kt-drawer-toggle='#kt_header_menu_mobile_toggle'
                data-kt-swapper='true'
                data-kt-swapper-mode='prepend'
                data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
              >
                {/* <!--begin::Menu--> */}
                <div
                  className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch'
                  id='#kt_header_menu'
                  data-kt-menu='true'
                >
                  <div
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    className='menu-item menu-lg-down-accordion me-lg-1'
                  >
                    <a className='menu-link py-3' href='/'>
                      <span className='menu-title'>Home</span>
                      <span className='menu-arrow d-lg-none'></span>
                    </a>
                  </div>
                  <div
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    className='menu-item menu-lg-down-accordion me-lg-1'
                  >
                    <a className='menu-link py-3' href='/'>
                      <span className='menu-title'>Projects</span>
                      <span className='menu-arrow d-lg-none'></span>
                    </a>
                  </div>
                  <div
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    className='menu-item menu-lg-down-accordion me-lg-1'
                  >
                    <a className='menu-link py-3' href='/'>
                      <span className='menu-title'>Contact Us</span>
                      <span className='menu-arrow d-lg-none'></span>
                    </a>
                  </div>
                  <div
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    className='menu-item menu-lg-down-accordion me-lg-1'
                  >
                    <a className='menu-link py-3' href='/'>
                      <span className='menu-title'>About</span>
                      <span className='menu-arrow d-lg-none'></span>
                    </a>
                  </div>
                </div>
                {/* <!--end::Menu--> */}
              </div>
              {/* <!--end::Menu wrapper--> */}
            </div>
            {/* <!--end::Navbar--> */}
            {/* <!--begin::Topbar--> */}
            <div className='d-flex align-items-stretch flex-shrink-0'>
              {/* <!--begin::Toolbar wrapper--> */}
              <div className='topbar d-flex align-items-stretch flex-shrink-0'>
                {/* <!--begin::Search--> */}
                <div className='d-flex align-items-stretch ms-1 ms-lg-3'>
                  {/* <!--begin::Search--> */}
                  <div
                    id='kt_header_search'
                    className='d-flex align-items-stretch'
                    data-kt-search-keypress='true'
                    data-kt-search-min-length='2'
                    data-kt-search-enter='enter'
                    data-kt-search-layout='menu'
                    data-kt-menu-trigger='auto'
                    data-kt-menu-overflow='false'
                    data-kt-menu-permanent='true'
                    data-kt-menu-placement='bottom-end'
                  >
                    {/* <!--begin::Search toggle--> */}
                    <div
                      className='d-flex align-items-center'
                      data-kt-search-element='toggle'
                      id='kt_header_search_toggle'
                    >
                      <div className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'>
                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg--> */}
                        <span className='svg-icon svg-icon-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                          >
                            <rect
                              opacity='0.5'
                              x='17.0365'
                              y='15.1223'
                              width='8.15546'
                              height='2'
                              rx='1'
                              transform='rotate(45 17.0365 15.1223)'
                              fill='black'
                            />
                            <path
                              d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                              fill='black'
                            />
                          </svg>
                        </span>
                        {/* <!--end::Svg Icon--> */}
                      </div>
                    </div>
                    {/* <!--end::Search toggle--> */}
                  </div>
                  {/* <!--end::Search--> */}
                </div>
                {/* <!--end::Search--> */}

                {/* <!--begin::Aside mobile toggle--> */}
                {/* <!--end::Aside mobile toggle--> */}
              </div>
              {/* <!--end::Toolbar wrapper--> */}
            </div>
            {/* <!--end::Topbar--> */}
          </div>
          {/* <!--end::Wrapper--> */}
        </div>
        {/* <!--end::Container--> */}
      </div>
      {/* <!--end::Header--> */}
    </>
  );
}

export default Header;
