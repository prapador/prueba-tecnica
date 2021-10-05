<template>
  <div class="container">
    <h1>{{ questions[this.numberQuestion].question }}</h1>

    <div class="possibleAnswers d-flex flex-column">
      <!-- Repuesta 1 -->
      <button
        @click="checkAnswer"
        class="btn btn-secondary answer-button"
        :value="questions[this.numberQuestion].answer1"
        :disabled="blockButtonAsnwers"
      >
        {{ questions[this.numberQuestion].answer1 }}
      </button>

      <!-- Repuesta 2 -->
      <button
        @click="checkAnswer"
        class="btn btn-secondary answer-button"
        :value="questions[this.numberQuestion].answer2"
        :disabled="blockButtonAsnwers"
      >
        {{ questions[this.numberQuestion].answer2 }}
      </button>

      <!-- Repuesta 3 -->
      <button
        @click="checkAnswer"
        class="btn btn-secondary answer-button"
        :value="questions[this.numberQuestion].answer3"
        :disabled="blockButtonAsnwers"
      >
        {{ questions[this.numberQuestion].answer3 }}
      </button>
    </div>

    <!-- Resolución -->
    <div class="result">
      <p></p>
    </div>
    <button @click="next" :disabled="blockButtonNext">
      Siguiente
    </button>
  </div>
</template>

<script>
export default {
  name: "Questions",

  data() {
    return {
      test: "test",
      NextbuttonBlock: true,
      AnswersbuttonBlock: false,
      numberQuestion: 0,
      answered: [],
      questions: [
        {
          question: "Pregunta1",
          answer1: "Respuesta 1",
          answer2: "Respuesta 2",
          answer3: "Respuesta 3",
          correctAnswer: "Respuesta 3",
        },
        {
          question: "Pregunta2",
          answer1: "Respuesta 11",
          answer2: "Respuesta 22",
          answer3: "Respuesta 33",
          correctAnswer: "Respuesta 22",
        },
      ],
    };
  },

  methods: {
    checkAnswer(e) {
      if (
        e.target.value !== this.questions[this.numberQuestion].correctAnswer
      ) {
        this.answered.push(e.target.value);
        this.NextbuttonBlock = false;
        this.AnswersbuttonBlock = true
      } else {
        this.answered.push(e.target.value);
        this.NextbuttonBlock = false;
        this.AnswersbuttonBlock = true

      }
    },

    // TESTS
    next() {
      this.numberQuestion++;
        this.NextbuttonBlock = true;
        this.AnswersbuttonBlock = false;
    },
  },

  computed: {
    blockButtonNext() {
      return this.NextbuttonBlock ? true : false;
    },
    blockButtonAsnwers() {
      return this.AnswersbuttonBlock ? true : false;
    },
  },
};
</script>

<style lang="scss">
.answer-button {
  margin-top: 1em;
}
</style>
