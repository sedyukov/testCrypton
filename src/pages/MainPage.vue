<template>
  <div>
    <SearchForm />
    <Loader v-if="loading"/>
    <HeroView :is-lovely="false" v-else />
    <ChangePageButtons />
  </div>
</template>

<script>
import HeroView from "@/components/Hero/HeroesView";
import {mapGetters, mapMutations} from "vuex";
import Loader from "@/components/Elements/Loader";
import SearchForm from "@/components/Forms/SearchForm";
import ChangePageButtons from "@/components/Navigation/ChangePageButtons";
export default {
  name: "MainPage",
  data: () => ({
    heroes: [],
    loading: true,
  }),
  components: {
    SearchForm,
    Loader,
    HeroView,
    ChangePageButtons
  },
  computed: {
    ...mapGetters({
      currentPage: 'getCurrentPage',
      gender: 'getGender',
      searchText: 'getSearchText'
    }),
  },
  mounted() {
    this.loading = true
    this.setClosedLovely();
    this.setLoading(true);
    this.setCurrentPage(1);
    this.updateHeroes()
  },
  methods: {
    ...mapMutations(["setClosedLovely", "setLoading","setCurrentPage"]),
    updateHeroes() {
       this.$store.dispatch('fetchHeroes', {page: this.currentPage, gender: this.gender, search: this.searchText})
          .finally(() => {
            this.loading = false
            this.setLoading(false);
          });
    }
  },
  watch: {
    currentPage(newValue, oldValue) {
      this.loading = true;
      this.updateHeroes();
    },
    gender(newValue, oldValue) {
      this.loading = true;
      this.updateHeroes();
    },
    searchText(newValue, oldValue) {
      this.loading = true;
      this.updateHeroes();
    }
  },
};
</script>

<style scoped></style>
