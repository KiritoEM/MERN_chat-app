import MetaTitle from "@/components/MetaTitle";
import { Fragment } from "react";
import SignupForm from "@/components/signup/SignupForm";
import AuthHelper from "@/helper/AuthHelper";

const inscription = (): JSX.Element => {
  const { signup } = AuthHelper();
  return (
    <Fragment>
      <MetaTitle title="Let's Talk - S' inscrire" />
      <section id="signup">
        <div className="row gx-5">
          <div className="col-7 d-none d-lg-flex">
            <div className="section-cover">
              <img src="/images/login-img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <SignupForm action={signup} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default inscription;
