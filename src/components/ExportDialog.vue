<template>
<div>
    <md-dialog :md-active.sync="showDialog" :md-backdrop="false">
        <md-dialog-title>Export</md-dialog-title>
        <md-tabs md-dynamic-height style="width:500px">
            <md-tab md-label="Options">
                <md-field>
                <label for="format">Format</label>
                <md-select v-model="format" name="format" id="format">
                    <md-option value="add">ADD</md-option>
                    <md-option value="iem">IEM</md-option>
                    <md-option value="csv">CSV</md-option>
                    <md-option value="ambdec">Ambix</md-option>
                </md-select>
                </md-field>
                <md-switch v-model="generateOutputChannels" value="false">Generate Output Channels</md-switch>
                <div>
                    <md-radio v-model="norm" value="n3d">N3D</md-radio>
                    <md-radio v-model="norm" value="sn3d">SN3D</md-radio>
                </div>
            </md-tab>
                <md-tab md-label="ADD DATA">
                <md-field>
                    <label>Name</label>
                    <md-input v-model="name" placeholder="Name (unchanged)"></md-input>
                </md-field>
                <md-field>
                    <label>Author</label>
                    <md-input v-model="author" placeholder="Author (unchanged)"></md-input>
                </md-field>
                <md-field>
                    <label>Description</label>
                    <md-input v-model="description" placeholder="Description (unchanged)"></md-input>
                </md-field>
            </md-tab>
        </md-tabs>
        <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
            <md-button class="md-primary" @click="doExport">Export</md-button>
      </md-dialog-actions>
    </md-dialog>
</div>
</template>


<script>
import { ADD } from 'dotadd.js';
import { Converter, ConverterOptions, ConverterOption, ConvertableTextFile } from 'dotadd.toolset'

export default {

    name: "ExportDialog",

    data(){
        return {
            showDialog: false,
            format: "add",
            generateOutputChannels: false,
            norm: "n3d",
            name: "",
            description: "",
            author: "",
            currentAdd: null
        }
    },

    methods: {

        doExport(){

            this.showDialog = false;

            let convo = new ConverterOptions();

            if(this.author != this.currentAdd.author || this.author === "")
                convo.options.push(new ConverterOption('author', this.author))

            if(this.name != this.currentAdd.name || this.name === "")
                convo.options.push(new ConverterOption('name', this.name))

            if(this.description != this.currentAdd.description || this.description === "")
                convo.options.push(new ConverterOption('description', this.description))

            convo.options.push(new ConverterOption('format', this.format));

            let output = Converter.convert_string([new ConvertableTextFile('exported.add', this.currentAdd.export().serialize())], convo);

            if(output.output_files.length)
                this.download(`result.${output.output_files[0].container}`, output.output_files[0].data);

        },

        show(add){
            this.currentAdd = add;
            this.showDialog = true;
            this.name = add.name;
            this.description = add.description;
            this.author = add.author;
        },

        download(filename, text) {

            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }
    }

}
</script>


<style>

</style>