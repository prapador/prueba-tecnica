<template>
  <div class="resultsList container animate__animated animate__flipInX">
    <div
      class="questions-header "
    >
      <h1>Estos son tus reultados, {{ userName }}</h1>
      <h2>Has fallado {{ errors }} preguntas</h2>
      <div class="header">
        <h1 class="line-1 anim-typewriter1">{{ verifyHuman }}</h1>
      </div>
    </div>
    <ol class="list-group list-group-numbered">
      <li
        v-for="(item, i) in answered"
        v-bind:key="item"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ questions[i].question }}</div>
          <p class="fw-bold answered"
            v-if="questions[i].correctAnswer === answered[i]"
            style="color: green;"
          >
            {{ answered[i] }}
          </p>
          <p v-else class="answered" style="color: red;">
            {{ answered[i] }}
          </p>
        </div>
        <span v-if="questions[i].correctAnswer === answered[i]">😍</span>
        <span v-else>😫</span>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Results",
  data() {
    return {
      errors: 0,
    };
  },

  computed: {
    ...mapState(["answered", "questions", "userName"]),
    verifyHuman() {
      return this.errors <= 5
        ? "Te daré una oportunidad..."
        : "Este es vuestro fin...";
    },
  },
  mounted() {
    for (let i = 0; i < this.answered.length; i++) {
      if (this.answered[i] != this.questions[i].correctAnswer) {
        this.errors++;
      }
    }
  },
};
</script>

<style lang="scss">
.answered {
  text-align: left;
}
</style>
