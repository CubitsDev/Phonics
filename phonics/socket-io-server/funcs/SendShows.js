var logger = require("../../utils/logger");
var clientStore = require("../../utils/ClientStore").ClientStore;
var showEnum = require("../../utils/Shows").Shows;

exports.SendShows = function (socket, shows) {
    let newShows = [];
    shows.forEach(element => {
        var info = showEnum.find((x) => x.code == element.show);
        let show = {};
        Object.assign(show, {time: element.time})
        Object.assign(show, {park: info.park})
        Object.assign(show, {show: info.full})
        newShows.push(show);
    });
    socket.emit("shows", JSON.stringify(newShows));
};
