import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = hits => {
  console.log(hits);
  const hitsArr = hits.hits;
  console.log(hitsArr)
  return (
    <ul className={css.imageGallery}>
      {Array.isArray(hitsArr) &&
        hitsArr.map((el) => {
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
