<template>
  <section class="about_section">
    <div 
      class="about_section_back_name_block"
      :style="{ transform: `translateY(${moveElem}px)`}"
    ></div>
    <div class="about_section_transition_block"></div>
    <div class="about_section_container">
      <div class="about_section_container_whatis">
        <div class="about_section_container_whatis_block">
          <div class="about_section_container_whatis_block_rectangle"></div>
          <div class="about_section_container_whatis_block_left">
            <div class="about_section_container_whatis_block_left_title">
              {{ this.$store.state.whatis.title }}
            </div>
            <div class="about_section_container_whatis_block_left_text">
              {{ this.$store.state.whatis.text }}
            </div>
          </div>
          <div class="about_section_container_whatis_block_right">
            <Vue3Lottie 
              :animationData="animationJSON" 
              :height="144" 
              :width="144" 
              :loop="true"
              :speed="1"
              :autoPlay="true"
            />
          </div>
        </div>
      </div>
      <div class="about_section_container_whyis">
        <div class="about_section_container_whyis_running_line">
          <div class="about_section_container_whyis_running_line_inside_block"></div>
        </div>
        <div class="about_section_container_whyis_left"></div>
        <div class="about_section_container_whyis_right">
          <div class="about_section_container_whyis_right_title_block">
            <div class="about_section_container_whyis_right_title_block_text">
              {{ this.$store.state.whyis.title }}
            </div>
            <div class="about_section_container_whyis_right_title_block_delimetr"></div>
          </div>
          <div class="about_section_container_whyis_right_list_block">
            <div 
              class="about_section_container_whyis_right_list_block_reason"
              v-for="reason in this.$store.state.whyis.reasons" 
              :key="reason" 
            >
            <div class="about_section_container_whyis_right_list_block_reason_delimetr">
              <div class="about_section_container_whyis_right_list_block_reason_delimetr_dot"></div>
              <div class="about_section_container_whyis_right_list_block_reason_delimetr_line"></div>
            </div>
            <div class="about_section_container_whyis_right_list_block_reason_text">
              {{ reason }}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_section_transition_block_blue"></div>
  </section>
</template>

<script>

import animationJSON from '../../../assets/stylus_about.json'

export default {
  name: 'AboutSection',
  data(){
    return {
      animationJSON,
      beforePos: 0,
      moveElem: 60
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScrollAbout)
  },
  methods: {
    handleScrollAbout () {
      this.moveElem += (window.scrollY - this.beforePos)/6
      this.beforePos = window.scrollY
    }
  }
}
</script>

<style src="./About.sass" lang="sass"></style>


