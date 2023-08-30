<template>
  <section class="footer_section">
    <div class="footer_section_container">
      <div class="footer_section_container_contacts_container">
        <div class="footer_section_container_contacts_container_block">
          <div class="footer_section_container_contacts_container_block_icon 
            footer_section_container_contacts_container_block_icon__address"></div>
          <div class="footer_section_container_contacts_container_block_text">
            <div class="footer_section_container_contacts_container_block_text_up">
              г. Москва, ул. Ленинградский пр-т, д. 35, стр. 1. 
            </div>
          </div>
        </div>
        <div class="footer_section_container_contacts_container_block">
          <div class="footer_section_container_contacts_container_block_icon 
            footer_section_container_contacts_container_block_icon__phone"></div>
          <div class="footer_section_container_contacts_container_block_text">
            <div class="footer_section_container_contacts_container_block_text_up">
              Бесплатно по России 
            </div>
            <div class="footer_section_container_contacts_container_block_text_down">
              8 (800) 444-17-88 
            </div>
          </div>
        </div>
        <div class="footer_section_container_contacts_container_block">
          <div class="footer_section_container_contacts_container_block_icon 
            footer_section_container_contacts_container_block_icon__email"></div>
          <div class="footer_section_container_contacts_container_block_text">
            <div class="footer_section_container_contacts_container_block_text_up">
              По всем вопросам 
            </div>
            <div class="footer_section_container_contacts_container_block_text_down">
              info@housetech-it.ru 
            </div>
          </div>
        </div>
        <div class="footer_section_container_contacts_container_popup_btn">
          <span>Заказать проект</span>
          <div class="footer_section_container_contacts_container_popup_btn_dop_img"></div>
        </div>
      </div>
      <div class="footer_section_container_links">
        <Links 
          v-for="links in this.$store.state.links"
          :key="links.title"
          :links="links"
        />
      </div>
      <div class="footer_section_container_labels">
        <div class="footer_section_container_labels_block footer_section_container_labels_block_first">
          <div class="footer_section_container_labels_block_line"></div>
          <div class="footer_section_container_labels_block_text_block">
            <div class="footer_section_container_labels_block_text_block_text">
              {{ `Весь контент этого сайта (изображения, видеоролики, тексты и пр.) являются объектами авторских прав ООО "Хаус Тех". 
              Их полное или частичное распространение, изменение или копирование без предварительного письменного согласия ООО "Хаус Тех" запрещено.` }}
            </div>
            <div class="footer_section_container_labels_block_text_block_text">
              {{  `Любое нарушение авторских и смежных прав преследуется в соответствии с законодательством Российской Федерации, международными актами и 
              влечет наступление гражданской, административной и уголовной ответственности.` }}
            </div>
          </div>
        </div>
        <div class="footer_section_container_labels_block footer_section_container_labels_block_second">
          <div class="footer_section_container_labels_block_icon_ros_patent"></div>
        </div>
        <div class="footer_section_container_labels_block footer_section_container_labels_block_third">
          <div class="footer_section_container_labels_block_icon_min"></div>
        </div>
        <div class="footer_section_container_labels_block footer_section_container_labels_block_fourth">
          <div class="footer_section_container_labels_block_icon_artstation"></div>
        </div>
      </div>
      <div class="footer_section_container_end">
        <div class="footer_section_container_end_left">
          <div class="footer_section_container_end_left_logo"></div>
          <div class="footer_section_container_end_left_text">
            {{ "2009-2023© House Tech, Все права защищены" }}
          </div>
        </div>
        <div class="footer_section_container_end_right">
          <div class="footer_section_container_end_right_other_resourses">
            <div class="footer_section_container_end_right_other_resourses_icon"></div>
            <div class="footer_section_container_end_right_other_resourses_text_block">
              <div class="footer_section_container_end_right_other_resourses_text_block_text">
                {{ "Другие ресурсы:" }}
              </div>
              <a 
                href="https://housetech-it.ru/"
                class="footer_section_container_end_right_other_resourses_text_block_link">
                {{ "www.housetech-it.ae" }}
            </a>
            </div>
          </div>
          <div class="footer_section_container_end_right_links">
            <div class="footer_section_container_end_right_links_text">
              {{ "Связаться с нами" }}
            </div>
            <div class="footer_section_container_end_right_links_social_btn">
              <a href="" class="footer_section_container_end_right_links_social_btn_link footer_section_container_end_right_links_social_btn_link__telegram">
                <img src="../../../assets/social_telegram_header.svg">
              </a>
              <a href="" class="footer_section_container_end_right_links_social_btn_link footer_section_container_end_right_links_social_btn_link__skype">
                <img src="../../../assets/social_skype_header.svg">
              </a>
              <a href="" class="footer_section_container_end_right_links_social_btn_link footer_section_container_end_right_links_social_btn_link__whatsapp">
                <img src="../../../assets/social_whatsapp_header.svg">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_section_btn_call_conteiner">
      <div class="footer_section_btn_call_conteiner_block">
        <div class="footer_section_btn_call_conteiner_block_line_left">
          <Vue3Lottie 
            :animationData="animationJsonLeftLine" 
            :height="72" 
            :width="8" 
            :loop="true"
            :speed="1"
            :autoPlay="true"
          />
        </div>
        <div class="footer_section_btn_call_conteiner_block_line_right">
          <Vue3Lottie 
            :animationData="animationJsonRightLine" 
            :height="72" 
            :width="8" 
            :loop="true"
            :speed="1"
            :autoPlay="true"
          />
        </div>
      </div>
    </div>
    <div 
      class="footer_section_arrow_top"
      @click="scrollToTop"
    >
      <div class="footer_section_arrow_top_arrow"></div>
      <div class="footer_section_arrow_top_arrow_hidden"></div>
    </div>
  </section>
</template>

<script>

import Links from './Links/Links.vue'

import animationJsonLeftLine from '../../../assets/stylus_call_btn_left'
import animationJsonRightLine from '../../../assets/stylus_call_btn_right'

export default {
  name: 'FooterSection',
  components: {
    Links
  },
  data() {
    return {
      animationJsonLeftLine,
      animationJsonRightLine
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style src="./Footer.sass" lang="sass"></style>


