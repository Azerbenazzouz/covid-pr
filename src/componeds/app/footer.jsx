import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row sticky-bottom">
        <div className="col-md-12">
          <div className="footer p-3 mt-0 text-center bg-dark text-light">
            Developed By: 
            <span className="text-warning font-weight-normal">
               Azer Ben Azzouz
            </span>
            , Using <i className="fab fa-react" /> React JS
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;