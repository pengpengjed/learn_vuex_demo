import { createStore } from 'vuex';
import { CHANGE_INFO } from './mutation_types';

const store = createStore({
  state: () => ({
    counter: 0,
    name: 'coderwhy',
    level: 100,
    avatarURL: 'http://xxxxxx',
    friends: [
      { id: 111, name: 'why', age: 20 },
      { id: 112, name: 'kobe', age: 30 },
      { id: 113, name: 'james', age: 25 }
    ],

    // 服务器数据
    banners: [],
    recommends: []
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age;
      }, 0);
    },
    // 在改getters属性中, 获取其他的getters
    message(state, getters) {
      return `name:${state.name} level${state.level} friendTotalAge${getters.totalAge}`;
    },
    // getters是可以返回一个函数的, 调用这个函数可以传入参数(了解)
    getFriendById(state) {
      return (id) => state.friends.find((item) => item.id === id);
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    changeName(state, payload) {
      state.name = payload;
    },
    incrementLevel(state) {
      state.level++;
    },
    [CHANGE_INFO](state, newInfo) {
      state.level = newInfo.level;
      state.name = newInfo.name;
    },
    changeBanners(state, banners) {
      state.banners = banners;
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends;
    }
  },
  actions: {
    incrementAction(context) {
      console.log(context.commit); // 用于提交mutation
      console.log(context.getters); // getters
      console.log(context.state); // state
      context.commit('increment');
    },
    changeNameAciton(context, payload) {
      context.commit('changeName', payload);
    },
    fetchHomeMultidataAction(context) {
      // 1. 返回promise, 给Promise设置then
      /* fetch('http://123.207.32.32:8000/home/multidata').then(res => {
        res.json().then(data => {
          console.log(data)
        })
      }) */

      // 2.Promise链式调用
      /* fetch('http://123.207.32.32:8000/home/multidata').then((res) => {
        return res.json();
      }).then(data => {
        console.log(data)
      }) */

      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata');
        const data = await res.json();
        context.commit('changeBanners', data.data.banner.list);
        context.commit('changeRecommends', data.data.recommend.list);

        resolve('已完成', data);
      });
    }
  }
});

export default store;
