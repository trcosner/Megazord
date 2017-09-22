import { types } from "mobx-state-tree"

const Todo = types.model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false)
});

const RootStore = types.model({
    todos: types.optional(types.map(Todo), {})
})