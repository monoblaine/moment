//ş
/* globals moment */
(function (m) {
    m.locale('tr');

    m.fn.isWeekendDay = function () {
        return this.isoWeekday() > 5;
    };
})(moment);
