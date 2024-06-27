import React from 'react';
import cartes from '../../assets/img/accepted_cards.png';

const Register = () => {
  return (
    <React.Fragment>
 <form>
      <label className="form-label">Nom<input className="form-control" type="text" /></label><br />
      <label className="form-label">Prenom<input className="form-control" type="text" /></label><br />
      <label className="form-label">Rue<input className="form-control" type="text" /></label><br />
      <label className="form-label">Ville<input className="form-control" type="text" /></label><br />
      <label className="form-label">Pays<input className="form-control" type="text" placeholder="Haiti" /></label><br />
      <label className="form-label">Courriel<input className="form-control" type="email" /></label><br />
      <label className="form-label">Telephone<input className="form-control" type="tel" /></label><br />
        <fieldset>
            <legend>Sexe</legend>
            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">Feminin</label></div>
            <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">Masculin</label></div>
        </fieldset>
      <br />
      <label className="form-label">Label<input className="form-control" type="file" /></label>
      <br />
      <label className="form-label">Label<input className="form-control" type="file" /></label>
      <br />
      <label className="form-label">Label<input className="form-control" type="file" /></label>
    </form>
    <hr />
    <div className="row .payment-dialog-row">
        <div className="col-12 col-md-4 offset-md-4">
            <div className="card credit-card-box">
                <div className="card-header">
                    <h3><span className="panel-title-text">Payment Details </span><img className="img-fluid panel-title-image" src={cartes} /></h3>
                </div>
                <div className="card-body">
                    <form id="payment-form">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group mb-3"><label className="form-label" htmlFor="cardNumber">Card number </label>
                                    <div className="input-group"><input className="form-control" type="tel" id="cardNumber" required placeholder="Valid Card Number" /><span className="input-group-text"><i className="fa fa-credit-card"></i></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <div className="form-group mb-3"><label className="form-label" htmlFor="cardExpiry"><span>expiration </span><span>EXP </span> date</label><input className="form-control" type="tel" id="cardExpiry" required placeholder="MM / YY" /></div>
                            </div>
                            <div className="col-5 pull-right">
                                <div className="form-group mb-3"><label className="form-label" htmlFor="cardCVC">cv code</label><input className="form-control" type="tel" id="cardCVC" required placeholder="CVC" /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group mb-3"><label className="form-label" htmlFor="couponCode">coupon code</label><input className="form-control" type="text" id="couponCode" /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"><button className="btn btn-success btn-lg d-block w-100" type="submit">Inscription</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Register