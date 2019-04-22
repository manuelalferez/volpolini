import React from "react";
import "./styles/GoogleForm.css";

const SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRajqIlDprc9fpG1cZwAk5eFtUQTfZU5krgMHO4ucOGCWuAg/viewform?embedded=true";

function GoogleForm() {
  return (
    <div className="GoogleForm">
      <iframe
        className="GoogleForm__form"
        src={SRC}
        width="640"
        height="927"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Cargando...
      </iframe>
    </div>
  );
}

export default GoogleForm;
