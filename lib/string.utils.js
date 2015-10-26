if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, n) {
            return typeof args[n] != 'undefined' ? args[n] : "";
        });
    };
}