<template>
<div id="root">
    <md-card style="margin: 10px; padding: 20px; width: 800px">
    <div style="padding-bottom: 10px">
        <span style="font-weight: bold">
            {{this.$attrs.file.f.name}}: 
        </span>
            {{this.$attrs.file.add.name}}
        <span style = "color: darkgrey"> 
            {{ this.$attrs.file.add.author }}
        </span>
        <span style="color: red; font-weight: bold">
            {{ (this.$attrs.file.valid)?"":" - invalid" }}
        </span>
    </div>
    <md-divider/>
    <div id="description">
        {{ this.$attrs.file.add.description }}
    </div>
    <div style="padding-top: 20px; padding-bottom:30px">Order: {{ 
            (this.$attrs.file.add.decoder.matrices.length)? 
            (this.$attrs.file.add.decoder.matrices[0].matrix)? 
            (this.$attrs.file.add.decoder.matrices[0].matrix.length)?
            this.$attrs.file.add.maxAmbisonicOrder() : "0" : "0" : "0"
        }} | Normalisation: {{ 
            (this.$attrs.file.add.decoder.matrices.length)?
            this.$attrs.file.add.decoder.matrices[0].getNormalization().toUpperCase() : "0"
        }} | Outputs: {{
            this.$attrs.file.add.decoder.output.channels.length
        }} | Filterbands: {{
            this.$attrs.file.add.decoder.filters.length
        }}
        <div style="margin-top: 10px">
            <md-button v-on:click="doExport" style="float: right" class="md-dense md-raised md-primary">export</md-button>
            <md-button v-on:click="deleteMe" style="float: right" class="md-dense md-raised md-primary">delete</md-button>
        </div>
    </div>
    </md-card>
</div>
</template>

<script>

export default {

    methods: {
        deleteMe(){
            this.$emit('delete', this.$attrs.id);
        },
        doExport(){
            this.$emit('export', this.$attrs.id);
        }
    }

}
</script>


<style scoped>
#root {
    display: flex;
    width: 800px;
}
#description {
    margin-top: 5px;
    font-size: small;
    color: darkgray;
}
</style>