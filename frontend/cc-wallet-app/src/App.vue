<template>
  <div>
    <bannerLogo/>
    <Header/>
    <div id="container">
    <bankReleasePainel />
    <resumePainel />
    </div>
  </div>
</template>

<script>
import BankReleasePainel from './components/bankReleasePainel.vue'
import ResumePainel from './components/resumePainel.vue'
import BannerLogo from './components/bannerLogo.vue'
import Header from './components/header.vue'

export default {
  name: 'App',
  components: { BannerLogo, Header, ResumePainel, BankReleasePainel}
}
</script>

<style>
@font-face {
  font-family: "padrão";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Bold.ttf);
}

body {
margin:0;
background-color: #dddddd;
}
#container {
  display: flex;
  padding: 20px;
}
</style>
