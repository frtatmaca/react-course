import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  container: {
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px ${theme.margin}px`,
    width: 450,
    borderRadius: 6,
    margin: '0 auto',
  },
  button: {
    borderColor: theme.palette.primary.main,
    marginTop: theme.margin,
  },
  forgotContainer: {
    textAlign: 'center',
    marginTop: theme.margin * 2,
  },
});

const TodoView = ({ value, isLoading, onChange, onSubmit, classes }) => {
  const isFormEnabled = Object.values(value).every(item => item !== '');
  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <TextField
        label="Todo"
        value={value.job}
        name="todo"        
        onChange={onChange}
        margin="normal"
        fullWidth        
      />      
      <Button
        onClick={onSubmit}
        variant="outlined"
        color="primary"
        fullWidth
        className={classes.button}
        disabled={!isFormEnabled}
        type="submit"
      >
        {isLoading ? <CircularProgress size={20} /> : 'Add Todo'}
      </Button>
    </form>
  );
};

TodoView.propTypes = {
  value: PropTypes.object,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(TodoView);
