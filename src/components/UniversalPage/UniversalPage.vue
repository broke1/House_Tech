<template>
  <div class="universal_section">
    <div class="universal_section_main_layer">
      <Header />
      <Menu />
      <About />
      <Stages />
      <Order />
      <Footer />
      <!-- <article class="universal_section_left_line">
        <img src="../../assets/big_line_left.svg">
      </article>
      <article class="universal_section_right_line">
        <img src="../../assets/big_line_right.svg">
      </article> -->
    </div>
    <article class="universal_section_left_line_layer">
      <div class="universal_section_left_line_layer_line">
        <img src="../../assets/big_line_left.svg">
      </div>
    </article>
    <article class="universal_section_right_line_layer">
      <div class="universal_section_right_line_layer_line">
        <img src="../../assets/big_line_right.svg">
      </div>
    </article>
  </div>
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
  }
}
</script>

<style src="./UniversalPage.sass" lang="sass"></style>


