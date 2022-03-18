<template>
  <div class="main-page">
    <Navbar class="navbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar";
import SearchForm from "@/components/Forms/SearchForm";
export default {
  name: "App",
  components: {
    SearchForm,
    Navbar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
}
button {
  border: none;
  outline: none;
  background-color: white;
  text-decoration: none;
}
input {
  border: none;
  outline: none;
  text-decoration: none;
}
.navbar {
  margin-bottom: 20px;
}
</style>
