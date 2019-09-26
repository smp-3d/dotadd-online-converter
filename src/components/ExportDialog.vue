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
                    <md-option value="ambdec">AmbDec</md-option>
                    <md-option value="config">AmbiX</md-option>
                </md-select>
                </md-field>
                <md-switch v-model="generateOutputChannels" value="false">Generate Output Channels</md-switch>
                <div>
                    <md-checkbox v-model="re_norm">Renormalize</md-checkbox>
                    <md-radio v-model="re_norm_target" value="n3d" v-bind:disabled="!re_norm">N3D</md-radio>
                    <md-radio v-model="re_norm_target" value="sn3d" v-bind:disabled="!re_norm">SN3D</md-radio>
                </div>
                <md-checkbox v-model="prettify">Prettify JSON based formats</md-checkbox>
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
                <md-field>
                <label for="norm">Normalization</label>
                <md-select v-model="norm" name="norm" id="norm">
                    <md-option value="unknown">unknown</md-option>
                    <md-option value="sn3d">SN3D</md-option>
                    <md-option value="n3d">N3D</md-option>
                </md-select>
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
import { Converter, ConverterOptions, ConverterOption, ConvertableTextFile } from 'dotadd.tools'

export default {

    name: "ExportDialog",

    data(){
        return {
            showDialog: false,
            format: "add",
            generateOutputChannels: false,
            re_norm: false,
            re_norm_target: "sn3d",
            norm: "",
            name: "",
            description: "",
            author: "",
            currentAdd: null,
            prettify: true
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

            if(this.prettify)
                convo.options.push(new ConverterOption('prettify', true));

            if(this.re_norm)
                convo.options.push(new ConverterOption('reNorm', this.re_norm_target));

            if(this.norm)
                convo.options.push(new ConverterOption('norm', this.norm));

            convo.options.push(new ConverterOption('format', this.format));

            let output;

            try {
                output = Converter.convert_string([new ConvertableTextFile(this.currentFile.f.name, JSON.stringify(this.currentAdd))], convo);
            } catch(e) {

                this.$toasted.show("Error: " + e.message, {
                    theme: "bubble", 
	                position: "bottom-right", 
	                duration : 7000
                });

                if(!this.currentAdd.valid()){
                    for(let reason of this.currentAdd.inv_reasons){
                        this.$toasted.show(reason, {
                            theme: "bubble", 
	                        position: "bottom-right", 
	                        duration : 7000
                        });
                    }
                }

                return;
            }

            if(output.output_files.length)
                this.download(`${
                    this.currentFile.f.name.split('.').slice(0, -1).join('.')
                    }.${output.output_files[0].container}`, output.output_files[0].data);

        },

        show(file){
            this.currentFile = file;
            this.currentAdd = file.add;
            this.showDialog = true;
            this.name = file.add.name;
            this.description = file.add.description;
            this.author = file.add.author;
            this.norm = file.add.decoder.matrices[0].normalization;
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