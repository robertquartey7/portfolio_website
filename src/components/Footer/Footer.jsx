import React from "react";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer text-white">
      <div className="text-center">
        <GitHub> </GitHub>
        <LinkedIn></LinkedIn>
        <Instagram></Instagram>
      </div>
      <div>
        <p className="text-center text-muted mt-2">
          Design & Built by Robert Quartey
        </p>
      </div>
    </div>
  );
}

export default Footer;
