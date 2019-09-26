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
                    <md-checkbox v-model="re_norm">Renormalize</md-checkbox>
                    <md-radio v-model="norm" value="n3d" v-bind:disabled="!re_norm">N3D</md-radio>
                    <md-radio v-model="norm" value="sn3d" v-bind:disabled="!re_norm">SN3D</md-radio>
                </div>
            </md-tab>
                <md-tab md-label="EDIT">
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
            <md-button class="md-primary" @click="doExport">{{ (expall == 1)? "EXPORT ALL" : "EXPORT MERGED" }}</md-button>
      </md-dialog-actions>
    </md-dialog>
</div>
</template>

<script>

import { Converter, ConverterOptions, ConvertableTextFile, ConverterOption } from 'dotadd.tools';

export default {
    data(){
        return {
            showDialog: false,
            format: "add",
            generateOutputChannels: false,
            norm: "n3d",
            re_norm: 0,
            name: "",
            description: "",
            author: "",
            currentAdd: null,
            expall: 0
        }
    },
    methods:{

        beginExport(opts){
            console.log(opts)
            this.showDialog = true;
            this.expall = opts.method;
            this.files = opts.files;
        },

        doExport(){
            console.log(this.files);
            this.showDialog = false;

            if(this.expall){

                let opts = new ConverterOptions();

                opts.options.push(new ConverterOption('format', 'add'));

                let testfiles = this.files.map(f => {

                    let output = Converter.convert_string([new ConvertableTextFile(f.f.name, f.add.export().serialize())], opts);

                    return { data: output.output_files[0].data, 
                            filename: `${f.f.name.split('.').slice(0, -1).join('.')}.${output.output_files[0].container}` };
                });

                this.download(testfiles);
                
            } 

        },

        download(files) {
        
            for(let file of files){

                var element = document.createElement('a');

                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file.data));
                element.setAttribute('download', file.filename);

                element.style.display = 'none';
                document.body.appendChild(element);

                element.click();

                document.body.removeChild(element);

            }
        }

    }
}
</script>

<style scoped>

</style>