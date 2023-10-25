const fs = require('fs');
class ImageService {
  images: string[] = [];
  constructor() {
    const files = fs.readdirSync('../../public/images');
    console.log(files);
  }
}

const imageService = new ImageService();
export default imageService;
