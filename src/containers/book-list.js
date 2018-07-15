import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        console.log('books: ', this.props.books);

        return this.props.books.map(book =>
            <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
            </li>
        );
    }

    render() {
        //console.log(this.props.asdf);
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) { //this is the application state
    // whatever is returned will show up as props
    // inside of BookList

    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the Booklist container
// we can call the selectBooks like: this.props.selectBooks in this container, and it'll call the action creator
// The purpose of this is to get what returns from selectBook and flows through all reducers for
function mapDispatchToProps(dispatch) {
    // whenever selectBool is called, a result should be passed
    // to all of out reducers
    // bind action creator to dispatch and pass to all different reducers


    return bindActionCreators({ selectBook: selectBook }, dispatch);
    // the second selectBook is the action creator we import
    //in line 13 we can call it by props
}

// promoteBook from a component to a contaier -- it needs to know
// about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);