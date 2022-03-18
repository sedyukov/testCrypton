<template>
  <div>
    <SearchForm />
    <HeroesView :is-lovely="true"/>
    <ChangePageButtons />
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import HeroesView from "@/components/Hero/HeroesView";
import SearchForm from "@/components/Forms/SearchForm";
import ChangePageButtons from "@/components/Navigation/ChangePageButtons";
export default {
  components: {HeroesView, SearchForm, ChangePageButtons},

  methods: {
    ...mapMutations(["setOpenedLovely","setCurrentPage","setSearchText","setGender"]),
  },
  mounted() {
    this.setOpenedLovely();
    this.setSearchText(null);
    this.setGender("All");
    this.setCurrentPage(1);
  },
  computed: {
    ...mapGetters({
      currentPage: 'getCurrentPage',
      gender: 'getGender',
      searchText: 'getSearchText'
    }),

  },

};
</script>

<style scoped></style>
