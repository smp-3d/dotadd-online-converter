<template>
<div id="root">
    <md-card style="margin: 10px; padding: 20px; width: 800px">
    <div style="padding-bottom: 10px">
    {{this.$attrs.add.name}}
    <span style = "color: darkgrey"> 
    {{ this.$attrs.add.author }}
    </span>
    <span style="color: red; font-weight: bold">
    {{ (this.$attrs.add._valid)?"":" - invalid" }}
    </span>
    </div>
    <md-divider/>
    <div id="description">
        {{ this.$attrs.add.description }}
    </div>
    <div style="padding-top: 20px; padding-bottom:30px">Order: {{ 
            (this.$attrs.add.decoder.matrices.length)? 
            (this.$attrs.add.decoder.matrices[0].matrix)? 
            (this.$attrs.add.decoder.matrices[0].matrix.length)?
            this.$attrs.add.maxAmbisonicOrder() : "0" : "0" : "0"
        }} | Normalisation: {{ 
            (this.$attrs.add.decoder.matrices.length)?
            this.$attrs.add.decoder.matrices[0].getNormalization().toUpperCase() : "0"
        }} | Outputs: {{
            this.$attrs.add.decoder.output.channels.length
        }} | Filterbands: {{
            this.$attrs.add.decoder.filters.length
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