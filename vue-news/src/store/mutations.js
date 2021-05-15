export default {
    // 첫번째 인자는 state 
    SET_NEWS: function (state, news) {
        state.news = news;
    },
    SET_JOBS: function (state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK: function (state, ask) {
        state.ask = ask;
    },
    SET_USER: function (state, user) {
        state.user = user;
    },
    SET_ITEM: function (state, item) {
        state.item = item;
    },
}