<template>
  <div class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          Заявки
        </router-link>
      </li>
      <li>
        <router-link to="/">
          Помощь
        </router-link>
      </li>
      <li>
        <a href="#">
          Сообщения
        </a>
      </li>
      <li>
        <a href="#">
          Выход
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped>

</style>