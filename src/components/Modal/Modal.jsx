import css from './Modal.module.css';

export const Modal = ({ largeImageURL, tag }) => {
  return (
    <div>
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tag} />
        </div>
      </div>
    </div>
  );
};
