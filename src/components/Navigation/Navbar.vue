<template>
  <header>
    <router-link class="title" to="/">Star Wars Heroes</router-link>
    <div class="menu">
      <router-link to="/">
        <div class="menu__item">Home</div>
      </router-link>
      <router-link to="/lovely">
        <div class="menu__item">Lovely</div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.8);
}
a {
  text-decoration: none;
  color: white;
}
.title {
  font-size: 20px;
  margin-left: 40px;
  cursor: pointer;
}
.title:hover {
  transition-duration: 300ms;
  transform: scale(110%);
  color: rgb(41, 243, 0);
}
.menu {
  display: flex;
  margin-right: 35px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;

}
.menu__item {
  padding-top: 18px;
  width: 90px;
  height: 40px;
  text-align: center;
  cursor: crosshair;
}
.menu__item:hover {
  border-radius: 15px;
  background-color: #990707;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition-duration: 300ms;
  transform: translateY(10%);
}
</style>
