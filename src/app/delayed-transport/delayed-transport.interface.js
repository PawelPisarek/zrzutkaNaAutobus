"use strict";
/**
 * Created by pawe on 2/21/17.
 */
var DelayedTransport = (function () {
    function DelayedTransport(nameTrain, alternative) {
        this.nameTrain = nameTrain;
        this.alternative = alternative;
    }
    return DelayedTransport;
}());
exports.DelayedTransport = DelayedTransport;
