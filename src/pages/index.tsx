import React, { Fragment } from "react";
import MetaTitle from "@/components/MetaTitle";
import AuthHeader from "@/components/login/AuthHeader";
import LoginForm from "@/components/login/LoginForm";

const connexion = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Let's Talk - Connectez-vous" />
      <section id="login">
        <div id="login__container">
          <AuthHeader title="Se connecter à votre compte" />
          <LoginForm />
        </div>
      </section>
    </Fragment>
  );
};

export default connexion;
