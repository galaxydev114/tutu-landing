import React, { useState } from 'react';

import http from '../../util/httpService';

import { validateEmail, requiredValue } from '../../util/validationUtil';

const HeroEmailSubscribingForm = () => {
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

  const initForm = () => {
    setDisplaySuccessAlert(false);
    setSubscribeEmail('');
  };

  return (
    <div className="tutu-join-box position-relative">
      <h6>Digite seu Email e crie sua conta agora!</h6>
      <div className="join-control d-flex align-items-center justify-content-center px-lg-5 px-md-4 px-sm-2 px-0">
        <div>
          <input type="text" className="email-input" placeholder="Seu e-mail" value={subscribeEmail} onChange={ (e) => setSubscribeEmail(e.target.value) } />
          { validationError && <span className="error">{ validationError }</span> }
        </div>
      </div>
      <div className="px-lg-3 px-md-2 px-sm-1 px-0">
        <button type="button" id="submit-button" onClick={handleEmailSubscribing} disabled={loading}>
          { loading && <div className="spinner spinner-border text-primary" role="status"></div> }
          Criar conta TUTU gtatuita
        </button>
      </div>
      { displaySuccessAlert && <div className="success-message">
        <div className="text-center">
          <h6>Com sucesso! Entraremos em contato com você através do endereço de e-mail-{ subscribeEmail }.</h6>
          <button type="button" className="ok-button" onClick={initForm}>OK</button>
        </div>
      </div> }
    </div>
  );
};

export default HeroEmailSubscribingForm;