const allowOnlyGetRequests = (req, res, next) => {
    if(req.method !== 'GET') {
        return res.status(405).send();
    }

    next();
}

module.exports = allowOnlyGetRequests;