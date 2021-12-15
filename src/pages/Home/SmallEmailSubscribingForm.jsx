import React, { useState } from 'react';

import http from '../../util/httpService';

import { validateEmail, requiredValue } from '../../util/validationUtil';

const SmallEmailSubscribingForm = () => {
  const [loading, setLoading] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState(false);

  const validateSubscibingForm = () => {
    // required email
    if (!requiredValue(subscribeEmail)) {
      setValidationError('Por favor introduza o seu e-mail.');
      return false;
    }

    // valid email format
    if (!validateEmail(subscribeEmail)) {
      setValidationError('O email é inválido.');
      return false;
    }
    return true;
  };

  const handleEmailSubscribing = async () => {
    if (validateSubscibingForm()) {
      setLoading(true);
      setValidationError('');

      try {
        await http.post('subscribers', {
          email: subscribeEmail
        }).then(({data}) => {
          if (data.result) {
            setDisplaySuccessAlert(true);
            setTimeout(() => {
              setDisplaySuccessAlert(false);
              setSubscribeEmail('');
            }, 10000);
          } else {
            setValidationError('O email já existe. Por favor, tente novamente.');
          }

          setLoading(false);
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="join-follow-control position-relative">
      <div className="d-flex align-items-center">
        <input type="text" placeholder="Seu e-mail" value={subscribeEmail} onChange={ (e) => setSubscribeEmail(e.target.value) } />
        <button type="button" onClick={handleEmailSubscribing} disabled={loading}>
          { !loading
              ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              : <div className="spinner spinner-border text-primary" role="status"></div> }
        </button>
      </div>
      { validationError && <span className="error">{ validationError }</span> }
      { displaySuccessAlert && <div className="success-alert d-flex align-items-center justify-content-center px-4 pt-2">
        <h6>Felicitar! Entraremos em contato com você por e-mail (<span>{ subscribeEmail }</span>) o mais rápido possível.</h6>
      </div> }
    </div>
  );
};

export default SmallEmailSubscribingForm;