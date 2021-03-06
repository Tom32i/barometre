$(document).ready(function () {
    $(".select2").select2({
        closeOnSelect: false
    });

    $('table.highchart')
        .bind('highchartTable.beforeRender', function (event, highChartConfig) {
            highChartConfig.colors = ['#4C6EAF'];
            var align = $(this).data('graph-xaxis-labels-align');
            if (align !== undefined) {
                highChartConfig.xAxis.labels.align = align;
            }
        })
        .highchartTable();

});

