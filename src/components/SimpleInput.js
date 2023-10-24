import { useState } from "react";

import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		InputBlueHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredEmailIsValid = enteredEmail.includes("@");
	const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = (event) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (enteredName.trim() === "") {
			return;
		}

		console.log(enteredName);

		// 	nameInputRef.current.value = ""; /////NOT IDEAL DON'T MANIPULATE THE DOM
		resetNameInput();

		setEnteredEmail("");
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputHasError ? "form-control" : "form-control";

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
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
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
					onBlur={emailInputBlurHandler}
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
