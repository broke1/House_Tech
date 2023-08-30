<template>
  <Header />
  <Menu />
  <About />
  <Stages />
  <Order />
  <Footer />
  <article 
    class="universal_section_left_line"
    :style="{ transform: `translateY(-${moveLeft}px)`}"
  >
    <img src="../../assets/big_line_left.svg">
  </article>
  <article 
    class="universal_section_right_line"
    :style="{ transform: `translateY(-${moveRight}px)`}"
  >
    <img src="../../assets/big_line_right.svg">
  </article>
</template>

<script>

import Header from './Header/Header.vue'
import Menu from './Menu/Menu.vue'
import About from './About/About.vue'
import Stages from './Stages/Stages.vue'
import Order from './Order/Order.vue'
import Footer from './Footer/Footer.vue'

export default {
  name: 'UniversalPage',
  components: {
    Header,
    Menu,
    About,
    Stages,
    Order,
    Footer
  },
  data() {
    return {
      beforePos: 0,
      moveLeft: 0,
      moveRight: 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.moveLeft += (window.scrollY - this.beforePos)/6
      this.moveRight += (window.scrollY - this.beforePos)/4
      this.beforePos = window.scrollY
    }
  }
}
</script>

<style src="./UniversalPage.sass" lang="sass"></style>


