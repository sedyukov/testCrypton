<template>
    <div class="hero-view__form">
      <input type="text" placeholder="Имя персонажа" class="hero-view__search" v-model="text">
      <div class="hero-view__gender-form">
        <input type="radio" id="one" value="All" v-model="picked">
        <label for="one">All</label>
        <br/>
        <input type="radio" id="two" value="Male" v-model="picked">
        <label for="one">Male</label>
        <br>
        <input type="radio" id="three" value="Female" v-model="picked">
        <label for="two">Female</label>
        <br>
      </div>
      <button class="hero-view__find-button" type="submit" @click="search()">Find</button>
      <button class="hero-view__clear-button" type="submit" @click="clear()">x</button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "SearchForm",
  data() {
    return {
      text: "",
      picked: "All"
    };
  },
  methods: {
    ...mapMutations(["setSearchText","setGender","setCurrentPage"]),
    ...mapGetters(["getLoading"]),
    data: () => ({
      text: '',
      picked: 'All',
      isLoaded: false,
      pages: 1,
    }),
    search() {
      if (this.getLoading()) return
      this.setCurrentPage(1)
      this.setSearchText(this.text)
      this.setGender(this.picked)
    },
    clear() {
      this.text = ''
      this.picked = 'All'
      this.setCurrentPage(1)
      this.setSearchText(this.text)
      this.setGender(this.picked)
    },
  }

}
</script>

<style scoped>
.hero-view__search {
  font-family: "Lato", sans-serif;
  width: 200px;
  height: 50px;
  font-size: 16px;
  border-bottom: solid black 1px;
  text-indent: 10px;
  text-decoration: none;
  outline: none;
}

.hero-view__gender-form {
  font-size: 15px;
  margin-top:10px;
  margin-left: 10px;
}
.hero-view__gender-form input {
  margin-right: 7px;
}

.hero-view__find-button {
  cursor: pointer;
  font-weight: 400;
  height: 40px;
  width: 60px;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-left: 10px;
}
.hero-view__clear-button {
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  border: solid black 1px;
  margin-left: 10px;
  width: 30px;
  padding: 5px 5px 8px 5px;
}
.hero-view__form{
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>