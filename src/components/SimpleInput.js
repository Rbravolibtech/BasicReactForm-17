import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	useEffect(() => {
		if (enteredNameIsValid) {
			console.log("NAME INPUT IS VALID");
		}
	}, [enteredNameIsValid]);

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouched(true);

		if (enteredName.trim() === "") {
			setEnteredNameIsValid(false);
			return;
		}

		console.log(enteredName);
		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		// 	nameInputRef.current.value = ""; /////NOT IDEAL DON'T MANIPULATE THE DOM
		setEnteredName("");
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label className="nombre" htmlFor="name">
					Your Name
				</label>
				<input
					ref={nameInputRef}
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className="error-text">
						CANNOT LEAVE INPUT EMPTY PLEASE TYPE YOUR NAME!!
					</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
