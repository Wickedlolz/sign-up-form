export const validateFields = (formState) => {
    let formErrors = {};

    Object.keys(formState).forEach((field) => {
        if (formState[field].length === 0) {
            formErrors[field] = field + ' is required';
        }

        if (field === 'email') {
            if (!isValidEmail(formState[field])) {
                formErrors[field] = 'Invalid email adress.';
            }
        }

        if (field === 'interests') {
            if (
                !formState.interests.development &&
                !formState.interests.design &&
                !formState.interests.business
            )
                formErrors[field] = 'is required';
        }
    });

    return formErrors;
};

export const isPasswordsIdentical = (password, rePassword) => {
    return password === rePassword;
};

const isValidEmail = (email) => {
    const pattern = /^[a-z-A-Z0-9]{3,}@[a-z0-9]{3,}\.[a-z0-9]{2,}$/;

    return pattern.test(email);
};
