import "./todo.css";
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes, { element } from 'prop-types';
import _ from "lodash";
import Snackbar from '@material-ui/core/Snackbar';

import TodoView from './todo-view';
import * as userActions from '../../../reducers/actions/userActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.renderTodoList = this.renderTodoList.bind(this);
  }
    
  state = {
    todos: [],
    form: {
      todo: '',
    },
    isLoading: false,
    isSnackbarOpen: true,
    snackbarMessage: 'Hello React Course',
  }

  async componentWillReceiveProps(nextProps) {
  }

  async componentDidMount() {

  }

  onToggleSnackbar = ({ message = 'Error' }) => {
    this.setState(
      state => ({
        isSnackbarOpen: !state.isSnackbarOpen,
        snackbarMessage: message
      })
    )
  }

  onHandleChangeForm = event => {
    const { form } = this.state;

    form[event.target.name] = event.target.value;
    this.setState({ form });
  }

  onHandleSubmitForm = async event => {
    event.preventDefault();

    const { form } = this.state;
    const isFormEnabled = Object.values(form).every(item => item === '');
    if (isFormEnabled) {
      return;
    }
    
    try {
      const todos= this.state.todos;
      todos.push(form.todo);

      this.setState({ todos: todos });

    } catch (err) {

    }
  }

  renderTodoList() {
    return this.state.todos.map((element, index)=>{
      return <li>{element}<span className={"icon"} onClick={async () => {await this.deleteTask(index)}}><i className={"fas fa-trash"}></i></span></li>;
    }); 
  };

  deleteTask = async (index) => {
    const array = this.state.todos;
    array.splice(index, 1);
    
    this.setState({ todos: array });
  }

  render() {
    const { form, isLoading, isSnackbarOpen, snackbarMessage } = this.state;

    return (
      <div>

        <div>
          <div className="wrapper">
            <header>Todo App</header>

            <ul className={"todo-list"}>
              {this.renderTodoList()}
            </ul>

            <div className="footer">
              <button>Clear All</button>
            </div>
          </div>
        </div>

        <TodoView
          value={form}
          isLoading={isLoading}
          onChange={this.onHandleChangeForm}
          onSubmit={this.onHandleSubmitForm}
        />

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.onToggleSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }
          }
          message={<span id="message-id">{snackbarMessage}</span>}
        />
      </div>
    );
  }
}

TodoForm.propTypes = {
  history: PropTypes.object,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);