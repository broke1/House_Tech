<template>
  <section class="order_section">
    <div class="order_section_transition_block"></div>
    <div class="order_section_container">
      <div class="order_section_container_title">
        {{ this.$store.state.order.title }}
      </div>
      <div class="order_section_container_underline"></div>
      <div class="order_section_container_text">
        {{ this.$store.state.order.text }}
      </div>
      <div class="order_section_container_popup_btn">
        Заказать
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'OrderSection'
}
</script>

<style src="./Order.sass" lang="sass"></style>


