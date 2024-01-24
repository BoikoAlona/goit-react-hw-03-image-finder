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
      <li key={this.props.id} className={css.ImageGalleryItem}>
        <img
          onClick={this.openModal}
          className={css.imageGalleryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {this.state.isModalOpen && (
          <Modal
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
            largeImageURL={this.props.largeImageURL}
            tags={this.props.tags}
          />)}
      </li>
    );
  }
}
