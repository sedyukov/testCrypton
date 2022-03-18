<template>
  <div class="hero-view">
    <div class="hero-view__rows">
      <Hero v-for="hero in heroes" :hero=hero :key="hero.id"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import Hero from "@/components/Hero/Hero";
export default {
  name: "HeroesView",
  components: {
    Hero
  },
  data: () => ({
    heroes: [],
    heroes_tmp: [],
    count: 0,
  }),
  props: {
    isLovely: false
  },
  mounted() {
    this.setHeroes()
    this.search()
  },
  computed: {
    ...mapGetters({
      lovelyHeroes: 'getLovelyHeroes',
      currentPage: 'getCurrentPage',
      gender: 'getGender',
      text: 'getSearchText',
    }),
  },
  methods: {
    ...mapGetters(["getHeroes", "getOpenedLovely","getForGenders"]),
    ...mapMutations(["incCurrentPage", "decCurrentPage","setGender","setLovelyHeroesCount"]),
    ...mapActions(["fetchForGenders"]),
    search() {
      if(this.heroes.length && this.isLovely) {
        this.heroes = this.heroes_tmp
        if (this.text) this.heroes = this.heroes.filter(el => el.name.toLowerCase().includes(this.text.toLowerCase()))
        if (this.gender && this.gender !== "All") {
          this.heroes = this.heroes.filter(el => el.gender.toLowerCase() === this.gender.toLowerCase())
        }
        this.count = this.heroes.length;
        this.setLovelyHeroesCount(this.count)
        this.pagingLovely()
      }
      else {
        if (this.gender && this.gender !== "All") {
          this.heroes = this.heroes.filter(el => el.gender.toLowerCase() === this.gender.toLowerCase())
        }
      }
    },
    setHeroes() {
      if(!this.isLoaded) {
        if(this.isLovely) {
          this.heroes = this.lovelyHeroes;
        }
        else {

          this.heroes = this.getHeroes();
          this.heroes.forEach((el) => {
            el.id = this.makeId(el.url)
          })
        }
      }
      this.heroes_tmp = this.heroes;
      this.isLoaded = true;
    },
    pagingLovely() {
      if (this.count !== 0) {
        let startHero = (this.currentPage - 1) * 10
        let finishHero = startHero + 10;
        let tempHeroes = [];
        for (let i = startHero; i < finishHero; i++) {
          tempHeroes.push(this.heroes[i]);
          if (i === this.count - 1) break;
        }
        this.heroes = tempHeroes;
      }
    },
    makeId(url){
      const regex = /[^\d]/g;
      return Number(url.replace(regex, ''))
    },
  },
    watch: {
      lovelyHeroes (newValue, oldValue) {
        this.isLoaded = false;
        this.setHeroes()
        this.search()
      },
      currentPage(newValue, oldValue) {
        this.isLoaded = false;
        this.setHeroes()
        this.search()
      },
      gender(newValue, oldValue) {
        this.isLoaded = false;
        this.setHeroes()
        this.search()
      },
      text(newValue, oldValue) {
        this.isLoaded = false;
        this.setHeroes()
        this.search()
      },
    },

};
</script>

<style scoped>
.hero-view__rows {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
