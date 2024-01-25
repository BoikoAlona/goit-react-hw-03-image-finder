import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyPress = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div>
        <div className={css.overlay} onClick={this.handleOverlayClick}>
          <div className={css.modal} onClick={this.props.openModal}>
            <img src={this.props.largeImageURL} alt={this.props.tags} />
          </div>
        </div>
      </div>
    );
  }
}
