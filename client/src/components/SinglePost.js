import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import CommentCard from './CommentCard/CommentCard';
import UserInfoContext from '../utils/UserInfoContext';
import { Container, Modal, Tab, Row, Col } from 'react-bootstrap';
import CommentForm from './CommentForm';
import moment from 'moment';
import logo from './images/ms-icon-310x310.png'


const styles = {
	button: {
        backgroundColor: "#a0d080"
    },
    header: {
		backgroundColor: "#a0d080",
		color: "white"
    },
    footer: {
        backgroundColor: "#a0d080"
    },
    card: {
        height: '100%',
    },
    img: {
        padding: '10%',
        height: '100%',
        width: '100%'
    }
};
function SinglePost(props) {
	const { username } = useContext(UserInfoContext);
	const [showModal, setShowModal] = useState(false);
	const formattedDate = moment(props.updated).format('MM/DD/YYYY')
	return (
		<>
			<CardGroup>
				<Card style={styles.card} >
					<Card.Header className="text-center" style={styles.header}><h2>{props.title}</h2></Card.Header>
					<Container>
						<Row>
							<Col xs lg="3">
								<Card.Img
									style={styles.img}
									variant="top"
									src={
										props.link ? props.link : logo
									}
								/>
							</Col>
							<Col>
								<Card.Body>
									<Card.Text></Card.Text>
									<Card.Text className="text-left">{props.postText}</Card.Text>
									{username ? (
										<Button
											onClick={() => setShowModal(true)}
											style={styles.button}
											variant="primary"
										>
											Add a Comment
										</Button>
									) : (
										<Button style={styles.button} href="/" variant="primary">
											Return to Main Feed
										</Button>
									)}{' '}
								</Card.Body>
							</Col>
						</Row>
					</Container>
					<Card.Footer style={styles.footer} className="text-center text-muted">
						Posted By: {props.author} || Comments: {props.commentCount} || Posted: {formattedDate}
					</Card.Footer>
					{props.savedComments.map((comment) => {
						return (
							<CommentCard
								auhor={comment.author}
								authorID={comment.authorID}
								commentText={comment.commentText}
								updated={comment.updated}
							></CommentCard>
						);
					})}
				</Card>
			</CardGroup>
			<Modal
				size="lg"
				show={showModal}
				onHide={() => setShowModal(false)}
				aria-labelledby="comment"
			>
				{/* tab container to do either signup or login component */}
				<Tab.Container defaultActiveKey="comment">
					<Modal.Header closeButton>
						<Modal.Title id="comment"></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Tab.Content>
							<Tab.Pane eventKey="comment">
								<CommentForm handleModalClose={() => setShowModal(false)} />
							</Tab.Pane>
						</Tab.Content>
					</Modal.Body>
				</Tab.Container>
			</Modal>
		</>
	);
}

export default SinglePost;
