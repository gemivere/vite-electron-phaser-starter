import Phaser from 'phaser';

export const fonts = ['Emilys Candy']
export const EC_FONT: {fontFamily: string, fontSize: string} = {
  fontFamily: '"Emilys Candy"',
  fontSize: '56px'
};

export let config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  width: 1000,
  height: 800,
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH
};

export const CENTERX = config.width / 2
