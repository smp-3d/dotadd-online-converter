<template>
  <div id="app" v-cloak @drop.prevent="addFile" @dragover.prevent="dragFile">
    <div>
    <div style="visibility:hidden; opacity:0" id="dropzone">
      <div id="textnode">Drop files to .add</div>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" width="100px"/>
    <FileList ref="files"/>
    <Info msg=".add Online Converter"/>
    <md-button :disabled="uploadDisabled" @click="upload">Upload</md-button>
    </div>
  </div>
</template>


<script>
import Info from "./components/Info.vue";
import FileList from "./components/FileList";

export default {
  name: "app",

  components: {
    Info,
    FileList
  },

  data() {
    return {
      files: []
    };
  },

  computed: {
    uploadDisabled() {
      return this.files.length === 0;
    }
  },

  methods: {
    dragFile() {
      document.querySelector("#dropzone").style.visibility = "";
      document.querySelector("#dropzone").style.opacity = 1;
      document.querySelector("#textnode").style.fontSize = "48px";
    },
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;

      this.$refs.files.addFiles(...droppedFiles);
    },
    upload() {}
  },

  mounted() {
    //var self = this;
    window.addEventListener("dragenter", function(e) {
        e.preventDefault();
      document.querySelector("#dropzone").style.visibility = "";
      document.querySelector("#dropzone").style.opacity = 1;
      document.querySelector("#textnode").style.fontSize = "48px";
    });

    window.addEventListener("dragleave", function(e) {
      e.preventDefault();

      document.querySelector("#dropzone").style.visibility = "hidden";
      document.querySelector("#dropzone").style.opacity = 0;
      document.querySelector("#textnode").style.fontSize = "42px";
    });

    window.addEventListener("dragover", function(e) {
      e.preventDefault();
      document.querySelector("#dropzone").style.visibility = "";
      document.querySelector("#dropzone").style.opacity = 1;
      document.querySelector("#textnode").style.fontSize = "48px";
    });

    window.addEventListener("drop", function(e) {
      e.preventDefault();
      document.querySelector("#dropzone").style.visibility = "hidden";
      document.querySelector("#dropzone").style.opacity = 0;
      document.querySelector("#textnode").style.fontSize = "42px";
    });
  }
};
</script>

<style>
body {
  background-color: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  padding-top: 60px;
  background-color: #fff;
}
div#list {
  list-style-type: circle;
  font-weight: bold;
  margin: auto;
  width: 50%;
}
div#dropzone {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: visibility 175ms, opacity 175ms;
  display: table;
  text-shadow: 1px 1px 2px #000;
  color: #fff;
  background: rgba(0, 0, 0, 0.45);
  font: bold 42px "Avenir", Helvetica, Arial, sans-serif;
}
div#textnode {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  transition: font-size 175ms;
}
</style>
