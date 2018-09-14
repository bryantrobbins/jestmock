function woot() {
    throw "Do not call this function woot"
}

module.exports = function(options) {
    return {
        woot
    };
};
