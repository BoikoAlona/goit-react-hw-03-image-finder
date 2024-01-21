import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <li className={css.ImageGalleryItem}>
          <img
            onClick={this.openModal}
            className={css.imageGalleryItemImage}
            src={this.props.webformatURL}
            alt={this.props.tag}
          />

          <Modal
            isModalOpen={this.state.isModalOpen}
            onCloseModal={this.state.closeModal}
          >
            <img src={this.props.largeImageURL} alt={this.props.tag} />
          </Modal>
        </li>
      </div>
    );
  }
}
