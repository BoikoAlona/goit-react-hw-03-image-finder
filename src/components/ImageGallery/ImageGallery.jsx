import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = hits => {
  const hitsArr = hits.hits;

  const uniqueArr = hitsArr.filter(
    (item, index, array) => array.indexOf(item) === index
  );

  return (
    <ul className={css.imageGallery}>
      {Array.isArray(uniqueArr) &&
        uniqueArr.map(el => {
          console.log(el.id);
          return (
            <ImageGalleryItem
              key={el.id}
              webformatURL={el.webformatURL}
              largeImageURL={el.largeImageURL}
              tags={el.tags}
            />
          );
        })}
    </ul>
  );
};
