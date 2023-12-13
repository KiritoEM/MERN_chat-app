const LoginForm = () : JSX.Element => {
    return (
        <div className="section-form mt-5">
              <form action="post">
                  <div className="email">
                      <input type="text" placeholder="Email" id="email-input"/>
                  </div>
                  <div className="password mt-4">
                      <input type="text" placeholder="Mot de Passe" id="email-input"/>
                  </div>
              </form>
        </div>
    );
};

export default LoginForm;