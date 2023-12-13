import React, { Fragment } from "react";
import MetaTitle from "@/components/MetaTitle";
import LoginHeader from "@/components/login/LoginHeader";
import LoginForm from "@/components/login/LoginForm";

const index = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Connectez-vous" />
      <section id="login">
        <div id="login__container">
          <LoginHeader />
          <LoginForm />
        </div>
      </section>
    </Fragment>
  );
};

export default index;
