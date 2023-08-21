<template>
  <Header />
  <Menu :menu="menu"/>
</template>

<script>

import Header from './Header/Header.vue'
import Menu from './Menu/Menu.vue'

export default {
  name: 'UniversalPage',
  components: {
    Header,
    Menu
  },
  data() {
    return {
      menu: [
        {
          name: "Главная",
          url: "#"
        },
        {
          name: "Портфолио",
          url: "#"
        },
        {
          name: "Услуги",
          url: "#",
          childs: [
            {
              name: "Разработка Брендбука",
              url: "#",
            },
            {
              name: "Разработка Логотипа",
              url: "#",
            }
          ]
        },
        {
          name: "Подробнее",
          url: "#",
          childs: [
            {
              name: "О нас",
              url: "#",
            },
            {
              name: "О компании",
              url: "#",
            }
          ]
        },
        {
          name: "Контакты",
          url: "#"
        }
      ]
    }
  }
}
</script>

<style src="./UniversalPage.sass" lang="sass"></style>


