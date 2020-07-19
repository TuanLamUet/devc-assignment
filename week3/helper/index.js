class Helper {
  static getUrl = (type) => {
    switch (type) {
      case 1:
        return 'http://pngimg.com/uploads/stone/stone_PNG13622.png';
      case 2:
        return 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png';
      case 3:
        return 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png';
      default:
        return null;
    }
  };
  static getName = (type) => {
    switch (type) {
      case 1:
        return 'Rock';
      case 2:
        return 'Paper';
      case 3:
        return 'Scissors';
      default:
        return null;
    }
  };
}

export default Helper;
