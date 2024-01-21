import css from './Modal.module.css';

export const Modal = () => {
  return (
    <div>
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
