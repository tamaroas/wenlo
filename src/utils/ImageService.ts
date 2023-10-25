import imageList from './imagesList.json';

class ImageService {
  images: {
    [key: string]: string;
  } = {};
  constructor() {
    imageList.forEach(el => {
      this.images[el.substring(0,el.indexOf('.'))] = el;
    });
  }
}

const imageService = new ImageService()
console.log('one', imageService)

export default imageService;
