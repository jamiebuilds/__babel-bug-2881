"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = (function () {
  _createClass(Player, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }]);

  function Player(id) {
    _classCallCheck(this, Player);

    this._id = id;
  }

  return Player;
})();

var Application = (function () {
  function Application() {
    _classCallCheck(this, Application);
  }

  _createClass(Application, null, [{
    key: "Player",
    get: function get() {
      return Player;
    }
  }]);

  return Application;
})();

var player1 = new Application.Player();
var player2 = new Application.Player(1);

console.log(player1.id);
console.log(player2.id);
