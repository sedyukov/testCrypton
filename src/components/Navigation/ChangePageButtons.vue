<template>
  <div>
    <button @click="prevPage" v-show="isLeft" class="button-left"><</button>
    <button @click="nextPage" v-show="isRight" class="button-right">></button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ChangePageButtons",
  data: () => ({
    isLeft: false,
    isRight: false,
  }),
  mounted() {
    this.checkPages()
  },
  computed: {
    ...mapGetters({
      lovelyHeroes: 'getLovelyHeroes',
      count: "getHeroesCount",
      lovelyCount: "getLovelyHeroesCount",
      currentPage: "getCurrentPage",
      isLovely: "getOpenedLovely",
    }),
  },
  methods: {
    ...mapMutations(["incCurrentPage", "decCurrentPage", "setGender"]),
    ...mapGetters(["getLoading"]),
    prevPage() {
      if (this.getLoading()) return
      this.decCurrentPage()
    },
    nextPage() {
      if (this.getLoading()) return
      this.incCurrentPage()
    },
    checkPages() {
      if (this.isLovely){
        this.isRight = this.lovelyCount > 10 && this.currentPage < Math.ceil(this.lovelyCount / 10);
      }
      else {
        this.isRight = this.count > 10 && this.currentPage < Math.ceil(this.count / 10);
      }
      this.isLeft = this.currentPage !== 1;
    }
  },
    watch: {
      count(newValue, oldValue) {
        this.checkPages()
      },
      currentPage(newValue, oldValue) {
        this.checkPages()
      },
      lovelyCount(newValue, oldValue){
        this.checkPages()
      },
      isLovely(newValue, oldValue){
        this.checkPages()
      },
    },


}
</script>

<style scoped>
.button-left {
  cursor: pointer;
  position: fixed;
  padding: 20px;
  bottom: calc(50vh - 50px);
  left: 20px;
  background-color: black;
  color: white;
  font-size: 24px;
  border-radius: 4px;
}
.button-right {
  cursor: pointer;
  position: fixed;
  padding: 20px;
  bottom: calc(50vh - 50px);
  right: 20px;
  background-color: black;
  color: white;
  font-size: 24px;
  border-radius: 4px;

}
</style>