import React, { Fragment } from "react";
import MetaTitle from "@/components/MetaTitle";
import AuthHeader from "@/components/login/AuthHeader";
import LoginForm from "@/components/login/LoginForm";
import AuthHelper from "@/helper/AuthHelper";
import { useFirebase } from "@/hooks/useFirebase";

const connexion = (): JSX.Element => {
  const { login } = AuthHelper();
  const { setGooglePopup } = useFirebase();

  return (
    <Fragment>
      <MetaTitle title="Let's Talk - Connectez-vous" />
      <section id="login">
        <div id="login__container">
          <AuthHeader title="Se connecter à votre compte" />
          <LoginForm action={login} firebaseAction={setGooglePopup} />
        </div>
      </section>
    </Fragment>
  );
};

export default connexion;
