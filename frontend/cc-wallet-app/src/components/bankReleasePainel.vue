<template>
  <div id="bankReleasesPainel">
    <div id="releaseForm">
      <form @submit="save">
        <div id="releaseTypes">
        <input type="radio" name="tipo" id="entrada" value="entrada" v-model="type">
        <label for="entrada">Entrada</label>
        <input type="radio" name="tipo" id="saida" value="saida" v-model="type" >
        <label for="entrada">Saída</label>
        </div>
        <label for="value">Valor</label>
        <input type="number" v-model.number="value" min="0" step="0.01" name="value" required id="value">

        <label for="description">Descrição</label>
        <input type="text" name="description" v-model="description"  required id="description">
      <button>Adicionar</button>
      </form>
    </div>
    <div class="releaseArea">
      <releaseCard v-for="release in allReleases"
      v-bind:key="release.id"
      :type="release.value > 0 ? 'entrada' : 'saida'"
      :release="release"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ReleaseCard from './releaseCard.vue';
import Release from '../models/Releases';

export default {
name: "bankReleasePainel",
data: () => {
  return {
  type:"saida",
  value: undefined,
  description: ""
  }
},
components: { ReleaseCard },
computed: mapGetters(["allReleases"]),
methods : {
  ...mapActions(["saveRelease"]),
  save(event) {
    event.preventDefault();
    if(this.type === "saida"){
      this.value *= -1;
    }
    const release = new Release(this.value, this.description);
    this.saveRelease(release);
    this.cleanForm();
  },
  cleanForm() {
    this.type = "saida",
    this.value = undefined,
    this.description = ""
  }
}
}
</script>

<style scoped>
#bankReleasesPainel{
width: 40%;
padding: 10px;
}

#releaseForm {
background-color: white;
border-radius: 20px;
padding: 20px;
font-family: "padrão";
}

#value,
#description,
button {
  display: block;
  margin-bottom: 10px;
}

#value,
#description{
  height: 25px;
  font-family: "padrao";
  font-size: 100%;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
}

#releaseTypes {
  margin-bottom: 20px;
  font-family: "negrito";
  font-size: 110%;
}

#releaseTypes label {
margin-right: 15px;
}

#description {
  width: 70%;
}
button {
  background-color: rebeccapurple;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
}

.releaseArea{
  margin-top: 30px;
}
</style>