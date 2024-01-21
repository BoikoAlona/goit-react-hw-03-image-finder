import React, { Component } from 'react';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import { requestImagesByQuery } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { STATUSES } from './Utils/Constants';

export class App extends Component {
  state = {
    images: null,
    status: STATUSES.idle,
    error: null,
    q: '',
    page: 1,
  };

  onSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.q.value;
    this.setState({ q: searchValue });
  };

  fetchImagesByQuery = async q => {
    try {
      const images = await requestImagesByQuery(q);
      this.setState({ images });
    } catch (error) {
      this.setState(error);
    }
    requestImagesByQuery();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
      this.fetchImagesByQuery(this.state.q, this.state.page);
    }
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.status === STATUSES.pending && <Loader />}
        {this.state.status === STATUSES.error && <p>ERROR{this.state.error}</p>}
        {this.state.status === STATUSES.success &&
          Array.isArray(this.props.state.images) && (
            <ImageGallery images={this.state.images} />
          )}

        <Button onLoadMore={this.onLoadMore} />
      </div>
    );
  }
}
