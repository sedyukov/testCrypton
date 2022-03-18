<template>
  <div class="card">
    <img :src="image" alt="no img" class="card__image">
    <div class="card__panel" >
      <div class="card__info"> <strong>{{hero.name}}</strong>: {{homeworld}}</div>
      <div class="clickable" v-on:click="addToLovely">
        <ToggleLikeButton :name="hero.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LikeButton from "@/components/Elements/LikeButton";
import ToggleLikeButton from "@/components/Elements/ToggleLikeButton";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Photo",
  components: {LikeButton, ToggleLikeButton},
  data: () => ({
    homeworld: '',
    loading: true,
  }),
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  computed: {
    image: function () {
      return `https://starwars-visualguide.com/assets/img/characters/${this.hero.id}.jpg`
    },
  },
    methods: {
      ...mapMutations(["addLovelyHero", "deleteLovelyHero","setCurrentPage"]),
      ...mapGetters(["getLovelyHeroes"]),
      async setHomeWorld() {
        await axios
            .get(this.hero.homeworld)
            .then((response) => {
              this.homeworld = response.data.name;
            })
      },
      addToLovely(){
        this.setCurrentPage(1)
        const names = this.getLovelyHeroes().map(el => {return el.name})
        if (names.includes(this.hero.name)) {
          this.deleteLovelyHero(this.hero.name)
        }
        else this.addLovelyHero(this.hero)
      },
    },
  mounted() {
    this.setHomeWorld()
  },

}
</script>

<style scoped>
.card {
  flex-basis: 280px;
  flex-shrink: 0;
  height: 500px;
  margin-bottom: 30px;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
.card__panel {
  font-family: "Lato", sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
}
.card__image {
  max-width: 100%;
  width: 300px;
  height: auto;
}
.clickable {
  cursor: pointer;
}
</style>