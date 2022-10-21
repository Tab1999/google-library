import React from 'react';
import Carousel from 'nuka-carousel';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import './theme.css';

const banners = [
  'https://cdn.shopify.com/s/files/1/1603/7495/collections/home_library_den_category_pic_600x273_0c759cd9-0781-4a8b-a529-1e201251f3ee_1500x.png?v=1657717894',
  'https://c4.wallpaperflare.com/wallpaper/210/227/610/sofa-interior-pillow-library-wallpaper-preview.jpg',
  'https://c0.wallpaperflare.com/preview/726/139/644/bible-light-jesus-christ.jpg',
  
];

function Banner() {
  return (
 <div className="h-banner">
      <div className="h-banner__carousel">
        <Carousel
          autoplay
          autoplayReverse
          className="h-banner"
          renderCenterLeftControls={({ previousSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdiChevronLeft}
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdiChevronRight}
              onClick={nextSlide}
            />
          )}
          renderBottomCenterControls={() => null}
        >
          {banners.map((bannerSrc, index) => (
            <img id="ban_image" key={index} alt={`Banner ${index + 1}`} src={bannerSrc} />
          ))}
        </Carousel>
      </div>
     </div>
  );
}

export default Banner;
