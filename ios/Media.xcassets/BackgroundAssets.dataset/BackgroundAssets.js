const bg1 = require('./bg_1.jpg');
const bg2 = require('./bg_2.jpg');
const bg3 = require('./bg_3.jpg');
const bg4 = require('./bg_4.jpg');
const bg5 = require('./bg_5.jpg');

class BackgroundAssets {
  constructor() {
    this.backgrounds = [bg1, bg2, bg3, bg4, bg5];
  }

  backgrounds() {
    return this.backgrounds;
  }

  getRandomBg() {
    return this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)];
  }

}

const backgroundAssets = new BackgroundAssets();

export default backgroundAssets;
