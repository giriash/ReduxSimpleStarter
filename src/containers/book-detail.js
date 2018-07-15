import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>select a book to get started.</div>
        }
        return (
            <div>
                <h3>detail: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state) { //this is the application state
    return {
        book: state.activeBook // in reducers/index.js
    };
}

export default connect(mapStateToProps)(BookDetail);