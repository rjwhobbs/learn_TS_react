"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Augmenting a module
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
// We can augment Component because react exports it
React.Component.prototype.howzit = function () {
    return "Howzit";
};
console.log(React.Component.prototype.howzit());
class MyComp extends React.Component {
    render() {
        return (React.createElement("div", null, this.howzit()));
    }
}
console.log(server_1.renderToString(React.createElement(MyComp, null)));
