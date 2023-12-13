import AuthHeader from "../login/AuthHeader";

const SignupForm = (): JSX.Element => {
  return (
    <div className="section-form">
      <div className="section-form__container">
        <AuthHeader title="Créer un compte" />
        <div className="section-form__content mt-5">
          <div className="form">
            <form action="post">
              <div className="username">
                <input
                  type="text"
                  placeholder="Pseudo"
                  id="email-input"
                />
              </div>
              <div className="email">
                <input type="text" placeholder="Email" id="email-input" />
              </div>
              <div className="password">
                <input
                  type="text"
                  placeholder="Mot de Passe"
                  id="email-input"
                />
              </div>
              <div className="button">
                <button className="btn">Créer un compte</button>
              </div>
              <div className="signup mt-4">
                <p>
                  Vous avez déja un compte ? <a href="/"><b>Se connecter</b></a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
