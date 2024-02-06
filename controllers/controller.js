const {sequelize} = require('../config/database');

exports.healthCheck = async (req, res) => {
    // console.log("4. healthCheck")
    try {
        await sequelize.authenticate();
        console.log("Database connection successful");
  
        // Removing specific headers
        res.removeHeader('X-Powered-By');
        res.removeHeader('Connection');
        res.removeHeader('Keep-Alive');
        
        //Setting specific headers
        res.set('Pragma', 'no-cache');
        res.set('X-Content-Type-Options', 'nosniff');
        res.status(200).set('Cache-Control', 'no-cache, no-store, must-revalidate;').send();
    } catch (error) {
        console.error('Database connection error:', error);

        // Removing specific headers
        res.removeHeader('X-Powered-By');
        res.removeHeader('Connection');
        res.removeHeader('Keep-Alive');
        
        //Setting specific headers
        res.set('Pragma', 'no-cache');
        res.set('X-Content-Type-Options', 'nosniff');
        res.status(503).set('Cache-Control', 'no-cache, no-store, must-revalidate;').send();
    }
}