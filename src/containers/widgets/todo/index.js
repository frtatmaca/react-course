import "./todo.css";
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import _ from "lodash";
import Snackbar from '@material-ui/core/Snackbar';

import TodoView from './todo-view';
import * as userActions from '../../../reducers/actions/userActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    form: {
      todo: '',
    },
    isLoading: false,
    isSnackbarOpen: true,
    snackbarMessage: 'Hello React Course',
  };

  async componentDidMount() {
    const user = {
      user: {
        id: 1903,
        name: "fırat",
        surname: "atmaca"
      },
      toDos: []
    };

    await this.props.actions.setUser(user);
  }

  async componentWillReceiveProps(nextProps) {
    console.log("adasd: ", this.props.user);
  }

  onHandleChangeForm = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  onToggleSnackbar = ({ message = 'Error' }) => {
    this.setState(state => ({
      isSnackbarOpen: !state.isSnackbarOpen,
      snackbarMessage: message,
    }));
  };

  onHandleSubmitForm = async event => {
    event.preventDefault();

    const { form } = this.state;

    const isFormEmpty = Object.values(form).every(item => item === '');
    if (isFormEmpty) {
      return;
    }

    try {
      const todos = _.cloneDeep(this.props.user.toDos);
      todos.push(form.todo);

      await this.props.actions.setTodos(todos);
      await this.renderTodo(form.todo);
    } catch (error) {

    }
  };

  renderTodo = async () => {
    const todoList = document.querySelector(".todo-list");
    let newLiTag = "";
    this.props.user.toDos.forEach((element, index) => {
      newLiTag += `<li>${element}<span className="icon" onclick="deleteTask(${index})"><i className="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
  };

  onToggleSnackbar = ({ message = 'Error' }) => {
    this.setState(state => ({
      isSnackbarOpen: !state.isSnackbarOpen,
      snackbarMessage: message,
    }));
  };

  render() {
    const { form, isLoading, isSnackbarOpen, snackbarMessage } = this.state;

    return (
      <div>

        <div>
          <div class="wrapper">
            <header>Todo App</header>
            
            <ul class="todo-list">
            </ul>

            <div class="footer">
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
          }}
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
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...userActions,
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);