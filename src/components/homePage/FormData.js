import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/userActions";
var uniqid = require("uniqid");

export class FormData extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  };

  render() {
    
    const onChange = (e) => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
    };
   
    const onSubmit = (e) => {

      e.preventDefault();
      console.log({ ...this.state, id: uniqid() })
      this.props.createPost({ ...this.state});
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        website: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
      });
      alert("form saved");
      this.props.updateFormdata(uniqid())
    };

    return (
      <div className="FormDataContainer">
        <h4 style={{ textAlign: "center" }}>CONTACT US</h4>
        <div className="FormDataContainerin">
          <div className="container m-0 ">
            <form onSubmit={onSubmit}>
              <table className="table" style={{ borderCollapse: "separate" }}>
                <tbody>
                  <tr>
                    <td colSpan={2} className="Formtitle">
                      Full Name
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="col-md-3 p-1">
                      <div className="form-floating">
                        <input
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="First Name"
                          name="firstName"
                          value={this.state.firstName}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="firstName">First Name</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="col-md-3 p-1">
                      <div className="form-floating ">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Last Name"
                          name="lastName"
                          value={this.state.lastName}
                          required
                        />
                        <label htmlFor="lastName">Last Name</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="Formtitle">
                      Contact Information
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="col-md-3 p-1">
                      <div className="form-floating ">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="email"
                          className="form-control"
                          id=""
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          required
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="col-md-3 p-1">
                      <div className="form-floating ">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="tel"
                          className="form-control"
                          id=""
                          placeholder="Phone"
                          name="phone"
                          value={this.state.phone}
                          required
                        />
                        <label htmlFor="phone">Phone</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="col-md-3 p-1">
                      {" "}
                      <div className="form-floating ">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="url"
                          className="form-control"
                          id=""
                          placeholder="website"
                          name="website"
                          value={this.state.website}
                        />
                        <label htmlFor="website">Website</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="Formtitle">
                      Adress
                    </td>
                  </tr>

                  <tr>
                    <td className="col-md-3 p-1">
                      <div className="form-floating ">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Street"
                          name="street"
                          value={this.state.street}
                          required
                        />
                        <label htmlFor="street">Street</label>
                      </div>
                    </td>
                    <td className="col-md-3 p-1">
                      <div className="form-floating">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Suite"
                          name="suite"
                          value={this.state.suite}
                          required
                        />
                        <label htmlFor="suite">Suite</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="col-md-3 p-1">
                      <div className="form-floating ">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="City"
                          name="city"
                          value={this.state.city}
                          required
                        />
                        <label htmlFor="city">City</label>
                      </div>
                    </td>
                    <td className="col-md-3 p-1">
                      <div className="form-floating ">
                        <input
                          onChange={onChange}
                          autoComplete="off"
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Zipcode"
                          name="zipcode"
                          value={this.state.zipcode}
                          required
                        />
                        <label htmlFor="zipcode">Zipcode</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="col-md-3  p-1">
                      <div className="d-grid gap-2">
                     <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({state });
const mapDispatchToProps = { createPost };
export default connect(mapStateToProps, mapDispatchToProps)(FormData);
