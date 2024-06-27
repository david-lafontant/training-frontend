import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <React.Fragment>
      <div id="notFound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>4<span>0</span>4</h1>
          </div>
          <p>
            La page que vous recherchez a peut-être été supprimée, son nom a changé ou est temporairement indisponible.
          </p>
          <Link to="/" >Acceuil</Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NotFound;