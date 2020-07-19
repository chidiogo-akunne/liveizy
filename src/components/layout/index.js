import React from "react";

import "./styles.scss";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="layout_container">
      <div className="mobile_container">
        <div className="right_section">
          <img src="/images/liveizy-logo.png" alt="logo" />
          {children}
        </div>
      </div>
      <div className="web_container">
        <div className="left_section">
          <div className="quote_card">
            <div className="quote_wrapper">
            <img src="/images/quote.svg" alt="quote" />
            </div>
            <p className="quote_text">
            Our job is to granty you peace of mind when it comes to choosing an apartment as a tenant or as landlord looking for the right tenant .
            </p>
            <div className="quote_footer">
              <span>
                <h6>Tochi Adesanya</h6>
                <p>CEO & Co-founder Liveizy</p>
              </span>
              <img src="/images/liveizy-logo-1.png" alt="logo" />
            </div>
          </div>
          
        </div>
        <div className="web_right_section">
        <img src="/images/liveizy-logo.png" alt="logo" />
         {children}
        </div>
      </div>
    </div>
  );
}
