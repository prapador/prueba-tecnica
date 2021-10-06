<template>
  <div class="container animate__animated animate__fadeIn" id="main-container">
    <h1 class="h1-questions">Pregunta: {{ questions[this.numberQuestion].numberQuestion }}</h1>
    <h2>{{ questions[this.numberQuestion].question }}</h2>

    <div
      v-if="questions[this.numberQuestion].type == 'buttonOptions'"
      class="possibleAnswers d-flex flex-column align-items-center"
    >
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

    <div v-else>
      <div class="input-group mb-3">
        <input
          :disabled="clickedAcceptF"
          v-model="answerTextBox"
          type="text"
          class="form-control"
          placeholder="Responde..."
          aria-label="Responde..."
          aria-describedby="button-addon2"
        />
        <button
          :disabled="blockButtonTextBox"
          @click="checkAnswerTextBox"
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Aceptar
        </button>
      </div>
    </div>

    <!-- Resolución -->
    <div class="result fs-3">
      <p v-if="showCorrectAnswer == true">👍</p>
      <p v-if="showCorrectAnswer == false">
        👎 La respuesta correcta es
        {{ questions[this.numberQuestion].correctAnswer }}
      </p>
    </div>

    <router-link
      v-if="answered.length == questions.length"
      :disabled="blockButtonNext"
      to="/results"
      class="btn btn-info"
    >
      Finalizar
    </router-link>
  </div>
  <hr />
  <!-- Siguiente -->
  <button
    v-if="answered.length != questions.length"
    class="btn btn-info"
    @click="nextButton"
    :disabled="blockButtonNext"
  >
    Siguiente
  </button>
  <hr />
  <div class="progress container">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{
        width: (this.answered.length / this.questions.length) * 100 + '%',
      }"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {{ (this.answered.length / this.questions.length) * 100 }}%
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Questions",

  data() {
    return {
      test: "test",
      nextbuttonBlock: true,
      answersbuttonBlock: false,
      showCorrectAnswer: null,
      numberQuestion: 0,
      answerTextBox: "",
      buttonTextBox: true,
      clickedAccept: false,
    };
  },

  methods: {
    checkAnswer(e) {
      // Reset transition
      let mainContainer = document.getElementById("main-container");
      mainContainer.classList.remove("animate__fadeIn");

      if (
        e.target.value !== this.questions[this.numberQuestion].correctAnswer
      ) {
        this.answered.push(e.target.value);
        this.nextbuttonBlock = false;
        this.answersbuttonBlock = true;
        this.showCorrectAnswer = false;
        mainContainer.classList.remove("animate__fadeIn");
      } else {
        this.answered.push(e.target.value);
        this.nextbuttonBlock = false;
        this.answersbuttonBlock = true;
        this.showCorrectAnswer = true;
        mainContainer.classList.remove("animate__fadeIn");
      }
    },
    checkAnswerTextBox() {
      let mainContainer = document.getElementById("main-container");
      mainContainer.classList.remove("animate__fadeIn");
      this.answered.push(this.answerTextBox.toLowerCase().trim())
      this.nextbuttonBlock = false;
      this.clickedAccept = true;
      if (
        this.questions[this.numberQuestion].correctAnswer !==
        this.answered[this.numberQuestion].toLowerCase().trim()
      ) {
        this.showCorrectAnswer = false;
        mainContainer.classList.remove("animate__fadeIn");
      } else {
        this.showCorrectAnswer = true;
        mainContainer.classList.remove("animate__fadeIn");
      }
    },

    nextButton() {
      // Reset transition
      let mainContainer = document.getElementById("main-container");
      mainContainer.classList.add("animate__fadeIn");

      this.numberQuestion++;
      this.nextbuttonBlock = true;
      this.answersbuttonBlock = false;
      this.clickedAccept = false;
      this.answerTextBox = "";
      this.showCorrectAnswer = null;
    },
    ...mapActions(["cleanData"]),
  },

  computed: {
    blockButtonNext() {
      return this.nextbuttonBlock ? true : false;
    },
    blockButtonAsnwers() {
      return this.answersbuttonBlock ? true : false;
    },
    blockButtonTextBox() {
      return this.answerTextBox.trim() === "" || this.clickedAccept == true
        ? true
        : false;
    },
    clickedAcceptF() {
      return this.clickedAccept ? true : false;
    },
    ...mapState(["answered", "questions", "userName"]),
  },

  created() {
    this.cleanData();
  },
};
</script>

<style lang="scss">
.answer-button {
  margin-top: 1em;
}

.h1-questions {
  margin-bottom: 2rem;
}

.answer-button {
  width: 20rem;
  height: 3.5rem;
  flex-wrap: wrap;
}
</style>
