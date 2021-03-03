import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

function RegistrationPerformed() {
  return (
    <div className="registration-container">
      <div className="registration-content">
        <FiCheckCircle color="#04D361" className="performedIcon animate-bottomToTop" />
        <h2>Cadastro salvo!</h2>
        <p>Tudo certo, seu cadastro está na nossa lista de professores. <br/>
          Agora é só ficar de olho no seu WhatsApp.
        </p>

          <Link className="buttonPerformed animate-topToBottom" to="/">
            Certo!
          </Link>
      </div>
    </div>
  )
}

export default RegistrationPerformed;