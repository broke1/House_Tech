import { createStore } from "vuex" 

const store = createStore({
  state: {
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
    ],
    breadcrumbs: [
      { name: "Главная",
        url: "#"
      },
      {
        name: "Услуги",
        url: "#"
      },
      {
        name: "Разработка брендбука",
        url: "#"
      },
    ],
    title: "Разработка брендбука",
    subtitle: `Мы специализируемся на создании эффективных и уникальных материалов для вашего бизнеса, 
    и готовы предложить вам наши профессиональные услуги в области разработки брендбука.
    `
  },
  mutations: {

  },
  actions: {

  },
  getters: {
      
  }
})

export default store
