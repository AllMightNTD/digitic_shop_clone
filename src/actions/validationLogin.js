function validation(values) {
    let errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    const mobileRegex = /^([+]\d{2})?\d{10}$/;
    if (values.firstname === '') {
        errors.firstname = 'First name should not be empty';
    }
    if (values.lastname === '') {
        errors.lastname = 'Last name should not be empty';
    }
    if (values.email === '') {
        errors.email = 'Email should not be empty';
    }
    if (values.mobile === '') {
        errors.mobile = 'Mobile number should not be empty';
    }
    if (!mobileRegex.test(values.mobile)) {
        errors.mobile = 'Mobile number is not valid';
    }
    if (!emailRegex.test(values.email)) {
        errors.email = 'Email is not valid';
    }
    if (values.password === '') {
        errors.password = 'Password should not be empty';
    }
    if (!passwordRegex.test(values.password)) {
        errors.password =
            'Password is not valid , password needs 8 to 30 characters including uppercase, lowercase and special characters';
    }
    // if (values.password === '') {
    //     errors.password = 'Password should not be empty';
    // } else if (!passwordRegex.test(password)) {
    //     errors.password = 'Password is not valid';
    // }
    return errors;
}

export default validation;
