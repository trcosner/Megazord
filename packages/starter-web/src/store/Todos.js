import { extendObservable, action } from 'mobx';

class Todos {
    constructor() {
        extendObservable(this, {
            count: 0,
            todos: [],
            increment: action(() => {
                this.count++;
            })
        });
    }
}

export default Todos;
