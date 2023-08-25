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
    `,
    whatis: {
      title: "Что такое брендбук?",
      text: `Брендбук – это основополагающий документ, который задает стратегию и стандарты визуальной и вербальной коммуникации вашего бренда. Он представляет собой набор правил,
       руководств и рекомендаций, которые обеспечивают единообразие и качество восприятия вашей компании или продукта.
      `,
    },
    whyis: {
      title: "Зачем нужна разработка брендбука?",
      text: `Брендбук – это основополагающий документ, который задает стратегию и стандарты визуальной и вербальной коммуникации вашего бренда. Он представляет собой набор правил,
       руководств и рекомендаций, которые обеспечивают единообразие и качество восприятия вашей компании или продукта.
      `,
      reasons: [
        'Узнаваемость: поможет вам создать уникальный и привлекательный образ вашей компании.',
        'Единство: обеспечит единообразие во всех аспектах вашей коммуникации, включая логотипы, цвета, шрифты и стиль.',
        'Профессионализм: предоставит вам четкие руководства по использованию графических элементов и дизайна.',
        'Стратегия взаимодействия: поможет вам определить целевую аудиторию, ключевые сообщения и способы коммуникации.',
        'Доверие: формирование лояльности со стороны ваших клиентов и создание благоприятного впечатления о вашей компании.',
        'Взаимодействие с партнерами: вы сможете легко сотрудничать с партнерами и поставщиками, предоставляя им четкие инструкции и стандарты.'
      ]
    },
    stages: {
      title: 'Этапы разработки брендбука',
      stagesArr: [
        {
          title: 'Исследование и анализ',
          text: `Мы проведем тщательное исследование вашего бизнеса, целевой аудитории, конкурентов и рынка, чтобы лучше понять вашу уникальность и 
          определить стратегические направления для разработки брендбука.`,
          number: '.01'      
        },
        {
          title: 'Визуальные элементы',
          text: `Создадим логотипы, цветовую палитру, шрифты и графические элементы, которые будут отражать уникальность и ценности вашего бренда.`,
          number: '.02'      
        },
        {
          title: 'Вербальная коммуникация',
          text: `Разработаем руководство по использованию языка и стиля, которые должны быть согласованы с вашим брендом.`,
          number: '.03'      
        },
        {
          title: 'Руководство по применению',
          text: `Подготовим детальные рекомендации и примеры использования всех элементов бренда. Это включает правила для применения логотипов, 
          оформления документов, дизайна упаковки и многое другое.`,
          number: '.04'      
        }
      ],
      price: {
        title: "Стоимость разработки брендбука",
        text: `Цена нашей услуги будет зависеть от сложности проекта, объема работы и специфических требований вашего бренда. Мы готовы обсудить ваши потребности 
        и предложить индивидуальное коммерческое предложение, которое будет соответствовать вашим ожиданиям и бюджету.`
      },
    },
    order: {
      title: 'Заказать разработку фирменного брендбука',
      text: `Вы можете заказать разработку фирменного брендбука у нашей компании House Tech – это шаг к укреплению вашего бренда, 
      привлечению новых клиентов и успеху вашего бизнеса. Мы готовы приступить к работе немедленно. Оставьте заявку на сайте, 
      чтобы получить персональное предложение.`

    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
      
  }
})

export default store
