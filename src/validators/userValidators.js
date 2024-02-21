const validateUsername = (username) => {
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return usernameRegex.test(username);
}

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return passwordRegex.test(password);
}

const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/
    return nameRegex.test(name);
}

module.exports = { validateUsername, validatePassword, validateName };