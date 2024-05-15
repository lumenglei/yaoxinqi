<template>
  <dv-full-screen-container class="home">
    <div class="decoration"><img src="../assets/imgs/标题.png" alt="" /></div>
    <div class="main">
      <div></div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div></div>
      <div></div>
      <div>10</div>
    </div>
  </dv-full-screen-container>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/imgs/bg\(1\).png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 -19px;
  position: relative;

  .decoration {
    width: 100%;
    height: 100px;

    img {
      width: 100%;
    }
  }
}
.main {
  padding: 0 10px;
  height: calc(100vh - 60px);
  display: grid;
  grid-template:
    "a a a d d d d d e e e" 1fr
    "a a a d d d d d e e e" 1fr
    "a a a d d d d d f f f" 1fr
    "a a a d d d d d f f f" 1fr
    "b b b d d d d d f f f" 1fr
    "b b b d d d d d g g g" 1fr
    "b b b d d d d d g g g" 1fr
    "b b b d d d d d g g g" 1fr
    "b b b i i i j j h h h" 1fr
    "c c c i i i j j h h h" 1fr
    "c c c i i i j j h h h" 1fr
    /1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}
.main div {
  background-color: #23555388;
  color: white;
  border-radius: 10px;
  box-shadow: inset 1px 1px 20px 4px #4d9276;
  box-sizing: border-box;
}
.main div:nth-of-type(1) {
  grid-area: a;
  // border: 2px solid #436257;
  border-radius: 5px;
}
.main div:nth-of-type(2) {
  grid-area: b;
  // background-color: green;
}
.main div:nth-of-type(3) {
  grid-area: c;
  // background-color: #000;
}
.main div:nth-of-type(4) {
  grid-area: d;
  background-color: transparent;
  border: none;
  box-shadow: none;
  //  background-color: blue;
}
.main div:nth-of-type(5) {
  grid-area: e;
  // background-color: skyblue;
}
.main div:nth-of-type(6) {
  grid-area: f;
  // background-color: yellow;
}
.main div:nth-of-type(7) {
  grid-area: g;
  // background-color: pink;
}
.main div:nth-of-type(8) {
  grid-area: h;
  // background-color: orange;
}
.main div:nth-of-type(9) {
  grid-area: i;
  //  background-color: yellowgreen;
}
.main div:nth-of-type(10) {
  grid-area: j;
  // background-color: #1bd66c;
}
</style>
