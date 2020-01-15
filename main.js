Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
        heroes: Array,
        columns: Array
    },
    data: function () {
        let sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredHeroes: function () {
            let sortKey = this.sortKey;
            let order = this.sortOrders[sortKey] || 1;
            let heroes = this.heroes;
            if (sortKey) {
                heroes = heroes.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return heroes
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        }
    }
});

var demo = new Vue({
    el: '#demo',
    data: {
        gridColumns: ['id', 'name','email', 'age'],
        gridData: [
            { id:1, name: 'Chuck Norris', email: 'norris@gmail.com', age: 55 },
            { id:2, name: 'Bruce Lee', email: 'lee@gmail.com', age: 60 },
            { id:3, name: 'Jackie Chan',email: 'chan@gmail.com', age: 80 },
            { id:4, name: 'Jet Li', email: 'li@gmail.com', age: 100 }
        ]
    }
});