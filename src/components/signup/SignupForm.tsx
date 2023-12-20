import AuthHeader from "../login/AuthHeader";

interface Isignup {
  action: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SignupForm: React.FC<Isignup> = ({ action }): JSX.Element => {
  return (
    <div className="section-form">
      <div className="section-form__container">
        <AuthHeader title="Créer un compte" />
        <div className="section-form__content mt-5">
          <div className="form">
            <form
              action="post"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                action(e);
              }}
            >
              <div className="username">
                <input
                  type="text"
                  placeholder="Pseudo"
                  id="username-input"
                  name="username"
                />
              </div>
              <div className="email">
                <input
                  type="email"
                  placeholder="Email"
                  id="email-input"
                  name="email"
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="Mot de Passe"
                  id="password-input"
                  name="password"
                />
              </div>
              <div className="button">
                <button className="btn">Créer un compte</button>
              </div>
              <div className="signup mt-4">
                <p>
                  Vous avez déja un compte ?{" "}
                  <a href="/">
                    <b>Se connecter</b>
                  </a>
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
