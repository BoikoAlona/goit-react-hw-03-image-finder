import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
    return (
            <ul className={css.ImageGallery}>
                {Array.isArray(images) && images.map(image => {
                    return <ImageGalleryItem key={image.id} />;
                })}
            </ul>
    );
};
