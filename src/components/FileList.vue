<template>
  <div class="file-list">
    <ExportDialog ref="expdialog"></ExportDialog>
    <md-list>
      <md-list-item v-for="(file, index) in files" v-bind:key="file.lastModified">
        <FileListItem
          v-bind:file="file"
          v-bind:id="index"
          v-on:delete="doDelete"
          v-on:export="doExport"
        />
      </md-list-item>
      <!--<MergeExportAll v-if="files.length > 1" v-bind:files="files"/>-->
    </md-list>
  </div>
</template>

<script>
import { Converter, ConvertableTextFile, ConverterOptions } from "dotadd.tools";
import FileListItem from "./FileListItem";
import ExportDialog from "./ExportDialog";

export default {
  data() {
    return {
      files: [],
      readers: [],
      filereader: new FileReader(),
      current_file_name: ""
    };
  },

  mounted() {
    let self = this;

    this.filereader.onload = f => {
      let results = Converter.convert_string(
        [new ConvertableTextFile(self.current_file_name, f.target.result)],
        new ConverterOptions()
      );

      results.results.forEach(r => {
        r._valid = r.valid();
      });

      results.incomplete_results.forEach(r => {
        r._valid = r.valid();
      });

      self.files.push(...results.results);
      self.files.push(...results.incomplete_results);
    };
  },

  methods: {
    addFiles(...f) {
      let self = this;

      f.forEach(file => {
        let reader = new FileReader();

        reader.onload = red => {
          let results;

          try {
            results = Converter.convert_string(
              [new ConvertableTextFile(file.name, red.target.result)],
              new ConverterOptions()
            );
          } catch (e) {
            console.log(e);

            self.$toasted.show("Error: " + e.message, {
              theme: "bubble",
              position: "bottom-right",
              duration: 5000
            });
            return;
          }

          let res = {};

          if (results.results.length) {
            res = {
              add: results.results.shift(),
              f: file
            };
          } else if (results.incomplete_results.length) {
            res = {
              add: results.incomplete_results.shift(),
              f: file
            };
          } else {
            self.$toasted.show("Could not read file.", {
              theme: "bubble",
              position: "bottom-right",
              duration: 5000
            });
            return;
          }

          res.valid = res.add.valid();

          self.files.push(res);
        };

        reader.readAsText(file);
      });
    },

    doDelete(id) {
      this.files.splice(id, 1);
    },

    doExport(id) {
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