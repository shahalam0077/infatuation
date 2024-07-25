import React from "react";
import logo from "../../../images/dnk-logo-black.png";
import '../css/footer.css'

const PrimarySectionOne = () => {
  return (
    <div>
      <img src={logo} className="footer-dnk-logo" alt="logo" />
      <div className="footer-dialog">The Best Look Anytime Anywhere</div>
    </div>
  );
};

export default PrimarySectionOne;
