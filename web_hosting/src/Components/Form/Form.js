import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <>
      <div className="container">
        <div className="row  justify-content-center ">
          <div className="col-md-4 text-center mt-5">
            <h2>Get In Touch</h2>
          </div>
        </div>

        <div className="row justify-content-center mt-4 pb-5">
          <div className="col-md-5 d-block">
            <form>
              <div className="mb-3">
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="mb-3 ">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>

              <button type="submit" id="form-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
