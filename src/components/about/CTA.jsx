"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/Layout/LoginModal";

const CTA = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSignUpClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <div className="spacer-bottom"></div>
      <section className="rt-cta-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-box-2 d-flex flex-column align-items-center justify-content-center bg-gradient-primary">
                <div className="row">
                  <div className="col-lg-7 mx-auto">
                    <div className="rt-section-title-wrapper text-white text-center">
                      <h2 className="rt-section-title">
                        <span>Save Time, Save Money</span>
                        Let’s Get Started
                      </h2>
                      <p>
                        We have the knowledge, experience, and expertise to take
                        care of all your travel needs. Sign up and we'll send
                        the best deals to you
                      </p>
                      <div className="section-title-spacer"></div>
                      <a
                        href="#"
                        onClick={handleSignUpClick}
                        className="rt-btn rt-light pill rt-xl rt-Bshadow-1 text-uppercase"
                      >
                        Sign UP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          defaultLoginView={false}
        />
      )}
    </>
  );
};

export default CTA;
