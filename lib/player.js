"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = (function () {
  _createClass(Player, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }]);

  function Player() {
    _classCallCheck(this, Player);

    var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    this._id = id;
  }

  return Player;
})();

exports.default = Player;