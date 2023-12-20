<script setup>
import { onMounted, reactive, ref, watch, onBeforeUnmount } from 'vue';
import PageTitle from '@/components/PageTitle.vue';
import axios from 'axios';
import * as echarts from 'echarts';
// import Enumerable from 'linq';
// 以下測試linq=============================
// const testLinq = () => {
//   const array = [1, 2, 3, 4, 5];

//   // 测试使用 linq 进行数组操作
//   const result = Enumerable.from(array).where(x => x % 2 === 0).toArray();
//   console.log("result", result); // 应该输出 [2, 4]
// };
// // 在你的代码中的某个适当的地方调用测试函数
// testLinq();
// ============================================

// 管理處
const managementOffice = ref("01");
// 資料年份
const year = ref(112);
// 時間單位
const timeNuite = ref("月");
const precipitationData = ref([]);
const fetchData = async () => {
  try {
    // 1.正式連線用API
    // const response = await axios.post('https://a439071f-4caf-49ab-af34-867d233a68a2.mock.pstmn.io/Rain', {
    //   "DataYear": 2023,
    //   "IANo": managementOffice.value //管理處編號
    // });

    // 2.測試用假資料
    const response = await axios.get(`/data/GetWorkstation_MonthData${managementOffice.value}.json`);



    console.log("response:", response.data); // 處理響應數據
    precipitationData.value = response.data;
    console.log("precipitationData:", precipitationData.value)

    organizedData.value = {}; //每次打api都清空表格

    // 整理資料成我需要的格式
    precipitationData.value.forEach(item => {
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

    // 调用 updateChart 函数，确保初始化时显示 "全區" 数据
    updateChart(organizedData.value["全區"]);
  } catch (error) {
    console.error('獲取數據時發生錯誤：', error);
  }
};
fetchData()
// 整理過格式後的資料
const organizedData = ref({});



// console.log("organizedData:", organizedData);
// echarts--------------------
const chart = ref(null);
const myChart = ref(null);


onMounted(() => {
  initChart();
});

// 監聽當organizedData發生變化的時候就更新echarts
watch(
  organizedData,
  () => {
    updateChart();
  },
  {
    deep: true,
  }
);

// 初始化echarts
const initChart = () => {
  myChart.value = echarts.init(chart.value);
  const option = {
    title: {
      text: `全區雨量圖`,
    },
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
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['計畫', '實際']
    },
    xAxis: [
      {
        type: 'category',
        name: '月份',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '有效雨量(mm)',
        axisLabel: {
          formatter: '{value} mm'
        }
      }
    ],
    series: [
      {
        name: '計畫',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' mm';
          }
        },
        data: [],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' }
          ]
        }
      },
      {
        name: '實際',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' mm';
          }
        },
        data: [],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' }
          ]
        }
      }
    ]
  };
  myChart.value.setOption(option);

  window.addEventListener('resize', handleResize);
};
// 更新echarts
const updateChart = (item) => {
  if (item == null) { return false }//剛仔入資料時item == null

  const option = {
    title: {
      text: `${item.SystemName}雨量圖`,
    },
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
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['計畫', '實際']
    },
    xAxis: [
      {
        type: 'category',
        name: '月份',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '有效雨量(mm)',
        axisLabel: {
          formatter: '{value} mm'
        }
      }
    ],
    series: [
      {
        name: '計畫',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' mm';
          }
        },
        data: item.plan[0],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' }
          ]
        }
      },
      {
        name: '實際',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' mm';
          }
        },
        data: item.reality[0],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' }
          ]
        }
      }
    ]
  };
  myChart.value.setOption(option);

  // 視窗滾動到最上面
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 如果希望有平滑的滚动效果
  });
}

// resize 事件的函式
const handleResize = () => {
  if (myChart.value) {
    myChart.value.resize();
  }
};


// 在组件销毁前移除事件监听器，以防止内存泄漏
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

</script>


<template>
  <main>
    <PageTitle>有效雨量分析</PageTitle>
    <div class="content">
      <div class="row">
        <div class="col-2 left_block">
          <div class="wrap">
            <div class="search row d-flex">
              <div class="col-12"><span>選擇管理處</span></div>
              <div class="col-12">
                <select class="form-select mt-2" v-model="managementOffice">
                  <option value="01">宜蘭</option>
                  <option value="02">北基</option>
                  <option value="03">桃園</option>
                  <option value="04">石門</option>
                  <option value="05">新竹</option>
                  <option value="苗栗">苗栗</option>
                  <option value="臺中">臺中</option>
                  <option value="南投">南投</option>
                  <option value="彰化">彰化</option>
                  <option value="雲林">雲林</option>
                  <option value="嘉南">嘉南</option>
                  <option value="高雄">高雄</option>
                  <option value="屏東">屏東</option>
                  <option value="臺東">臺東</option>
                  <option value="花蓮">花蓮</option>
                  <option value="七星">七星</option>
                  <option value="瑠公">瑠公</option>
                </select>
              </div>
              <div class="col-12 mt-4"><span>統計期間</span></div>
              <div class="col-12">
                <select class="form-select mt-2" v-model="year">
                  <option v-for="num in 13" :value="num + 100" :key="num">{{ num + 100 }}年</option>
                </select>
              </div>
              <div class="col-12">
                <select class="form-select mt-2" v-model="timeNuite">
                  <option value="月">月</option>
                  <option value="旬">旬</option>
                </select>
              </div>
              <div class="line"></div>
              <div class="btn search_btn" @click="fetchData()">
                <span>
                  查詢
                </span>
              </div>
            </div>
          </div>

        </div>
        <div class="col-10 right_block">
          <div class="echarts_wrap">
            <div id="echarts" ref="chart" style="width:100%;height:500px;"></div>
          </div>
          <div class=" table_wrap">
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
                    <td rowspan="2">
                      <div class="btn_bor" @click="updateChart(item)">{{
                        item.SystemName
                      }}</div>
                    </td>
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
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 100px;
  border-radius: 10px;
  background: #F3F5F7;
  padding: 0 36px 36px 36px;
}

.left_block {
  .wrap {
    height: 100%;
    border-radius: 10px;
    background: #FFF;
    padding: 48px 22px;
    margin-bottom: 16px;
  }
}

.search {

  span {
    font-family: Noto Sans TC;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

  }

  .form-select {
    width: 100%;

    &:focus {
      border-color: #39A771;
      box-shadow: 0 0 0 0.25rem rgba(108, 206, 208, 0.25);
    }

  }

  .line {
    margin: 30px 0;
    height: 1px;
    background: #E6E6E6;
  }

  .search_btn {
    width: 80%;
    background: #007AB5;
    color: #fff;
    position: relative;
    margin: auto;
    padding-top: 0.5rem;
    cursor: pointer;

    &:hover {
      background: #008bcf;
    }
  }
}



table {
  border-collapse: collapse;
  width: 100%;
  text-align: center; //讓表格內都左右置中
  vertical-align: middle; //讓表格內都上下置中

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

.echarts_wrap {
  background-color: #fff;
  padding: 24px;
  margin-bottom: 12px;
  border-radius: 10px;
}

.table_wrap {
  padding: 54px 12px;
  background-color: #fff;
  border-radius: 10px;

}

.btn_bor {
  width: 80%;
  white-space: nowrap;
  border: 1px solid #459EC6;
  padding: 0.3rem 0.5rem;
  color: #459EC6;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #459EC6;
    color: #fff;
    transition: 0.3s;

  }
}

select {
  cursor: pointer;
}
</style>

