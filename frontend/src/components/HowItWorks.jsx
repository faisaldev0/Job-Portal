import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <>
      <section className="howItWorks">
        <h3>How does it work?</h3>
        <div className="container">
          <div className="card">
            <div className="icon">
              <LuUserPlus />
            </div>
            <h4>Create an Account</h4>
            <p>
              Join our platform for free as a job seeker or employer in just a
              few minutes. Build your profile to start exploring job
              opportunities or posting vacancies instantly. Tailor your profile
              to highlight your expertise or specify your hiring requirements,
              and take the first step towards success today!
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <VscTasklist />
            </div>
            <h4>Post or Browse Jobs</h4>
            <p>
              Easily post job openings or explore available listings. Whether
              you are looking to hire or searching for your next opportunity,
              our platform streamlines the process, helping you find the perfect
              match quickly and effortlessly.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <BiSolidLike />
            </div>
            <h4>Hire or Get Hired</h4>
            <p>
              Whether you are seeking to hire exceptional talent or land your
              next career opportunity, our platform simplifies the process.
              Effortlessly connect with qualified candidates or employers and
              move forward in your career or business with confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
