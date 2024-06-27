import React from 'react'
import styles from './Trainings.module.scss';

const Trainings = () => {
  return (
    <React.Fragment>

    <div className="container py-4 py-xl-5">
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Heading</h2>
                <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
            </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2">
            <div className="col">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="w-100"><img className={`rounded img-fluid d-block w-100 fit-cover ${styles.height200}`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
                    <div className="py-4 py-lg-0 px-lg-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="w-100"><img className={`rounded img-fluid d-block w-100 fit-cover ${styles.height200}`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
                    <div className="py-4 py-lg-0 px-lg-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="w-100"><img className={`rounded img-fluid d-block w-100 fit-cover ${styles.height200}`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
                    <div className="py-4 py-lg-0 px-lg-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="w-100"><img className={`rounded img-fluid d-block w-100 fit-cover ${styles.height200}`} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
                    <div className="py-4 py-lg-0 px-lg-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container py-4 py-xl-5">
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Heading</h2>
                <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
            </div>
        </div>
        <div>
            <ul className="nav nav-pills d-flex justify-content-center" role="tablist">
                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="pill" href="#tab-1">Yearly</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="pill" href="#tab-2">Monthly</a></li>
            </ul>
            <div className="tab-content pt-5">
                <div id="tab-1" className="tab-pane" role="tabpanel">
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body flex-grow-0 p-4"><span className="badge bg-primary text-uppercase mb-2">Standard</span>
                                    <h4 className="display-4 fw-bold card-title">$150<span className="fs-3 fw-normal text-muted">/year</span></h4>
                                </div>
                                <div className="card-footer d-flex flex-column flex-grow-1 justify-content-between">
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Porta suscipit netus ad ac.</span></li>
                                        </ul>
                                    </div><a className="btn btn-primary d-block w-100" role="button" href="#">Button</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body flex-grow-0 p-4"><span className="badge bg-primary text-uppercase mb-2">Pro</span>
                                    <h4 className="display-4 fw-bold card-title">$399<span className="fs-3 fw-normal text-muted">/year</span></h4>
                                </div>
                                <div className="card-footer d-flex flex-column flex-grow-1 justify-content-between">
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Porta suscipit netus ad ac.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Morbi praesent aptent integer at.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Nisl potenti ut auctor lobortis.</span></li>
                                        </ul>
                                    </div><a className="btn btn-primary d-block w-100" role="button" href="#">Button</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body flex-grow-0 p-4"><span className="badge bg-primary text-uppercase mb-2">Enterprise</span>
                                    <h4 className="display-4 fw-bold card-title">$799<span className="fs-3 fw-normal text-muted">/year</span></h4>
                                </div>
                                <div className="card-footer d-flex flex-column flex-grow-1 justify-content-between">
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Porta suscipit netus ad ac.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Morbi praesent aptent integer at.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Nisl potenti ut auctor lobortis.</span></li>
                                        </ul>
                                    </div><a className="btn btn-primary d-block w-100" role="button" href="#">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane active" role="tabpanel">
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body flex-grow-0 p-4"><span className="badge bg-primary text-uppercase mb-2">Standard</span>
                                    <h4 className="display-4 fw-bold card-title">$15<span className="fs-3 fw-normal text-muted">/mo</span></h4>
                                </div>
                                <div className="card-footer d-flex flex-column flex-grow-1 justify-content-between p-4">
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Porta suscipit netus ad ac.</span></li>
                                        </ul>
                                    </div><button className="btn btn-primary d-block w-100" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body flex-grow-0 p-4"><span className="badge bg-primary text-uppercase mb-2">Pro</span>
                                    <h4 className="display-4 fw-bold card-title">$38<span className="fs-3 fw-normal text-muted">/mo</span></h4>
                                </div>
                                <div className="card-footer d-flex flex-column flex-grow-1 justify-content-between p-4">
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Porta suscipit netus ad ac.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Morbi praesent aptent integer at.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Nisl potenti ut auctor lobortis.</span></li>
                                        </ul>
                                    </div><button className="btn btn-primary d-block w-100" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body flex-grow-0 p-4"><span className="badge bg-primary text-uppercase mb-2">Enterprise</span>
                                    <h4 className="display-4 fw-bold card-title">$70<span className="fs-3 fw-normal text-muted">/mo</span></h4>
                                </div>
                                <div className="card-footer d-flex flex-column flex-grow-1 justify-content-between p-4">
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Porta suscipit netus ad ac.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Morbi praesent aptent integer at.</span></li>
                                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg className="bi bi-check-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                                                    </svg></span><span>Nisl potenti ut auctor lobortis.</span></li>
                                        </ul>
                                    </div><button className="btn btn-primary d-block w-100" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="py-4 py-xl-5">
        <div className="container">
            <div className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                <div className="pb-2 pb-lg-1">
                    <h2 className="fw-bold mb-2">Biben dum fringi dictum, augue purus</h2>
                    <p className="mb-0">Imperdiet consectetur dolor, tristique himenaeos ultrices tristique neque.</p>
                </div>
                <div className="my-2"><a className="btn btn-light fs-5 py-2 px-4" role="button" href="#">Button</a></div>
            </div>
        </div>
    </section>

    </React.Fragment>
  )
}

export default Trainings;