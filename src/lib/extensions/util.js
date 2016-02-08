//þ
(function (m) {
    m.fn.isWeekendDay = function () {
        return this.isoWeekday() > 5;
    };
})(moment);