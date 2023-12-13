import React, { Fragment } from "react";
import MetaTitle from "@/components/MetaTitle";

const index = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Connectez-vous" />
      <section id="login">
        <div id="login__container">
          <div className="logo">
             <img src="/logo-white.png" alt="" />
          </div>
          <div className="title">
            <h1 className="text-center">Se connecter</h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default index;
