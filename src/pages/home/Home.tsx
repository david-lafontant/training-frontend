import React from 'react';
import styles from './Home.module.scss'

const Home = () => {
  return (
    <React.Fragment>
      <div className={`${styles.height600} carousel slide`} data-bs-ride="carousel" id="carousel-1">
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100"><img className={`${styles.index}w-100 d-block position-absolute h-100 fit-cover`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" />
            <div className="container d-flex flex-column justify-content-center h-100">
              <div className="row">
                <div className="col-md-6 col-xl-4 offset-md-2">
                  <div className={`${styles.width350}`}>
                    <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                    <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item h-100"><img className={`${styles.index} w-100 d-block position-absolute h-100 fit-cover`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" />
            <div className="container d-flex flex-column justify-content-center h-100">
              <div className="row">
                <div className="col-md-6 col-xl-4 offset-md-2">
                  <div className={`${styles.width350}`}>
                    <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                    <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item h-100"><img className={`${styles.index} w-100 d-block position-absolute h-100 fit-cover`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" />
            <div className="container d-flex flex-column justify-content-center h-100">
              <div className="row">
                <div className="col-md-6 col-xl-4 offset-md-2">
                  <div className={`${styles.width350}`}>
                    <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                    <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
        <div className={`carousel-indicators ${styles.blueBg}`}><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button></div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div className={`${styles.width350}`}>
              <h2 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h2>
              <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-xl-5 m-xl-5"><img className={`${styles.minHeight300} rounded img-fluid w-100 fit-cover`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
          </div>
        </div>
      </div>
      <section>
        <div data-bss-parallax-bg="true" className={`${styles.homeParallax}`}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                <div className={`${styles.width350}`}>
                  <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                  <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <hr />
      <br />

      <div className="container text-white bg-primary border rounded border-0 p-4 p-lg-5 py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="text-white">Formations</h2>
            <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="d-flex">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg className="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
              </svg></div>
              <div className="px-3">
                <h4 className="text-white">Title</h4>
                <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg className="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
              </svg></div>
              <div className="px-3">
                <h4 className="text-white">Title</h4>
                <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg className="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
              </svg></div>
              <div className="px-3">
                <h4 className="text-white">Title</h4>
                <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg className="bi bi-bell" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
              </svg></div>
              <div className="px-3">
                <h4 className="text-white">Title</h4>
                <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg className="bi bi-bezier" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
              </svg></div>
              <div className="px-3">
                <h4 className="text-white">Title</h4>
                <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg className="bi bi-flag" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"></path>
              </svg></div>
              <div className="px-3">
                <h4 className="text-white">Title</h4>
                <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment>
  )
}

export default Home;