import { useFirebase } from "@/hooks/useFirebase";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface Ilogin {
  action: (e: React.FormEvent<HTMLFormElement>) => void;
  firebaseAction: () => void;
}

const LoginForm: React.FC<Ilogin> = ({
  action,
  firebaseAction,
}): JSX.Element => {
  const { emailSent } = useFirebase();
   const router = useRouter();

  useEffect(() => {
    if (emailSent) {
       router.push("/accueil");
    }
  }, [emailSent]);

  return (
    <div className="section-form mt-5">
      <div className="form">
        <form
          action="post"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => action(e)}
        >
          <div className="email">
            <input
              type="text"
              placeholder="Email"
              id="email-input"
              name="email"
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Mot de Passe"
              id="email-input"
              name="password"
            />
          </div>
          <div className="button">
            <button className="btn">Se connecter</button>
          </div>
          <div className="signup mt-4">
            <p>
              Vous n' avez pas encore de compte ?{" "}
              <a href="/inscription">
                <b>S' inscrire</b>
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="or">
        <p>OU</p>
      </div>
      <div className="auth-google">
        <button className="btn" onClick={() => firebaseAction()}>
          <img src="/images/icon/google.png" alt="" className="mx-2" />{" "}
          Continuer avec Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
