const LoginForm = (): JSX.Element => {
  return (
    <div className="section-form mt-5">
      <div className="form">
        <form action="post">
          <div className="email">
            <input type="text" placeholder="Email" id="email-input" name="email" />
          </div>
          <div className="password">
            <input type="text" placeholder="Mot de Passe" id="email-input" name="password" />
          </div>
          <div className="button">
            <button className="btn">Se connecter</button>
          </div>
          <div className="signup mt-4">
              <p>Vous n' avez pas encore de compte ? <a href="/inscription"><b>S' inscrire</b></a></p>
          </div>
        </form>
      </div>
      <div className="or">
          <p>OU</p>
      </div>
      <div className="auth-google">
          <button className="btn">
              <img src="/images/icon/google.png" alt="" className="mx-2" /> Continuer avec Google
          </button>
      </div>
    </div>
  );
};

export default LoginForm;
