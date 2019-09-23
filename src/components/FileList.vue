<template>
  <div class= "file-list">
    <ExportDialog ref="expdialog"></ExportDialog>
    <md-list>
      <md-list-item v-for="(file, index) in files" v-bind:key="file.lastModified">
        <FileListItem v-bind:add="file" v-bind:id="index" v-on:delete="doDelete" v-on:export="doExport"/>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>

import { Converter, ConvertableTextFile, ConverterOptions } from 'dotadd.toolset'
import FileListItem from './FileListItem'
import ExportDialog from "./ExportDialog";

export default {
  data() {
    return {
      files: [],
      filereader: new FileReader(),
      current_file_name: ""
    };
  },

  mounted(){

    let self = this;

    this.filereader.onload = (f) => {

        let results = Converter.convert_string([
            new ConvertableTextFile(self.current_file_name, f.target.result)
        ], 
        new ConverterOptions());

        results.results.forEach(r => {
          r._valid = r.valid();
        });

        results.incomplete_results.forEach(r => {
          r._valid = r.valid();
        });

        self.files.push(...results.results);
        self.files.push(...results.incomplete_results);

    }
  },

  methods: {

    addFiles(...f) {

        f.forEach(file => {
            this.current_file_name = file.name;
            this.filereader.readAsText(file);
        })

    },

    doDelete(id){
      this.files.splice(id, 1);
    },

    doExport(id){
      this.$refs.expdialog.show(this.files[id]);
    }

  },

  components: {
    FileListItem,
    ExportDialog
  }
};
</script>

<style>
.file-list {
    display: flex;
    justify-content: center;
}
</style>