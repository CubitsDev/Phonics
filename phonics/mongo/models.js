var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    uuid: String,
    username: String,
    online: Boolean,
    onlineData: {
        audioToken: String,
        server: String
    }
});

var PlayerModel = mongoose.model('PlayerModel', PlayerSchema, 'players');

exports.PlayerModel = PlayerModel;