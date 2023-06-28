import chooseImage from '../components/ImageFunction';
import clouds from '../Image/clouds.jpg';
import sun from '../Image/sun.png';

test('Image testing', () => {
  expect(chooseImage(5)).toEqual(clouds);
  expect(chooseImage(22)).toEqual(sun);
});
