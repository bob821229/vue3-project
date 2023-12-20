<script setup>
import Enumerable from 'linq';
import * as echarts from 'echarts';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios';





const data = [
    {
        "Category": "計畫",
        "SystemName": "淡水",
        "BoundaryID": "02001",
        "BoundaryType": 5,
        "T1": 56.28,
        "T2": 61.37,
        "T3": 84.16,
        "T4": 57.5,
        "T5": 71.69,
        "T6": 50.17,
        "T7": 23.51,
        "T8": 47.1,
        "T9": 66.04,
        "T10": 51.1,
        "T11": 60.17,
        "T12": 51.85
    },
    {
        "Category": "計畫",
        "SystemName": "三石",
        "BoundaryID": "02002",
        "BoundaryType": 5,
        "T1": 101.16,
        "T2": 88.32,
        "T3": 119.12,
        "T4": 85.57,
        "T5": 91.81,
        "T6": 67.64,
        "T7": 11,
        "T8": 41.55,
        "T9": 75.56,
        "T10": 60.1,
        "T11": 104.28,
        "T12": 83.73
    },
    {
        "Category": "計畫",
        "SystemName": "金山",
        "BoundaryID": "02003",
        "BoundaryType": 5,
        "T1": 125.28,
        "T2": 110.35,
        "T3": 122.19,
        "T4": 102.95,
        "T5": 95.29,
        "T6": 71.98,
        "T7": 35.99,
        "T8": 44.31,
        "T9": 102,
        "T10": 88.23,
        "T11": 133.18,
        "T12": 111.77
    },
    {
        "Category": "計畫",
        "SystemName": "基隆",
        "BoundaryID": "02004",
        "BoundaryType": 5,
        "T1": 88.3,
        "T2": 79.84,
        "T3": 94.06,
        "T4": 82.07,
        "T5": 97.79,
        "T6": 72.56,
        "T7": 42,
        "T8": 38.2,
        "T9": 90.96,
        "T10": 91.6,
        "T11": 132.46,
        "T12": 113.8
    },
    {
        "Category": "實際",
        "SystemName": "淡水",
        "BoundaryID": "02001",
        "BoundaryType": 5,
        "T1": 8.6,
        "T2": 34.1,
        "T3": 14.4,
        "T4": 51.57,
        "T5": 113.74,
        "T6": 74.3,
        "T7": 20.33,
        "T8": 153.8,
        "T9": 44.36,
        "T10": 67.07,
        "T11": 9.2,
        "T12": 44.63
    },
    {
        "Category": "實際",
        "SystemName": "三石",
        "BoundaryID": "02002",
        "BoundaryType": 5,
        "T1": 106.28,
        "T2": 122.11,
        "T3": 71.31,
        "T4": 74.53,
        "T5": 109.18,
        "T6": 80.76,
        "T7": 32.82,
        "T8": 141.74,
        "T9": 46.54,
        "T10": 91.18,
        "T11": 110.13,
        "T12": 33.87
    },
    {
        "Category": "實際",
        "SystemName": "金山",
        "BoundaryID": "02003",
        "BoundaryType": 5,
        "T1": 143,
        "T2": 151.06,
        "T3": 75.48,
        "T4": 85.02,
        "T5": 116.6,
        "T6": 126.82,
        "T7": 32.54,
        "T8": 177.64,
        "T9": 52.08,
        "T10": 140.88,
        "T11": 135.44,
        "T12": 24
    },
    {
        "Category": "實際",
        "SystemName": "基隆",
        "BoundaryID": "02004",
        "BoundaryType": 5,
        "T1": 144,
        "T2": 146.82,
        "T3": 61.01,
        "T4": 69.65,
        "T5": 138.99,
        "T6": 94.17,
        "T7": 62.07,
        "T8": 129.39,
        "T9": 45.45,
        "T10": 147.88,
        "T11": 141.17,
        "T12": 24.49
    },
    {
        "Category": "計畫",
        "SystemName": "全區",
        "BoundaryID": "02",
        "BoundaryType": 3,
        "T1": 101.24,
        "T2": 76.31,
        "T3": 119.4,
        "T4": 80.77,
        "T5": 91.51,
        "T6": 75.58,
        "T7": 25.34,
        "T8": 50.83,
        "T9": 88.24,
        "T10": 67.21,
        "T11": 121.13,
        "T12": 80.8
    },
    {
        "Category": "實際",
        "SystemName": "全區",
        "BoundaryID": "02",
        "BoundaryType": 3,
        "T1": 109.28,
        "T2": 122.22,
        "T3": 44.88,
        "T4": 73.88,
        "T5": 113.65,
        "T6": 98.08,
        "T7": 27.27,
        "T8": 163.96,
        "T9": 51.77,
        "T10": 104.25,
        "T11": 118.22,
        "T12": 38.63
    }
]

// // 使用 LINQ 進行查詢
// const arrRes1 = Enumerable.from(data).where(x => x.SystemName == '淡水' && x.Category == '計畫').toArray();
// const arrRes2 = Enumerable.from(data).where(x => x.SystemName == '淡水' && x.Category == '實際').toArray();

// // 分別將計畫和實際放入 arr1 和 arr2
// const arr1 = arrRes1.map(item => ({
//     BoundaryID: item.BoundaryID,
//     BoundaryType: item.BoundaryType,
//     plan: [item.T1, item.T2, item.T3, item.T4, item.T5, item.T6, item.T7, item.T8, item.T9, item.T10, item.T11, item.T12,]//計畫雨量

// }));

// const arr2 = arrRes2.map(item => ({
//     BoundaryID: item.BoundaryID,
//     BoundaryType: item.BoundaryType,
//     reality: [item.T1, item.T2, item.T3, item.T4, item.T5, item.T6, item.T7, item.T8, item.T9, item.T10, item.T11, item.T12,]//實際雨量
// }));

// const arr3 = {
//     plan: arr1.map(item => item.plan),
//     reality: arr2.map(item => item.reality)
// };

// console.log("arr1:", arr1);
// console.log("arr2:", arr2);
// console.log("arr3:", arr3);
// 使用 LINQ 進行查詢，整理成指定格式
const organizedData = ref({});

data.forEach(item => {
    if (!organizedData.value[item.SystemName]) {
        organizedData.value[item.SystemName] = {
            SystemName: item.SystemName,
            BoundaryID: item.BoundaryID,
            BoundaryType: item.BoundaryType,
            plan: [],
            reality: [],
        };
    }

    if (item.Category === '計畫') {
        organizedData.value[item.SystemName].plan.push([item.T1, item.T2, item.T3, item.T4, item.T5, item.T6, item.T7, item.T8, item.T9, item.T10, item.T11, item.T12]);
    } else if (item.Category === '實際') {
        organizedData.value[item.SystemName].reality.push([item.T1, item.T2, item.T3, item.T4, item.T5, item.T6, item.T7, item.T8, item.T9, item.T10, item.T11, item.T12]);
    }
});

console.log("organizedData:", organizedData.value);



// echarts--------------------
const chart = ref(null);
const myChart = ref(null);
onMounted(() => {
    initChart();
    fetchData()

});
// 初始化echarts
const initChart = () => {
    myChart.value = echarts.init(chart.value);
    const option = {
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['plan', 'reality']
        },
        xAxis: [
            {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Precipitation',
                axisLabel: {
                    formatter: '{value} ml'
                }
            }
        ],
        series: [
            {
                name: 'plan',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: [
                    300.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: 'reality',
                type: 'line',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            }
        ]
    };
    myChart.value.setOption(option);
};

const fetchData = async () => {
    try {
        const response = await axios.post('https://9d659b5b-7217-4212-86ee-e9d338dc05c4.mock.pstmn.io/WeatherOutlook', {
            "DataYear": "111",
        });
        console.log(response.data); // 處理響應數據
        precipitationData.value = response.data;
        console.log("precipitationData:", precipitationData.value)
    } catch (error) {
        console.error('獲取數據時發生錯誤：', error);
    }
};
fetchData()

</script>

<template>
    <main>
        <div ref="chart" style="width:100%;height:500px;"></div>
        <table class="table">
            <thead>
                <tr>
                    <th>管理處</th>
                    <th>類別</th>
                    <th v-for="item in 12" :key="item">{{ item }}月</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="item in  organizedData" :key="item.SystemName">
                    <tr>
                        <td rowspan="2"><button class="btn btn-outline-success" @click="updateChart(item)">{{
                            item.SystemName
                        }}</button></td>
                        <td>計畫</td>
                        <td v-for="i in 12" :key="i">{{ item.plan[0][i - 1] }}</td>
                    </tr>
                    <tr>
                        <td>實際</td>
                        <td v-for="i in 12" :key="i">{{ item.reality[0][i - 1] }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 300px;
    border-radius: 10px;
    background: #F3F5F7;
    padding: 0 36px 36px 36px;
}

table {
    border-collapse: collapse;
    width: 100%;
    text-align: center; // 將表格中的文本置中
}

table,
th,
td {
    border: 1px solid #E7E7E7;
}

th {
    border: 1px solid #E7E7E7;
    background: var(--main-green, #39A771);
    color: #fff;
}
</style>