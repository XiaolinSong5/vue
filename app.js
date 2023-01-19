const app = Vue.createApp({
    template: '<h1> hello {{firstName}}</h1>',
    data() {
        return {
            firstName: "John",
            lastNme: ''
        }
    }
});
app.mount('#app');
