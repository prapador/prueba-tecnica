<template>
  <h1>Resultados</h1>
  <div class="resultsList container">
    <ol class="list-group list-group-numbered">
      <li
        v-for="(item, i) in answered"
        v-bind:key="item"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ questions[i].question }} </div>
          {{ answered[i] }}
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

  computed: {
    ...mapState(["answered", "questions"]),
  },
};
</script>
