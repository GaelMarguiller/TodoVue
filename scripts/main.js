{
    "use strict";

    new Vue({
        el: 'main#app',
        data: {
            tasks: [
                {title: "Appeler la caf", isDone: true},
                {title: "Arseler la caf", isDone: false}
            ]
        },
        computed: {
            remaining() {
                return this.tasks.filter(task => !task.isDone).length
            }
        }
    });
}