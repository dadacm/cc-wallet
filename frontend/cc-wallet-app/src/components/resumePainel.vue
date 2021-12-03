<template>
  <div id="resumePainel">
    <div class="totalResume">
      <span id="totalWord">Total:</span>
      <span class="total">R$ {{total}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
name:"resumePainel",
computed: mapGetters(["total"]),
methods: mapActions(["updateTotal"]),
created(){
this.updateTotal();
}
}
</script>

<style scoped>
#resumePainel {
  width: 60%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
}

.totalResume {
  text-align: right;
  padding: 10px;
}

.totalResume span {
display: block;
font-family: 'negrito';
}

#totalWord {
  font-size: 300%;
}

.total {
  font-size: 400%;
}

</style>