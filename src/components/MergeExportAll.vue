<template>
    <div>
        <ExportMergeDialog ref="export" />
        <md-list>
            <md-list-item>
                <md-card style="margin-left: 10px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; width: 800px">
                    <md-button v-on:click="doExportAll" style="float: right" class="md-dense md-raised md-primary">export all</md-button>
                    <md-button v-on:click="doMerge" style="float: right" class="md-dense md-raised md-primary">merge</md-button>
                </md-card>
            </md-list-item>
        </md-list>
    </div>
</template>

<script>
import ExportMergeDialog from './ExportMergeDialog';

export default {

    data() {
        return {
        }
    },

    methods: {
        doExportAll(){
            this.$refs.export.beginExport({
                files: this.$attrs.files,
                method: 1
            });
        },
        doMerge(){
            this.$refs.export.beginExport({
                files: this.$attrs.files,
                method: 0
            });
        }
    },
    components: {
        ExportMergeDialog
    }
}
</script>

<style scoped>

</style>