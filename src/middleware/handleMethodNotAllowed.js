const handleMethodNotAllowed = (req, res) => {
    return res.status(405).send();
}

module.exports = handleMethodNotAllowed;