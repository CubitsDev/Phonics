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

var ShowSchema = new Schema({
    day: String,
    time: Number,
    show: String
});

var PlayerModel = mongoose.model('PlayerModel', PlayerSchema, 'players');

var ShowModel = mongoose.model('ShowModel', ShowSchema, 'showschedule');

exports.PlayerModel = PlayerModel;
exports.ShowModel = ShowModel;