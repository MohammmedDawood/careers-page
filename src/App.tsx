import "./App.css";
import "./Plugin.css";

function App() {
  return (
    <>
      {/* <!--begin::Container--> */}
      <div
        id='kt_content_container'
        className='d-flex flex-column-fluid align-items-start container-xxl'
      >
        {/* <!--begin::Post--> */}
        <div className='content flex-row-fluid' id='kt_content'>
          {/* <!--begin::Careers - List--> */}
          <div className='card'>
            {/* <!--begin::Body--> */}
            <div className='card-body p-lg-17'>
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
                    Manage Your Job Applications with Our User-Friendly
                    Recruitment Platform. Track Your Progress, and Land Your
                    Dream Job.
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Heading--> */}
              </div>
              {/* <!--end::Hero--> */}
              {/* begin::Layout */}
              <div className='d-flex flex-column flex-lg-row mb-17'>
                {/* <!--begin::Content--> */}
                <div className='flex-lg-row-fluid me-0 me-lg-20'>
                  {/* begin::Job */}
                  <div className='mb-17'>
                    {/* begin::Description */}
                    <div className='m-0'>
                      {/* begin::Title */}
                      <h4 className='fs-1 text-gray-800 w-bolder mb-6'>
                        Junior React Developer
                      </h4>
                      {/* end::Title */}
                      {/* begin::Text */}
                      <p className='fw-bold fs-4 text-gray-600 mb-2'>
                        First, a disclaimer – the entire process of writing a
                        blog post often takes more than a couple of hours, even
                        if you can type eighty words as per minute and your
                        writing skills are sharp.
                      </p>
                      {/* end::Text */}
                    </div>
                    {/* end::Description */}
                    {/* begin::Accordion */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_1_1'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          Requirements
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_1_1' className='collapse show fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                      {/* begin::Separator */}
                      <div className='separator separator-dashed'></div>
                      {/* end::Separator */}
                    </div>
                    {/* end::Section */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_1_2'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          What is your job role?
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_1_2' className='collapse fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                      {/* begin::Separator */}
                      <div className='separator separator-dashed'></div>
                      {/* end::Separator */}
                    </div>
                    {/* end::Section */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_1_3'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          Job Candidate Benefits
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_1_3' className='collapse fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                      {/* begin::Separator */}
                      <div className='separator separator-dashed'></div>
                      {/* end::Separator */}
                    </div>
                    {/* end::Section */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_1_4'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          Application Terms
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_1_4' className='collapse fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                    </div>
                    {/* end::Section */}
                    {/* end::Accordion */}
                    {/* begin::Apply */}
                    <a
                      href='../../demo11/dist/pages/careers/apply.html'
                      className='btn btn-sm btn-primary mt-5'
                    >
                      Apply Now
                    </a>
                    {/* end::Apply */}
                  </div>
                  {/* end::Job */}
                  {/* begin::Job */}
                  <div className='mb-10 mb-lg-0'>
                    {/* begin::Description */}
                    <div className='m-0'>
                      {/* begin::Title */}
                      <h4 className='fs-1 text-gray-800 w-bolder mb-6'>
                        UI/UX Designer
                      </h4>
                      {/* end::Title */}
                      {/* begin::Text */}
                      <p className='fw-bold fs-4 text-gray-600 mb-2'>
                        First, a disclaimer – the entire process of writing a
                        blog post often takes more than a couple of hours, even
                        if you can type eighty words as per minute and your
                        writing skills are sharp.
                      </p>
                      {/* end::Text */}
                    </div>
                    {/* end::Description */}
                    {/* begin::Accordion */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_2_1'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          Requirements
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_2_1' className='collapse show fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                      {/* begin::Separator */}
                      <div className='separator separator-dashed'></div>
                      {/* end::Separator */}
                    </div>
                    {/* end::Section */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_2_2'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          What is your job role?
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_2_2' className='collapse fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                      {/* begin::Separator */}
                      <div className='separator separator-dashed'></div>
                      {/* end::Separator */}
                    </div>
                    {/* end::Section */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_2_3'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          Job Candidate Benefits
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_2_3' className='collapse fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                      {/* begin::Separator */}
                      <div className='separator separator-dashed'></div>
                      {/* end::Separator */}
                    </div>
                    {/* end::Section */}
                    {/* begin::Section */}
                    <div className='m-0'>
                      {/* begin::Heading */}
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_2_4'
                      >
                        {/* begin::Icon */}
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          {/* begin::Svg Icon | path: icons/duotune/general/gen036.svg */}
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                          {/* begin::Svg Icon | path: icons/duotune/general/gen035.svg */}
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/* end::Svg Icon */}
                        </div>
                        {/* end::Icon */}
                        {/* begin::Title */}
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          Application Terms
                        </h4>
                        {/* end::Title */}
                      </div>
                      {/* end::Heading */}
                      {/* begin::Body */}
                      <div id='kt_job_2_4' className='collapse fs-6 ms-1'>
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with JavaScript
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Good time-management skills
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with React
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with HTML / CSS
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10 mb-n1'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Experience with REST API
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className='mb-4'>
                          {/* begin::Item */}
                          <div className='d-flex align-items-center ps-10'>
                            {/* begin::Bullet */}
                            <span className='bullet me-3'></span>
                            {/* end::Bullet */}
                            {/* begin::Label */}
                            <div className='text-gray-600 fw-bold fs-6'>
                              Git knowledge is a plus
                            </div>
                            {/* end::Label */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end::Item */}
                      </div>
                      {/* end::Content */}
                    </div>
                    {/* end::Section */}
                    {/* end::Accordion */}
                    {/* begin::Apply */}
                    <a
                      href='../../demo11/dist/pages/careers/apply.html'
                      className='btn btn-sm btn-primary mt-5'
                    >
                      Apply Now
                    </a>
                    {/* end::Apply */}
                  </div>
                  {/* end::Job */}
                </div>
                {/* <!--end::Content--> */}
              </div>
              {/* end::Layout */}
            </div>
            {/* <!--end::Body--> */}
          </div>
          {/* <!--end::Careers - List--> */}
        </div>
        {/* <!--end::Post--> */}
      </div>
      {/* <!--end::Container--> */}
    </>
  );
}

export default App;
