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
        methods: {
            addTask: function() {
                this.tasks.push({
                    isDone: false,
                    title: this.newTask
                })
                this.newTask = ''
            }
        },
        computed: {
            remaining() {
                return this.tasks.filter(task => !task.isDone).length
            }
        }
    });
}