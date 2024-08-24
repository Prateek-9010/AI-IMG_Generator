import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center bg-light py-4 mt-2">
      <hr className="my-0 bg-black width-full" />
      <div className=" mt-4 d-flex align-items-center justify-content-center flex-column">
        <div className="mb-3">
          <p className="mb-3 mb-md-0">
            Made with ❤️ by {" "}
            <a 
              href="https://prateek-9010.github.io/Portfolio/" 
              className="text-decoration-none text-primary fw-bold fs-5" 
              target="_blank" 
              rel="noreferrer"
              style={{ fontWeight: 'bold' }}
            >
              Prateek Chaudhary
            </a>
          </p>
        </div>
        <div>
          <a 
            className="text-dark fs-4 me-2" 
            href="https://github.com/prateek-9010" 
            target="_blank" 
            rel="noreferrer"
            style={{ fontSize: '2rem' }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;