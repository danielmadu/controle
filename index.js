'use strict'

let five = require('johnny-five');
let board = new five.Board();
let robot = require('robotjs');

board.on('ready', function(){
  var button = new five.Button(2);
  button.on('press', function(){
    robot.typeString('w');
    console.log('Button pressed');
  });
  button.on('hold', function(){
    robot.typeString('w');
  });
});
