const { promisify } = require('util');
const { SportsModel } = require('../models/SportModel.js')

module.exports.getSports = async (req, res) => {
    SportsModel.getAllSports((err, rows) => {
        if (err) {
            console.error(err);
            return res.status(400).json({ msg: 'Error retrieving sports'});
        } else {
            return res.status(200).json(rows)
        }
    })
};

module.exports.getSportById = async (req, res) => {
    const { id }  = req.params;
    const getSportByIdPromise = promisify(SportsModel.getSportById)
    const sport = await getSportByIdPromise(id);
    if (!sport) {
        return res.status(404).json({ msg: 'Sport not found' });
    } else {
        return res.status(200).json(sport);
    }
}