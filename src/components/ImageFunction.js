import clouds from '../Image/clouds.jpg';
import sun from '../Image/sun.png';

const chooseImage = (degree) => {
  if (degree > 20) {
    return sun;
  }

  return clouds;
};

export default chooseImage;
