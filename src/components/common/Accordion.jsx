import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Accordion = ({ index, title, content, activeIndex, setActiveIndex }) => {
    const {t} = useTranslation();
    const isOpen = activeIndex === index;
  
    const handleToggle = () => {
      setActiveIndex(isOpen ? null : index);
    };
  
    return (
        <div className="accordion-item">
        <div className="accordion-header" onClick={handleToggle}>
          <h6>{t(title)}</h6>
          <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
            {isOpen ? "−" : "+"}
          </span>
        </div>
        <div className={`accordion-content ${isOpen ? "open" : ""}`}>
          <p className="mb-0 text-secondary">{content || t("Information not available")}</p>
        </div>
      </div>
    );
  };
  

export default Accordion