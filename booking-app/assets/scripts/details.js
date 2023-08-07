const shouldDisablePurchase = (
	fullname,
	mobileNumber,
	email,
	confirmEmail
) => {
	return (
		fullname.value === "" ||
		mobileNumber.value === "" ||
		email.value === "" ||
		confirmEmail.value === "" ||
		!validateEmails(email, confirmEmail)
	);
};

const touchedField = (field) => {
	field.touched = true;
};

// true means the field is valid
const validateField = (field) => {
	if (field.touched && field.value === "") return false;
	return true;
};

const getSummaryTable = () => {
	const summaryTable = localStorage.getItem("summaryTable");
	return JSON.parse(summaryTable);
};

const storeDetails = (
	fullname,
	gender,
	mobileNumber,
	email,
	confirmEmail
) => {
	const details = {
		fullname: fullname.value,
		gender: gender.value,
		mobileNumber: mobileNumber.value,
		email: email.value,
		confirmEmail: confirmEmail.value,
	};

	localStorage.setItem("details", JSON.stringify(details));
};

const validateEmails = (email, confirmEmail) => {
	if(email.touched && confirmEmail.touched){
		return email.value === confirmEmail.value;
	}

	return true;
}