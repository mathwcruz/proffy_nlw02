import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container"> 
        <Link className="animate-rigth" to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        
        <img className="animate-left" src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content animate-appear">
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p> }

        {props.children}
      </div>
    </header> 
  );
}

export default PageHeader;