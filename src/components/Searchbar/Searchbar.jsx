import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    q: '',
  };

  onChange = event => {
    this.setState({ q: event.target.value });
  };

  render() {
    return (
      <div>
        <header className={css.searchbar}>
          <form className={css.searchForm} onChange={this.onChange}>
            <button type="submit" className={css.searchFormButton}>
              <span className={css.searchFormButtonLabel}>Search</span>
            </button>

            <input
              className={css.searchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
