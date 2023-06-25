import React from "react";
import { MDBContainer, MDBIcon } from "mdbreact";
import "../search.css";
import Icon from "../assets/search.svg";

const SearchPage = () => {
  return (
    <MDBContainer>
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          {/* <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon icon={Icon} className="text-grey" />
          </span> */}
        </div>
        <input className="form-control mx-5 my-0 py-2 " style={{borderRadius: "25px"}} type="text" placeholder="Search by name or email" aria-label="Search"/>
      </div>
    </MDBContainer>
  );
};

export default SearchPage;