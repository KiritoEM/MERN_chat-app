const LoginForm = () : JSX.Element => {
    return (
        <div className="section-form mt-5">
              <form action="post">
                  <div className="email">
                      <input type="text" placeholder="Email" id="email-input"/>
                  </div>
                  <div className="password">
                      <input type="text" placeholder="Mot de Passe" id="email-input"/>
                  </div>
                  <div className="button">
                      <button className="btn">Se connecter</button>
                  </div>
              </form>
        </div>
    );
};

export default LoginForm;