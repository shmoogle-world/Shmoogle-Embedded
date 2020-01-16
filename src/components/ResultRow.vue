<template>
    <div class="shw-results-container">
        <div class="shw-result-div" v-for="(res, index) in data" v-bind:key="index">
            <div class="shw-original-position">
                Original Position: {{ res.originalResultIndex + 1 }}
            </div>
                <a :href="res.url" class="shw-title">{{ res.name }}</a>
                <a :href="res.url" class="shw-url">{{ res.url }}</a>
            <div class="shw-content">{{ res.snippet }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
}
</script>

<style>

.shw-results-container {
  width: 30vw;
  padding: 0 15px;
  height: 55vh;
  overflow: scroll;
  overflow-x: hidden;
}

.shw-result-div {
  margin-bottom: 30px;
  font-family: Arial, sans-serif;
}

.shw-content {
  font-size: 13px;
  color: #545454;
  line-height: 18.2px;
  margin-top: 1px;
}

.shw-original-position {
  font-family: arial;
  font-size: 12px;
  color: #000;
}

.shw-title {
  font-size: 18px;
  color: rgb(26, 13, 171);
  line-height: 22px;
  text-decoration: none;
}

.shw-url {
  font-size: 14px;
  color: rgb(0, 102, 33);
  line-height: 16px;
  margin-top: -2px;
  display: block;
  word-break: break-all;
}

@media only screen and (max-width: 765px) {
  .shw-results-container {
    width: 55vw;
    padding: 0 5px;
    height: 48vh;
  }
}
@media only screen and (max-height: 660px) {
    .shw-results-container {
        height: 48vh;
    }
}

</style>