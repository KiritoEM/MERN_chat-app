import MetaTitle from "@/components/MetaTitle";
import { Fragment } from "react";
import SignupForm from "@/components/signup/SignupForm";

const inscription = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Let's Talk - S' inscrire" />
      <section id="signup">
        <div className="row gx-5">
          <div className="col-7">
            <div className="section-cover">
              <img src="/images/login-img.png" alt="" />
            </div>
          </div>
          <div className="col-5">
            <SignupForm />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default inscription;
