import React from "react";

function Sidebar() {
  return (
    <>
      {" "}
      {/* <!--begin::Sidebar--> */}
      <div className='flex-lg-row-auto w-100 w-lg-275px w-xxl-350px'>
        {/* <!--begin::Careers about--> */}
        <div className='card bg-light'>
          {/* <!--begin::Body--> */}
          <div className='card-body'>
            {/* <!--begin::Top--> */}
            <div className='mb-7'>
              {/* <!--begin::Title--> */}
              <h2 className='fs-1 text-gray-800 w-bolder mb-6'>About Us</h2>
              {/* <!--end::Title--> */}
              {/* <!--begin::Text--> */}
              <p className='fw-bold fs-6 text-gray-600'>
                First, a disclaimer – the entire process of writing a blog post
                often takes more than a couple of hours, even if you can type
                eighty words as per minute and your writing skills are sharp.
              </p>
              {/* <!--end::Text--> */}
            </div>
            {/* <!--end::Top--> */}
            {/* <!--begin::Item--> */}
            <div className='mb-8'>
              {/* <!--begin::Title--> */}
              <h4 className='text-gray-700 w-bolder mb-0'>Requirements</h4>
              {/* <!--end::Title--> */}
              {/* <!--begin::Section--> */}
              <div className='my-2'>
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center mb-3'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Experience with JavaScript
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center mb-3'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Good time-management skills
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center mb-3'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Experience with React
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Experience with HTML / CSS
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
              </div>
              {/* <!--end::Section--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Item--> */}
            <div className='mb-8'>
              {/* <!--begin::Title--> */}
              <h4 className='text-gray-700 w-bolder mb-0'>Our Achievements</h4>
              {/* <!--end::Title--> */}
              {/* <!--begin::Section--> */}
              <div className='my-2'>
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center mb-3'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Experience with JavaScript
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center mb-3'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Good time-management skills
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center mb-3'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Experience with React
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
                {/* <!--begin::Row--> */}
                <div className='d-flex align-items-center'>
                  {/* <!--begin::Bullet--> */}
                  <span className='bullet me-3'></span>
                  {/* <!--end::Bullet--> */}
                  {/* <!--begin::Label--> */}
                  <div className='text-gray-600 fw-bold fs-6'>
                    Experience with HTML / CSS
                  </div>
                  {/* <!--end::Label--> */}
                </div>
                {/* <!--end::Row--> */}
              </div>
              {/* <!--end::Section--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Link--> */}
            <a href='' className='link-primary fs-6 fw-bold'>
              Explore More
            </a>
            {/* <!--end::Link--> */}
          </div>
          {/* <!--end::Body--> */}
        </div>
        {/* <!--end::Careers about--> */}
      </div>
      {/* <!--end::Sidebar--> */}
    </>
  );
}

export default Sidebar;
