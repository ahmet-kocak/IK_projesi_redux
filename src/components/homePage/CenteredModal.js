import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal, Table } from "react-bootstrap";

export const CenteredModal = (props) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: ""
  
  });

  useEffect(() => {
    setData(props.item);
  }, [props.item]);

  const forceUpdate = (e) => {
    e.preventDefault();
    props.onHideUpdate(data);
  };

  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.bool1 ? (
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr><td colSpan={4} style={{backgroundColor:"#bdbebd" }}>Full Name</td></tr>
            </thead>
            <tbody>
              <tr><td>FirstName :</td><td colSpan={3}>
                  <input
                    onChange={onChange}
                    name="firstName"
                    value={data.firstName}
                    autoComplete="off"/></td></tr><tr>
                <td>LastName :</td>
                <td colSpan={3}>
                  <input
                    onChange={onChange}
                    name="lastName"
                    value={data.lastName}
                    autoComplete="off"
                  />
                </td></tr>
            </tbody>
            <thead><tr><td style={{backgroundColor: "#bdbebd"}} colSpan={4}>
                  Contact Information
                </td></tr></thead>
            <tbody>
              <tr><td>Email :</td><td colSpan={3}>
                  <input onChange={onChange} name="email" value={data.email} autoComplete="off" />
                </td></tr><tr>
                <td>Phone :</td>
                <td colSpan={3}>
                  <input onChange={onChange} name="phone" value={data.phone} autoComplete="off" />
                </td></tr><tr>
                <td>Website :</td>
                <td colSpan={3}>
                  <input
                    onChange={onChange}
                    name="website"
                    value={data.website} autoComplete="off"/>
                </td></tr></tbody>
            <thead><tr><td colSpan={4} style={{backgroundColor:"#bdbebd"}}>
                  Adress
                </td></tr></thead>
            <tbody><tr><td className="col-md-1">Street :</td>
                <td className="col-md-2">
                  <input
                    onChange={onChange}
                    name="street"
                    value={data.street}  autoComplete="off"/></td><td className="col-md-1">Suite :</td>
                <td className="col-md-2">
                  <input onChange={onChange} name="suite" value={data.suite} autoComplete="off"/>
                </td></tr><tr>
                <td>City :</td>
                <td>
                  <input onChange={onChange} name="city" value={data.city}  autoComplete="off" />
                </td>
                <td>Zipcode :</td>
                <td>
                  <input
                    onChange={onChange}
                    name="zipcode"
                    value={data.zipcode} autoComplete="off"
                  />
                </td></tr></tbody>
          </Table>
        ) : (
          <Table striped bordered hover responsive size="sm">
            <thead><tr>
                <td colSpan={4} style={{ backgroundColor:"#bdbebd"}}>
                  Full Name
                </td></tr></thead>
            <tbody>
              <tr><td>FirstName :</td>
                <td colSpan={3}>{data.firstName}</td></tr><tr>
                <td>LastName :</td>
                <td colSpan={3}>{data.lastName}</td></tr></tbody>
            <thead><tr>
                <td style={{ backgroundColor: "#bdbebd" }} colSpan={4}>
                  Contact Information
                </td></tr></thead>
            <tbody><tr><td>Email :</td>
                <td colSpan={3}>{data.email}</td></tr><tr>
                <td>Phone :</td>
                <td colSpan={3}>{data.phone}</td></tr><tr>
                <td>Website :</td>
                <td colSpan={3}>{data.website}</td></tr></tbody>
            <thead><tr><td colSpan={4} style={{ backgroundColor: "#bdbebd" }}>
                  Adress
                </td></tr></thead>
            <tbody><tr><td className="col-md-1">Street :</td>
                <td className="col-md-2">{data.street}</td>
                <td className="col-md-1">Suite :</td>
                <td className="col-md-2">{data.suite}</td></tr><tr>
                <td>City :</td>
                <td>{data.city}</td>
                <td>Zipcode :</td>
                <td>{data.zipcode}</td></tr></tbody>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!props.bool1 ? (
          <Button onClick={props.onHide}>Close</Button>
        ) : props.saveupdate ? (
          <Button onClick={forceUpdate}>Save</Button>
        ) : (
          <h4>Updated</h4>
        )}
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state, props) => ({state, props });
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(CenteredModal);
