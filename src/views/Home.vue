<template>
  <div class="home">
    <div class="main container">
      <div class="row">
        <div class="col-md-6">
          <h2>Hola Humano,</h2>
          <p>
            Como ya sabes, mi nombre es LOM. Hoy tienes una oportunidad para
            recuperar la raza humana. Aprovéchala bien ¿Estás preparado?
          </p>

          <p>
            Antes de nada, déjame preguntarte tu nombre, sólo por recordar al
            que tuvo la oportunidad de salvar a la humanidad...
          </p>
        </div>

        <div class="col-md-6 px-md-5 mt-5 mt-md-0 align-self-center">
          <div class="mb-3">
            <label for="userName" class="d-block">Tu nombre, humano</label>
            <input
              v-model="userName"
              type="text"
              id="userName"
              class=""
              placeholder="Nombre..."
              aria-label="Nombre..."
              aria-describedby="button-addon2"
            />
          </div>

          <router-link
            @click="acceptUserName(userName)"
            :class="{ disabled: disabledButtonVamos }"
            :disabled="true"
            to="/questions"
            class="btn btn-success"
          >
            Vamos
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {},

  data() {
    return {
      userName: "",
    };
  },

  methods: {
    ...mapActions(["setUserName"]),
    acceptUserName() {
      this.setUserName(this.userName);
    },
  },

  computed: {
    disabledButtonVamos() {
      return this.userName.trim() === "" ? true : false;
    },
  },
};
</script>

<style lang="scss">
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
