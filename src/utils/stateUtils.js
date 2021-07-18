import { Record } from "immutable";

const InitialState = {
  meta: {
    requested: false,
    ready: false,
    error: false
  }
};

const RequestedState = {
  meta: {
    requested: true,
    ready: false,
    error: false
  }
};

const SuccessState = {
  meta: {
    requested: false,
    ready: true,
    error: false
  }
};

const FailureState = {
  meta: {
    requested: false,
    ready: false,
    error: true
  }
};

function hasObjectState(obj) {
  return obj != null && obj.meta != null && obj.meta.ready != null && obj.meta.requested != null && obj.meta.error != null;
}

function checkState(state, checkState) {
  return (
    hasObjectState(state) &&
    state.meta.requested === checkState.meta.requested &&
    state.meta.ready === checkState.meta.ready &&
    state.meta.error === checkState.meta.error
  );
}

export default class StateUtils {
  static createInitialState(state) {
    return state.merge(InitialState);
  }

  static createRequestedState(state) {
    return state.merge(RequestedState);
  }

  static createSuccessState(state) {
    return state.merge(SuccessState);
  }

  static createFailureState(state) {
    return state.merge(FailureState);
  }
}

function DefaultState(defaultValues) {
  return Record({
    ...defaultValues,
    meta: {
      requested: false,
      ready: false,
      error: false
    }
  });
}

export function State(defaultValues) {
  const Defaults = DefaultState(defaultValues);

  return class extends Defaults {
    isInitial() {
      return checkState(this.toJS(), InitialState);
    }

    isRequested() {
      return checkState(this.toJS(), RequestedState);
    }

    isSuccess() {
      return checkState(this.toJS(), SuccessState);
    }

    isFailure() {
      return checkState(this.toJS(), FailureState);
    }
  };
}
