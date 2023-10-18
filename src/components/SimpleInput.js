import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState(""); // Initialize enteredEmail as an empty string
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const enteredEmailIsValid = enteredEmail.includes("@");
	const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
	};

	const emailInputBlueHandler = (event) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouched(true);

		if (enteredName.trim() === "") {
			return;
		}

		console.log(enteredName);

		// 	nameInputRef.current.value = ""; /////NOT IDEAL DON'T MANIPULATE THE DOM
		setEnteredName("");
		setEnteredNameTouched(false);

		setEnteredEmail("");
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control";

	const emailInputClasses = enteredEmailIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label className="nombre" htmlFor="name">
					Your Name
				</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className="error-text">
						CANNOT LEAVE INPUT EMPTY PLEASE TYPE YOUR NAME!!
					</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label className="nombre" htmlFor="name">
					Your E-MAIL
				</label>
				<input
					type="email"
					id="email"
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlueHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInvalid && (
					<p className="error-text">
						CANNOT LEAVE INPUT EMPTY PLEASE ENTER VALID EMAIL 📧!!
					</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
