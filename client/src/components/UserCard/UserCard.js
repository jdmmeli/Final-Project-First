import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./style.css";


const styles = {
  header: {
    background: "#a0d080",
    height: "90px"
  },
  footer: {
    height: "45px",
    background: "#a0d080",
  },
  counts: {
    marginleft: "20px;",
    position: "relative",
    bottom: "70px;"
  },
  img: {
    borderStyle: "solid",
    borderColor: "#bfd730",
    borderRadius: "5px"
  },
  footimage: {
    paddingTop: "7px"
  }


}
function UserCard(props) {
  console.log(props)
  const userIcons = require.context("../userIcons", true)

  return (
    <div className="card" id="usercard">
      <div clasName="header" style={styles.header}></div>
      <div className="img-container">
        <img className="img" alt="img"
        src=
        {props.avatar ? (
        userIcons(`./${props.avatar}.png`)) :
        ('client/public/icons/apple-icon-57x57.png')
        }
        style={styles.img} />
      </div>
      <div className="content">
        <div className="username">User Name: {props.username}</div>
        <div className="counts">
          <Row>
            <Col md={5}>Posts: {props.postCount}</Col>
            <Col md={5}>Comments: {props.commentCount}</Col>
          </Row>

        </div>

        <div className="footer" style={styles.footer}>
          <Row className="justify-content-center">
            <img className="footimage" src="./icons/favicon-32x32.png" alt="icon" style={styles.footimage}></img>
          </Row>
        </div>
      </div>
    </div>
  );
}


export default UserCard