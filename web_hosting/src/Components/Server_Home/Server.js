import react from "react";
import "./Server.css";
const Server = () => (
  <>
    <div className="container-fluid server-section py-5 my-5">
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 img-server">
            <img src="./images/server-img.png"></img>
          </div>
          <div className="col-md-6 text-white server-section d-block align-content-center ps-5">
            <h2>Let us manage your server</h2>
            <p>
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum which looks reasonable. The generated Lorem Ipsum is
              therefore
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Server;
