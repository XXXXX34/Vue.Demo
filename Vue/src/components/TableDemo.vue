<template>
      <div>
            <v-table
                is-vertical-resize
                :vertical-resize-offset='60'
                is-horizontal-resize
                :is-loading="tableConfig.isLoading"
                style="width:100%"
                :multiple-sort="false"
                :min-height="350"
                even-bg-color="#f2f2f2"
                :columns="tableConfig.columns"
                :table-data="tableConfig.tableData"
                row-hover-color="#eee"
                row-click-color="#edf7ff"
        ></v-table>
            <v-pagination :total="total" :page-size="pageSize" @page-change="pageChange" @page-size-change="pageSizeChange"></v-pagination>
      </div>
</template>
<script>
    // 引入样式
    import 'vue-easytable/libs/themes-base/index.css'
    import axios from '../config/axios.js'
    export default {
        data: function() {
            return {

                total: 0,
                pageSize: 10,
                pageIndex: 1,
                tableConfig: {
                    isLoading: true,
                    tableData: [],
                    columns: [{
                        field: 'name',
                        title: '姓名',
                        width: 80,
                        titleAlign: 'center',
                        columnAlign: 'center',
                        isResize: true
                    }, {
                        field: 'tel',
                        title: '手机号码',
                        width: 80,
                        titleAlign: 'center',
                        columnAlign: 'center',
                        isResize: true
                    }]
                }

            }
        },
        methods: {
            pageChange(pageIndex) {
                this.pageIndex = pageIndex;
                this.loadData();
            },
            pageSizeChange(newPageSize) {
                this.pageSize = newPageSize;
                this.loadData();
            },
            loadData() {
                this.tableConfig.isLoading = true;
                var context = this;

                axios.post('/tables', JSON.stringify({
                        pageIndex: this.pageIndex,
                        pageSize: this.pageSize
                    }))
                    .then(function(response) {
                        context.tableConfig.isLoading = false;
                        context.total = response.data.total;
                        context.tableConfig.tableData = response.data.data;

                        console.info(response.data.data);

                    })
                    .catch(function(error) {
                        context.tableConfig.isLoading = false;
                        console.debug(error);
                    });
            }
        },
        created() {
            this.total = 10000;
            this.loadData();
        }
    }
</script>
<style scoped>

</style>