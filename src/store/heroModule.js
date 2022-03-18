import axios from "axios";

export default {
  state: {
    photos: [],
    heroes: [],
    lovelyHeroes: [],
    forGenders: [],
    heroesCount: 0,
    lovelyHeroesCount: 0,
    dialogVisible: false,
    currentPhoto: {},
    openedLovely: false,
    searchText: "",
    currentPage: 1,
    gender: "All",
    loading: false,
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setHeroes(state, payload) {
      state.heroes = payload;
    },
    setForGenders(state, payload) {
      state.forGenders = payload;
    },
    addForGenders(state,payload){
      state.lovelyHeroes = [...state.lovelyHeroes, payload]
    },
    setGender(state, payload) {
      state.gender = payload;
    },
    setHeroesCount(state,payload) {
      state.heroesCount = payload;
    },
    setLovelyHeroesCount(state,payload) {
      state.lovelyHeroesCount = payload;
    },
    addLovelyHero(state, payload) {
      state.lovelyHeroes = [...state.lovelyHeroes, payload]
    },
    deleteLovelyHero(state, payload) {
      state.lovelyHeroes = state.lovelyHeroes.filter(el => el.name !== payload)
    },
    setOpenedLovely(state){
      state.openedLovely = true
    },
    setClosedLovely(state){
      state.openedLovely = false
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    incCurrentPage(state) {
      state.currentPage++;
    },
    decCurrentPage(state) {
      state.currentPage--;
    },
    setSearchText(state, payload) {
      state.searchText = payload;
    },
  },
  getters: {
    getLoading(state) {
      return state.loading
    },
    getSearchText(state) {
      return state.searchText;
    },
    getHeroesCount(state) {
      return state.heroesCount;
    },
    getGender(state) {
      return state.gender;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getPhotos(state) {
      return state.photos;
    },
    getHeroes(state) {
      return state.heroes;
    },
    getLovelyHeroes(state) {
      return state.lovelyHeroes;
    },
    getForGenders(state) {
      return state.forGenders;
    },
    getLovelyHeroesCount(state) {
      return state.lovelyHeroesCount;
    },
    getOpenedLovely: (state) => state.openedLovely
  },
  actions: {
    async fetchHeroes(context, payload) {
      let url = "https://swapi.dev/api/people/"
      if (payload.search) url += `?search=${payload.search}&`;
      else url += "?";
      url += `page=${payload.page}`
      await axios
        .get(url)
        .then((response) => {
          context.commit("setHeroesCount", response.data.count)
          context.commit("setHeroes", response.data.results)
        });
    },
  },
};
