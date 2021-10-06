import { createStore } from "vuex";

export default createStore({
  state: {
    userName: "",
    answered: [],
    questions: [
      {
        numberQuestion: "1",
        question: "¿Alrededor de qué porcentaje de La Tierra está cubierta por agua antes de 'El Colapso'?",
        answer1: "50%",
        answer2: "70%",
        answer3: "60%",
        type: "buttonOptions",
        correctAnswer: "70%",
      },
      {
        numberQuestion: "2",
        question: "El proceso por el que una célula se divide para formar dos células hijas se llama:",
        answer1: "Segregación",
        answer2: "Mitosis",
        answer3: "Meiosis",
        type: "buttonOptions",
        correctAnswer: "Mitosis",
      },
      {
        numberQuestion: "3",
        question: "Para los botánicos, el tomate es una:",
        type: 'textBox',
        correctAnswer: "fruta",
      },
      {
        numberQuestion: "4",
        question: "¿Por qué la cómoda se llama así, si la cama es mucho más cómoda?",
        answer1: "Es un término que viene de la época antigua",
        answer2: "Es un término que viene de la época moderna",
        answer3: "No lo sé",
        type: "buttonOptions",
        correctAnswer: "No lo sé",
      },
      {
        numberQuestion: "5",
        question: "¿cómo...se llásd%$90..........Not Found",
        answer1: "Sí",
        answer2: "No",
        answer3: "404",
        type: "buttonOptions",
        correctAnswer: "404",
      },
      {
        numberQuestion: "6",
        question: "Restaurando... ¿Cómo se llaman las partículas subatómicas con carga eléctrica negativa?",
        type: 'textBox',
        correctAnswer: "electrones",
      },
      {
        numberQuestion: "7",
        question: "¿Qué inventó Alfred Nobel, el que da nombre a los famosos premios?",
        answer1: "Dinamita",
        answer2: "Penicilina",
        answer3: "El agua",
        type: "buttonOptions",
        correctAnswer: "Dinamita",
      },
      {
        numberQuestion: "8",
        question: "¿Cuánto es la cuarta parte de la tercera parte?",
        answer1: "Un doceavo",
        answer2: "3/4 partes",
        answer3: "Un séptimo",
        type: "buttonOptions",
        correctAnswer: "Un doceavo",
      },
      {
        numberQuestion: "9",
        question: " ¿En qué país se habla mayoritariamente el idioma tagálog??",
        type: 'textBox',
        correctAnswer: "filipinas",
      },
      {
        numberQuestion: "10",
        question: "¿Seguro que eres humano?",
        answer1: "Sí",
        answer2: "Sí",
        answer3: "Sí",
        type: "buttonOptions",
        correctAnswer: "Sí",
      },
    ],
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload;
    },
    cleanData(state) {
      state.answered = [];
    },
  },

  actions: {
    setUserName({ commit }, name) {
      commit("setUserName", name);
    },
    cleanData({ commit }) {
      commit("cleanData");
    },
  },
  modules: {},
});
