import Phaser from 'phaser';
import { config } from './config';
import scene from './scenes/index';

export default new Phaser.Game(
  Object.assign(config, {
    scene: scene
  })
);
