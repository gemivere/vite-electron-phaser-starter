import Phaser from 'phaser';

import { config, fonts } from '../config'

import WebFontFile from '../scripts/fontLoader'

// ANCHOR Local Variables

// ANCHOR settings


// @ts-ignore
export default new Phaser.Class ({
  Extends: Phaser.Scene,

  initialize:

  function MainScene(): void {
    Phaser.Scene.call(this, 'Main Scene')
  },

  preload: function(): void {

  },

  // ANCHOR create
  create: function() {
    
  },

  // ANCHOR functions

  // ANCHOR update
  update: function() {

  }
})
