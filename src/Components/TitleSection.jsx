import React from 'react'
import { Link } from "react-router-dom";
import './Style/titleSection.css'


const TitleSection = () => {
  return (
    <div className="title_container">
      <div className="title-section">
        <img 
          src="/public/Assests/icons/cv.png" 
          height={60} 
        />
        <h2>CV GENERATOR</h2>
      </div>
      <div className="github-link">
        <a href="https://github.com/Paul-iwnl/CV_application" target="_blank">
          <img 
            src="/public/Assests/icons/github-mark.svg" 
            height={40}
          />
        </a>
      </div>
    </div>
  );
}

export default TitleSection