import "./App.css";
import "./Plugin.css";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import JobList from "./components/JobList";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div
        id='kt_body'
        className='header-fixed header-tablet-and-mobile-fixed toolbar-enabled'
      >
        {/* <!--begin::Root--> */}
        <div className='d-flex flex-column flex-root'>
          {/* <!--begin::Page--> */}
          <div className='page d-flex flex-row flex-column-fluid'>
            {/* <!--begin::Wrapper--> */}
            <div
              className='wrapper d-flex flex-column flex-row-fluid'
              id='kt_wrapper'
            >
              {/* <!--begin::Header--> */}
              <Header />
              {/* <!--end::Header--> */}
              {/* <!--begin::Toolbar--> */}
              <Toolbar />
              {/* <!--end::Toolbar--> */}
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
                      <Hero />
                      {/* begin::Layout */}
                      <div className='d-flex flex-column flex-lg-row mb-17'>
                        <JobList />
                        <Sidebar />
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
              {/* <!--begin::Footer--> */}
              <Footer />
              {/* <!--end::Footer--> */}
            </div>
            {/* <!--end::Wrapper--> */}
          </div>
          {/* <!--end::Page--> */}
        </div>
        {/* <!--end::Root--> */}
      </div>
    </>
  );
}

export default App;
