<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
const props = defineProps(["chartData"])
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
            data: [`${props.chartData.LowerProbability}%`, `${props.chartData.normalProbability}%`, `${props.chartData.higherProbability}%`],
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
                data: [`${props.chartData.LowerProbability}`, `${props.chartData.normalProbability}`, `${props.chartData.higherProbability}`],
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
// 監聽 chartData 的變化，當資料更新時重新渲染
watch(() => props.chartData, () => {
    initChart();
});
onMounted(() => {
    initChart();
});
</script>
  
<!-- 中北東南 -->

<template>
    <!-- {{ props.chartData }} -->
    <!-- Area:{{ props.chartData.Area }}
    DataYear:{{ props.chartData.DataYear }}
    Month:{{ props.chartData.Month }}
    低:{{ props.chartData.LowerProbability }}
    中:{{ props.chartData.normalProbability }}
    高:{{ props.chartData.higherProbability }} -->
    <div class="echart_wrap">
        <div ref="chart" :style="{ width: '125px', height: '125px' }"></div>
    </div>
</template>
<style scoped>
.echart_wrap {
    width: 10%;
    height: 10%;
}
</style>
  