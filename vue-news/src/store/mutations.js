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
    }
}