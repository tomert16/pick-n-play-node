const { Location } = require('../models/LocationModel.js');

module.exports.getAllLocations = async (req, res) => {
    try{
        const locations = await Location.findAll();
        return res.status(200).json(locations)
    } catch(err) {
        return res.status(400).json({ msg: 'Error retrieving all locations'})
    }
}