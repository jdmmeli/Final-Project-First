import React from "react";
import { Card, Button } from "react-bootstrap";
import logo from '../userIcons/main-icon.png'




const styles = {
    text: {
        textAlign: "left"
    },
    button: {
        backgroundColor: "#a0d080",
        width: "90%",
       position: "relative",
       top: "5px"
    },
    card: {
        height: "auto",
        width: "260px"
    },
    header: {
        backgroundColor: "#a0d080",

    }

}
function Categories() {
    return (
        <Card className="text-center" style={styles.card}>
            <Card.Header style={styles.header} ><img className="footimage" src={logo} alt="icon"></img></Card.Header>
            <Card.Body>
                <Card.Title className="text-left ml-4"><h4>Categories</h4></Card.Title>
                <Card.Text>
                    <ol>


                        <li style={styles.text} >Crochet</li>
                        <li style={styles.text}>Sports</li>
                        <li style={styles.text}>Finance</li>
                        <li style={styles.text}>Music</li>
                        <li style={styles.text}>Local</li>
                        <li style={styles.text}>Anything But Politics</li>


                    </ol>
                </Card.Text>

                <Button style={styles.button}>View All</Button>

            </Card.Body>

        </Card>
    );

}


export default Categories