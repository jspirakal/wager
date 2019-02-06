<style scoped>
@font-face {
  font-family: "Esports";
  src: url("/css/fonts/EsportsFont.ttf");
}

#GameNav {
  display: inline-block;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

i {
  font-family: "Esports";
  font-size: 1.7em;
  margin-left: 50%;
  color: #007bff;
}

i:hover {
  color: gray;
  cursor: pointer;
}

i:active {
  color: red;
}

a {
  text-decoration: none !important;
}
</style>


<template>
 
</template>
<script>
export default {
  name: "GameNavigation",
  beforeMount() {
    var this_ = this;
    let AddStyle = document.createElement("link");
    AddStyle.type = "text/css";
    AddStyle.rel = "stylesheet";
    AddStyle.href = "css/EsportsFont.css";
    AddStyle.id = "auth";
    document.head.appendChild(AddStyle);
  }
};
</script>
