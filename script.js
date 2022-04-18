class loginPrimary extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <div class="container temp">
            <div class="header">
                <h1>
                    Login
                </h1>
                <br>
            </div>
            <div class="items">
                <form>
                    <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Enter email" id = 'inputEmail'>
                    </div>
                    <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" id="inputPassword">
                    </div>
                    <br>
                    <center>                
                        <button type="submit" class="btn btn-outline-light" id="submit">Submit</button>
                    </center>
                </form>
            </div>
        </div>
      <style>
        :host {
            //overall code like bg color
        }
        .container{
            background-color: dodgerblue;
            height: 500px;
            width: 600px;
            position: absolute;
            left: 18em;
            top: 1.5em;
            border-radius: 100px;
            padding:75px;
            color: #fff;
        }
        .header{
            text-align: center;
        }
      </style>
    `;
  }
}

class loginDark extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <div class="container temp">
              <div class="header">
                  <h1>
                      Login
                  </h1>
                  <br>
              </div>
              <div class="items">
                  <form>
                      <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email" id = 'inputEmail'>
                      </div>
                      <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password" id="inputPassword">
                      </div>
                      <br>
                      <center>                
                          <button type="submit" class="btn btn-outline-light" id="submit">Submit</button>
                      </center>
                  </form>
              </div>
          </div>
        <style>
          :host {
              //overall code like bg color
          }
          .container{
              background-color: #343A40;
              height: 500px;
              width: 600px;
              position: absolute;
              left: 18em;
              top: 1.5em;
              border-radius: 100px;
              padding:75px;
              color: #fff;
          }
          .header{
              text-align: center;
          }
        </style>
      `;
    }
  }
  class loginGreen extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <div class="container temp">
              <div class="header">
                  <h1>
                      Login
                  </h1>
                  <br>
              </div>
              <div class="items">
                  <form>
                      <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email" id = 'inputEmail'>
                      </div>
                      <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password" id="inputPassword">
                      </div>
                      <br>
                      <center>                
                          <button type="submit" class="btn btn-outline-light" id="submit">Submit</button>
                      </center>
                  </form>
              </div>
          </div>
        <style>
          :host {
              //overall code like bg color
          }
          .container{
              background-color: #005555;
              height: 500px;
              width: 600px;
              position: absolute;
              left: 18em;
              top: 1.5em;
              border-radius: 100px;
              padding:75px;
              color: #fff;
          }
          .header{
              text-align: center;
          }
        </style>
      `;
    }
  }
  class loginRed extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <div class="container temp">
              <div class="header">
                  <h1>
                      Login
                  </h1>
                  <br>
              </div>
              <div class="items">
                  <form>
                      <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email" id = 'inputEmail'>
                      </div>
                      <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password" id="inputPassword">
                      </div>
                      <br>
                      <center>                
                          <button type="submit" class="btn btn-outline-light" id="submit">Submit</button>
                      </center>
                  </form>
              </div>
          </div>
        <style>
          :host {
              //overall code like bg color
          }
          .container{
              background-color: #FF1818;
              height: 500px;
              width: 600px;
              position: absolute;
              left: 18em;
              top: 1.5em;
              border-radius: 100px;
              padding:75px;
              color: #fff;
          }
          .header{
              text-align: center;
          }
        </style>
      `;
    }
  }
  class loginYellow extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <div class="container temp">
              <div class="header">
                  <h1>
                      Login
                  </h1>
                  <br>
              </div>
              <div class="items">
                  <form>
                      <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email" id = 'inputEmail'>
                      </div>
                      <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password" id="inputPassword">
                      </div>
                      <br>
                      <center>                
                          <button type="submit" class="btn btn-outline-light" id="submit">Submit</button>
                      </center>
                  </form>
              </div>
          </div>
        <style>
          :host {
              //overall code like bg color
          }
          .container{
              background-color: #FEB139;
              height: 500px;
              width: 600px;
              position: absolute;
              left: 18em;
              top: 1.5em;
              border-radius: 100px;
              padding:75px;
              color: #fff;
          }
          .header{
              text-align: center;
          }
        </style>
      `;
    }
  }
  class loginWhite extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <div class="container temp">
              <div class="header">
                  <h1>
                      Login
                  </h1>
                  <br>
              </div>
              <div class="items">
                  <form>
                      <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email" id = 'inputEmail'>
                      </div>
                      <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password" id="inputPassword">
                      </div>
                      <br>
                      <center>                
                          <button type="submit" class="btn btn-outline-primary" id="submit">Submit</button>
                      </center>
                  </form>
              </div>
          </div>
        <style>
          :host {
              //overall code like bg color
          }
          .container{
              background-color: #F7F7F7;
              height: 500px;
              width: 600px;
              position: absolute;
              left: 18em;
              top: 1.5em;
              border-radius: 100px;
              padding:75px;
              color: #636363;
          }
          .header{
              text-align: center;
          }
        </style>
      `;
    }
  }
customElements.define('login-sky', loginPrimary);
customElements.define('login-night', loginDark);
customElements.define('login-forest', loginGreen);
customElements.define('login-ruby', loginRed);
customElements.define('login-sunset', loginYellow);
customElements.define('login-snow', loginWhite);





