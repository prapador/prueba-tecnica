<template>
  <div class="container">
    <h1>Pregunta: {{ questions[this.numberQuestion].numberQuestion }}</h1>
    <h2>{{ questions[this.numberQuestion].question }}</h2>

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
      <p v-if="showCorrectAnswer == true">👍</p>
      <p v-if="showCorrectAnswer == false">
        👎 La respuesta correcta es
        {{ questions[this.numberQuestion].correctAnswer }}
      </p>
    </div>

    <!-- Siguiente -->
    <button
      v-if="answered.length != questions.length"
      class="btn btn-info"
      @click="nextButton"
      :disabled="blockButtonNext"
    >
      Siguiente
    </button>

    <router-link
      v-if="answered.length == questions.length"
      :disabled="blockButtonNext"
      to="/results"
      class="btn btn-info"
    >
      Finalizar
    </router-link>
    <p>{{ answered }}</p>
    <hr />
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: (this.answered.length/this.questions.length) * 100  + '%'}"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ (this.answered.length/this.questions.length) * 100 }}%
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Questions",

  data() {
    return {
      test: "test",
      nextbuttonBlock: true,
      answersbuttonBlock: false,
      showCorrectAnswer: null,
      numberQuestion: 0,
    };
  },

  methods: {
    checkAnswer(e) {
      if (
        e.target.value !== this.questions[this.numberQuestion].correctAnswer
      ) {
        this.answered.push(e.target.value);
        this.nextbuttonBlock = false;
        this.answersbuttonBlock = true;
        this.showCorrectAnswer = false;
      } else {
        this.answered.push(e.target.value);
        this.nextbuttonBlock = false;
        this.answersbuttonBlock = true;
        this.showCorrectAnswer = true;
      }
    },

    nextButton() {
      this.numberQuestion++;
      this.nextbuttonBlock = true;
      this.answersbuttonBlock = false;
      this.showCorrectAnswer = null;
    },
  },

  computed: {
    blockButtonNext() {
      return this.nextbuttonBlock ? true : false;
    },
    blockButtonAsnwers() {
      return this.answersbuttonBlock ? true : false;
    },
    ...mapState(["answered", "questions", "userName"]),
  },
};
</script>

<style lang="scss">
.answer-button {
  margin-top: 1em;
}
</style>
