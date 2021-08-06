import React from "react";

function Footer() {
  return (
    <div>
      <div class="container text-center">
        <hr></hr>
        <div class="row">
          <div class="col-lg-12">
            <div class="col-md-3">
              <ul class="nav nav-pills nav-stacked">
                <li>
                  <a>Sobre Nosotros</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="row">
          <div class="col-lg-12">
            <ul class="nav nav-pills nav-justified">
              <li>
                <a>© 2021 Drakken.</a>
              </li>
              <li>
                <a>Terminos y Servicios</a>
              </li>
              <li>
                <a>Privacidad</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
