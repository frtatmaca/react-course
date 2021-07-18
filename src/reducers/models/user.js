import StateUtils, { State } from "../../utils/stateUtils";

const DefaultUser = {
    user: {
        id: -1,
        name: "",
        surname: ""
    },
    toDos: []
};

export default class User extends State(DefaultUser) {
    setUser(value) {
        return StateUtils.createSuccessState(new User(value));
    }

    setToDos(todos) {
        return this.set("toDos", todos);
    }
}
