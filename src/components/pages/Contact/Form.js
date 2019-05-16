import React from "react";
import "./styles/Form.css";

const SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRajqIlDprc9fpG1cZwAk5eFtUQTfZU5krgMHO4ucOGCWuAg/viewform?embedded=true";

function Form() {
  return (
    <div className="Form__container">
    <h1>Mensaje directo</h1>
      <form action="send.php" method="post" enctype="text/plain" className='Form'>
        <div className='Form__element Form__name'>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name='user_name' />
        </div>
        <div className='Form__element Form__email'>
          <label for="email">Correo:</label>
          <input type="email" id="email" name='user_email'/>
        </div>
        <div className='Form__element Form__phone'>
          <label for="phone">Teléfono:</label>
          <input type="text" id="phone" name='user_phone' />
        </div>
        <div className='Form__element Form__msg'>
          <label for="msg">Mensaje:</label>
          <textarea id="msg" name='user_message'/>
        </div>
        <div class="Form__button">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
