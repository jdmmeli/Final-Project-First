import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import UserInfoContext from '../utils/UserInfoContext';
import { addComment } from '../utils/API';
import AuthService from '../utils/auth';

const styles = {
	button: {
		backgroundColor: '#a0d080',
	},
};

function CommentForm({ handleModalClose }) {
	// set initial form state
	const [commentFormData, setcommentFormData] = useState({ commentText: '', postId: '' });
	// set state for form validation
	const [validated] = useState(true);
	// set state for alert
	const [showAlert, setShowAlert] = useState(false);
	const [errorText, setErrorText] = useState('');

	// get context object from app.js
	// eslint-disable-next-line
	const userData = useContext(UserInfoContext);
	let postId = window.location.href.split("/")[4];
	// eslint-disable-next-line
    useEffect(() => {
        setcommentFormData({ postId: postId });
    }, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setcommentFormData({ ...commentFormData, [name]: value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// check if form has everything (as per react-bootstrap docs)
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		addComment(commentFormData, AuthService.getToken(), postId )
			.then(({ data: { comment, user } }) => {
				handleModalClose();
			})
			.catch((err) => {
				console.log(err.response);
				setShowAlert(true);
				setErrorText(err.response.data.message);
			});
	};

	return (
		<>
			{/* This is needed for the validation functionality above */}
			<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
				{/* show alert if server response is bad */}
				<Alert
					dismissible
					onClose={() => setShowAlert(false)}
					show={showAlert}
					variant="danger"
				>
					{errorText || 'Something went wrong while submitting your comment!'}
				</Alert>

				<Form.Group>
					<Form.Label htmlFor="Text">Submit a New Comment</Form.Label>
					<Form.Control
						type="text"
						placeholder="Comment Text"
						name="commentText"
						onChange={handleInputChange}
						value={commentFormData.commentText}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please enter a comment!
					</Form.Control.Feedback>
				</Form.Group>
				<Button
					style={styles.button}
					disabled={!commentFormData.commentText}
					type="submit"
					variant="success"
				>
					Submit
				</Button>
			</Form>
		</>
	);
}

export default CommentForm;
