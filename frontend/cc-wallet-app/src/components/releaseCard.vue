<template>
  <div class="releaseCard">
      <div class="buttons">
          <img v-if="type === 'entrada'" 
          src="../images/mais.png" 
          alt="Entrada" 
          class="releaseImage" />

          <img v-else-if="type === 'saida'" 
          src="../images/menos.png" 
          alt="gasto" 
          class="releaseImage" />

          <button  @click="removeRelease(release.id)" class="removeButton">
          <img src="../images/lixeira.png" alt="Remover lançamento">
          </button>
      </div>
      <div class="releaseDescription">
          <span v-if="type === 'entrada'" class="value entrada">R$ {{release.value}}</span>
          <span v-if="type === 'saida'" class="value saida">R$ {{release.value}}</span>
          <span>{{release.date}}</span>
          <span>{{release.description}}</span>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
name: "releaseCard",
methods: mapActions(["removeRelease"]),
props: {
type: String,
release: Object
},

}
</script>

<style scoped>

.releaseCard{
    display: flex;
    background-color: white;
    border-radius: 20px;
    font-family: "padrão";
    padding: 10px;
    margin-bottom: 10px;
}

.buttons{
    width: 50%;
}

.releaseImage{
    width: 50px;
}

.removeButton{
    border: none;
    outline: none;
    background-color: white;
}

.removeButton:hover {
    cursor: pointer
}

.removeButton img:active {
   filter: invert(100%);
}

.releaseDescription {
    width: 50%;
    float: right;
    text-align: right;
}

.releaseDescription span {
    display: block;
    font-size: 80%;
}

.value {
    font-family: "negrito";
    font-size: 200% !important;
}

.entrada {
    color:#22a7f0
}

.saida {
    color: red;
}

</style>