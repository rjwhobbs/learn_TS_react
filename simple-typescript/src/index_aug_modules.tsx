// Augmenting a module
// Chap 19
import * as React from 'react';
import {renderToString} from 'react-dom/server';

// We can't add custom exports to the module
declare module 'react' {
  interface Component {
    howzit(): string;
  }
}

// We can augment Component because react exports it
React.Component.prototype.howzit = function() {
  return "Howzit";
};  

console.log(React.Component.prototype.howzit());

class MyComp extends React.Component {
  render() {
    return (
      <div>
        {this.howzit()}
      </div>
    )
  }
}

console.log(renderToString(<MyComp />));