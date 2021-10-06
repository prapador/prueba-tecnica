import { createStore } from "vuex";

export default createStore({
  state: {
    userName: "",
    answered: [],
    questions: [
      {
        numberQuestion: "1",
        question: "Pregunta1",
        answer1: "Respuesta 1",
        answer2: "Respuesta 2",
        answer3: "Respuesta 3",
        correctAnswer: "Respuesta 3",
      },
      {
        numberQuestion: "2",
        question: "Pregunta2",
        answer1: "Respuesta 11",
        answer2: "Respuesta 22",
        answer3: "Respuesta 33",
        correctAnswer: "Respuesta 22",
      },
      {
        numberQuestion: "2",
        question: "Pregunta2",
        answer1: "Respuesta 11",
        answer2: "Respuesta 22",
        answer3: "Respuesta 33",
        correctAnswer: "Respuesta 22",
      },
      {
        numberQuestion: "2",
        question: "Pregunta2",
        answer1: "Respuesta 11",
        answer2: "Respuesta 22",
        answer3: "Respuesta 33",
        correctAnswer: "Respuesta 22",
      },
      {
        numberQuestion: "2",
        question: "Pregunta2",
        answer1: "Respuesta 11",
        answer2: "Respuesta 22",
        answer3: "Respuesta 33",
        correctAnswer: "Respuesta 22",
      },
    ],
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload
    },
    cleanData(state) {
      state.answered = []
    }
  },

  actions: {
    setUserName({ commit }, name) {
      commit("setUserName", name)
    },
    cleanData({commit}) {
      commit('cleanData')
    }
  },
  modules: {},
});
