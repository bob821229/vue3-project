<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const props = defineProps([])
const chart = ref(null);
const initChart = () => {
    const myChart = echarts.init(chart.value);
    const option = {
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '5%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: [`30%`, `40%`, `50%`],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                fontSize: 8,
            }
        },
        yAxis: {
            show: false
        },
        series: [
            {
                data: [30, 40, 50],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#EA5C2B', '#39A771', '#007AB5'];
                            return colorList[params.dataIndex];
                        }
                    }
                },
            }
        ]
    };
    myChart.setOption(option);
    myChart.resize();
};

onMounted(() => {
    initChart();
});
</script>
  


<template>
    <div class="echart_wrap">
        <div ref="chart" :style="{ width: '125px', height: '125px' }"></div>
    </div>
</template>
<style scoped>
.echart_wrap {
    width: 125px;
    height: 125px;
    position: relative;
}
</style>
  