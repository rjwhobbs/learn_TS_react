// Augmenting a module
import * as React from 'react';
import {renderToString} from 'react-dom/server';

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