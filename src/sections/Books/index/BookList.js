import React from 'react';
import { connect } from 'react-redux';
import { selectBook, bookSearch } from '../actions/books';
import SearchForm from './SearchForm';
import CommonList from './CommonList';
import CoverGallery from './CoverGallery';
import booksSource from '../sources/booksSource';
import { filterObjListByQuery } from '../../../lib/filters';

const BookList = (props) => (
  <main className='main'>
    <h2 className='main__title'>Books</h2>

    <SearchForm query={props.query} onSearch={props.bookSearch} />

    {props.viewMode === 'list' && (
      <CommonList
        books={props.books}
        activeID={props.activeID}
        onBookSelect={props.selectBook}
      />
    )}
    {props.viewMode === 'gallery' && (
      <CoverGallery
        books={props.books}
        activeID={props.activeID}
        onBookSelect={props.selectBook}
      />
    )}
  </main>
);

const mapStateToProps = (state) => ({
  activeID: state.bookActive && state.bookActive.id,
  viewMode: state.booksView,
  books: filterObjListByQuery(booksSource, state.bookSearch, 'title, author, year'),
  query: state.bookSearch,
});

export default connect(mapStateToProps, { selectBook, bookSearch })(BookList);
