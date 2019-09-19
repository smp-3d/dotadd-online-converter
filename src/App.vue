<template>
  <div id="app" v-cloak @drop.prevent="addFile" @dragover.prevent>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Info msg=".add Online Converter" />
    <ul>
      <li v-for="file in files">
        {{ file.name }} ({{ file.size | kb }} kb)
        <button @click="removeFile(file)" title="Remove">X</button>
      </li>
    </ul>
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
  methods: {
    alertMessage() {
      alert(this.message);
    },
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      [...droppedFiles].forEach(f => {
        this.files.push(f);
      });
      //eslint-disable-next-line
      console.log(droppedFiles);
    },
    removeFile(file){
      this.files = this.files.filter(f => {
        return f != file;
      });      
    },
    upload() {
      
      let formData = new FormData();
      this.files.forEach((f,x) => {
        formData.append('file'+(x+1), f);
      });
      
      fetch('https://httpbin.org/post', {
        method:'POST',
        body: formData
      })
      .then(res => res.json())
      .then(res => {
        //eslint-disable-next-line
         console.log('done uploading', res);
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
</style>
