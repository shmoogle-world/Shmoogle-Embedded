<template>
    <div class="results-container">
        <div class="result-div" v-for="res of data" v-bind:key="res">
            <div class="original-position">
                Original Position: {{ res.originalResultIndex + 1 }}
            </div>
                <a :href="res.url" class="title">{{ res.name }}</a>
                <a :href="res.url" class="url">{{ res.url }}</a>
            <div class="content">{{ res.snippet }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    
}
</script>

<style>
.results-container {
  width: 30vw;
  padding: 0 15px;
  height: 54vh;
  overflow: scroll;
  overflow-x: hidden;
}

.result-div {
  margin-bottom: 30px;
  font-family: Arial, sans-serif;
}

.content {
  font-size: 13px;
  color: #545454;
  line-height: 18.2px;
  margin-top: 1px;
}

.original-position {
  font-family: arial;
  font-size: 12px;
  color: #000;
}

.title {
  font-size: 18px;
  color: rgb(26, 13, 171);
  line-height: 22px;
  text-decoration: none;
}

.url {
  font-size: 14px;
  color: rgb(0, 102, 33);
  line-height: 16px;
  /* white-space: nowrap; */
  margin-top: -2px;
  display: block;
  word-break: break-all;
}

</style>