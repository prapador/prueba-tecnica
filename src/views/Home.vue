<template>
  <div class="home">
    <div class="header">
      <h1 class="line-1 anim-typewriter1">Loading system "Travel in time"</h1>
    </div>

    <div class="main container">
      <div class="row">
        <div class="col-md-6 animate__animated animate__flash">
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

        <div
          class="col-md-6 px-md-5 mt-5 mt-md-0 align-self-center animate__animated animate__flash"
        >
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
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {},

  data() {
    return {
      userName: "",
    };
  },

  methods: {
    ...mapActions(["setUserName", "cleanData"]),
    acceptUserName() {
      this.setUserName(this.userName);
    },
  },

  computed: {
    disabledButtonVamos() {
      return this.userName.trim() === "" ? true : false;
    },
    ...mapState(["answered"]),
  },

  created() {
    this.cleanData();
  },
};
</script>

<style lang="scss">
:root {
  --animate-duration: 800ms;
  --animate-delay: 3s;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.header {
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line-1 {
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
}

/* Animation */
.anim-typewriter1 {
  animation: typewriter 4s steps(44) 2s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 24em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(0, 0, 0, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
