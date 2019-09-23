<template>
  <div id="app" v-cloak @drop.prevent="addFile" @dragover.prevent="dragFile">
    <div style="visibility:hidden; opacity:0" id="dropzone">
      <div id="textnode">Drop files to .add</div>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Info msg=".add Online Converter" />
    <div id="list">
      <ul>
        <li v-for="file in files">
          {{ file.name }} ({{ file.size | kb }} kb)
          <button @click="removeFile(file)" title="Remove">X</button>
        </li>
      </ul>
    </div>
    <button :disabled="uploadDisabled" @click="upload">Upload</button>
  </div>
</template>


<script>
import Info from "./components/Info.vue";

export default {
  name: "app",
  components: {
    Info
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
  mounted() {
    //var self = this;
    window.addEventListener("dragenter", function(e) {
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
  },
  methods: {
    dragFile() {
      document.querySelector("#dropzone").style.visibility = "";
      document.querySelector("#dropzone").style.opacity = 1;
      document.querySelector("#textnode").style.fontSize = "48px";
    },
    alertMessage() {
      alert(this.message);
    },
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      [...droppedFiles].forEach(f => {
        this.files.push(f);
      });
      //eslint-disable-next-line
      console.log(droppedFiles);
    },
    removeFile(file) {
      this.files = this.files.filter(f => {
        return f != file;
      });
    },
    upload() {
      let formData = new FormData();
      this.files.forEach((f, x) => {
        formData.append("file" + (x + 1), f);
      });

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(res => {
          //eslint-disable-next-line
          console.log("done uploading", res);
          this.files = [];
        })
        .catch(e => {
          //eslint-disable-next-line
          console.error(JSON.stringify(e.message));
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div#list {
  list-style-type: circle;
  font-weight: bold;
  background-color: lightgray;
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
