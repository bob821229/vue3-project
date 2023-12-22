<script setup>
import PageTitle from '../components/PageTitle.vue';
import { ref } from 'vue'

// 小間距
const smallSpacing = [
    { markerColor: '#FECCFF', text: '>300' },
    { markerColor: '#FF00FE', text: '200-300' },
    { markerColor: '#CB00CC', text: '150-200' },
    { markerColor: '#990099', text: '130-150' },
    { markerColor: '#990100', text: '110-130' },
    { markerColor: '#CC0001', text: '90-110' },
    { markerColor: '#FE0000', text: '70-90' },
    { markerColor: '#FE9900', text: '50-70' },
    { markerColor: '#FFCC00', text: '40-50' },
    { markerColor: '#FFFF00', text: '30-40' },
    { markerColor: '#33FF00', text: '20-30' },
    { markerColor: '#329900', text: '15-20' },
    { markerColor: '#0166FF', text: '10-15' },
    { markerColor: '#0099FF', text: '6-10' },
    { markerColor: '#00CCFF', text: '2-6' },
    { markerColor: '#99FFFF', text: '1-2' },
    { markerColor: '#DADADA', text: '0.1-1' },
    { markerColor: '#000000', text: '0-0.1' },

];
// 大間距
const bigSpacing = [
    { markerColor: '#FECCFF', text: '>1500' },
    { markerColor: '#FF00FE', text: '1200-1500' },
    { markerColor: '#CB00CC', text: '1000-1200' },
    { markerColor: '#990099', text: '900-1000' },
    { markerColor: '#990100', text: '800-900' },
    { markerColor: '#CC0001', text: '700-800' },
    { markerColor: '#FE0000', text: '600-700' },
    { markerColor: '#FE9900', text: '500-600' },
    { markerColor: '#FFCC00', text: '400-500' },
    { markerColor: '#FFFF00', text: '300-400' },
    { markerColor: '#33FF00', text: '200-300' },
    { markerColor: '#329900', text: '150-200' },
    { markerColor: '#0166FF', text: '100-150' },
    { markerColor: '#0099FF', text: '60-100' },
    { markerColor: '#00CCFF', text: '20-60' },
    { markerColor: '#99FFFF', text: '10-20' },
    { markerColor: '#DADADA', text: '0-10' },
    { markerColor: '#000000', text: '0' },

];
const text1 = ref("雨量(mm)")
const isClosedWeek1 = ref(false);
const legendEntriesWeek1 = ref(smallSpacing);

const text2 = ref("雨量(mm)")
const isClosedWeek2 = ref(false);
const legendEntriesWeek2 = ref(smallSpacing);

//按鈕變色
const btn1 = ref(0);
const btn2 = ref(0);

// 雨量例圖收合
const open = (week) => {
    if (week === 'week1') {
        isClosedWeek1.value = !isClosedWeek1.value;
        text1.value = isClosedWeek1.value ? "雨量例圖" : "雨量(mm)";
    } else if (week === 'week2') {
        isClosedWeek2.value = !isClosedWeek2.value;
        text2.value = isClosedWeek2.value ? "雨量例圖" : "雨量(mm)";
    }
};
// 間距切換
const changeSpacing = (items, week, i) => {
    if (week === 'week1') {
        btn1.value = i;
        legendEntriesWeek1.value = items;
        console.log(legendEntriesWeek1.value);
    } else if (week === 'week2') {
        btn2.value = i;
        legendEntriesWeek2.value = items;
        console.log(legendEntriesWeek2.value);
    }
};

// 表格資料
const table1 = ref({})
const table2 = ref({})


</script>

<template>
    <main>
        <PageTitle>未來兩週累積雨量估計</PageTitle>
        <div class="content">
            <div class="row">
                <!-- 第一周 -->
                <div class="col-6">
                    <!-- 地圖區域 -->
                    <div class="wrap">
                        <div class="title_outer text-center">
                            <h6>第一週</h6>
                            <h6>112-12-2 ~ 112-12-9</h6>
                        </div>
                        <div class="map_wrap d-flex">
                            <div id="week1spacing" class="cwb-rain-legend leaflet-control">
                                <div class="button_outer d-flex">
                                    <button type="button" class="btn btn-outline-primary"
                                        @click=" changeSpacing(smallSpacing, 'week1', 0)"
                                        :class="{ active: btn1 === 0 }">小間距</button>
                                    <button type="button" class="btn btn-outline-primary"
                                        @click=" changeSpacing(bigSpacing, 'week1', 1)" :class="{ active: btn1 === 1 }">
                                        大間距
                                    </button>
                                </div>
                                <div class=" rain_wrap">
                                    <div class="legend-title d-flex align_center justify-content-between p-1">
                                        <span id="week1title" class="title">{{ text1
                                        }}</span>
                                        <div class="collapse_btn text-center" @click="open('week1')"
                                            :class="{ rotate180: isClosedWeek1 }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10"
                                                viewBox="0 0 16 10" fill="none">
                                                <path d="M1.5 1.75L8 8.25L14.5 1.75" stroke="white" stroke-width="2"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div v-for="(  entry, index  ) in   legendEntriesWeek1  " :key="index"
                                        class="legend-entry" :class="{ close: isClosedWeek1 }">
                                        <div class="entry-marker d-flex">
                                            <div class="marker" :style="{ 'background-color': entry.markerColor }">
                                            </div>
                                            <div class="entry-txt">{{ entry.text }}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="map">
                                <img src="../assets/images/taiwan.png" alt="">
                            </div>
                            <div class="map_contrl">
                                <img src="../assets/images/map_right.png" alt="">
                            </div>

                        </div>
                    </div>
                    <!-- 表格區域 -->
                    <div class="table_wrap">
                        <table class="table table-hover">
                            <thead class="thead_green">
                                <tr>
                                    <th>管理處</th>
                                    <th>雨量(mm)</th>
                                    <th>水庫</th>
                                    <th>雨量(mm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">桃園</button>
                                    </td>
                                    <td>26.43</td>
                                    <td rowspan="2">
                                        <button type="button" class="btn btn_bor">石門水庫</button>
                                    </td>
                                    <td rowspan="2">27.28</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">石門</button>
                                    </td>
                                    <td>28.55</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">
                                        <button type="button" class="btn btn_bor">新竹</button>
                                    </td>
                                    <td rowspan="2">22.49</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">寶山水庫</button>
                                    </td>
                                    <td>25.22</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">寶山第二水庫</button>
                                    </td>
                                    <td>26.12</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><button type="button" class="btn btn_bor">苗栗</button>
                                    </td>
                                    <td rowspan="2">18.94</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">永和山水庫</button>
                                    </td>
                                    <td>23.52</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">明德水庫</button>
                                    </td>
                                    <td>23.58</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><button type="button" class="btn btn_bor">台中</button>
                                    </td>
                                    <td rowspan="2">11.94</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">鯉魚潭水庫</button>
                                    </td>
                                    <td>18.29</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">德基水庫</button>
                                    </td>
                                    <td>29.24</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><button type="button" class="btn btn_bor">嘉南</button>
                                    </td>
                                    <td rowspan="2">5.49</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">烏山頭水庫</button>
                                    </td>
                                    <td>6.28</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">曾文水庫</button>
                                    </td>
                                    <td>10.27</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- 第二周 -->
                <div class="col-6">
                    <div class="wrap">
                        <div class="title_outer text-center">
                            <h6>第二週</h6>
                            <h6>112-12-10 ~ 112-12-16</h6>
                        </div>
                        <div class="map_wrap d-flex">
                            <div id="week1spacing" class="cwb-rain-legend leaflet-control">
                                <div class="button_outer d-flex">
                                    <button type="button" class="btn btn-outline-primary"
                                        @click=" changeSpacing(smallSpacing, 'week2', 0)"
                                        :class="{ active: btn2 === 0 }">小間距</button>
                                    <button type="button" class="btn btn-outline-primary"
                                        @click=" changeSpacing(bigSpacing, 'week2', 1)" :class="{ active: btn2 === 1 }">
                                        大間距
                                    </button>
                                </div>
                                <div class="rain_wrap">
                                    <div class="legend-title d-flex align_center justify-content-between p-1">
                                        <span id="week1title" class="title">{{ text2
                                        }}</span>
                                        <div class="collapse_btn text-center" @click="open('week2')"
                                            :class="{ rotate180: isClosedWeek2 }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10"
                                                viewBox="0 0 16 10" fill="none">
                                                <path d="M1.5 1.75L8 8.25L14.5 1.75" stroke="white" stroke-width="2"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div v-for="(  entry, index  ) in   legendEntriesWeek2  " :key="index"
                                        class="legend-entry" :class="{ close: isClosedWeek2 }">
                                        <div class="entry-marker d-flex">
                                            <div class="marker" :style="{ 'background-color': entry.markerColor }">
                                            </div>
                                            <div class="entry-txt">{{ entry.text }}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="map">
                                <img src="../assets/images/taiwan.png" alt="">
                            </div>
                            <div class="map_contrl">
                                <img src="../assets/images/map_right.png" alt="">
                            </div>

                        </div>
                    </div>
                    <!-- 表格區域 -->
                    <div class="table_wrap">
                        <table class="table table-hover">
                            <thead class="thead_green">
                                <tr>
                                    <th>管理處</th>
                                    <th>雨量(mm)</th>
                                    <th>水庫</th>
                                    <th>雨量(mm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">桃園</button>
                                    </td>
                                    <td>26.43</td>
                                    <td rowspan="2">
                                        <button type="button" class="btn btn_bor">石門水庫</button>
                                    </td>
                                    <td rowspan="2">27.28</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">石門</button>
                                    </td>
                                    <td>28.55</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">
                                        <button type="button" class="btn btn_bor">新竹</button>
                                    </td>
                                    <td rowspan="2">22.49</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">寶山水庫</button>
                                    </td>
                                    <td>25.22</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">寶山第二水庫</button>
                                    </td>
                                    <td>26.12</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><button type="button" class="btn btn_bor">苗栗</button>
                                    </td>
                                    <td rowspan="2">18.94</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">永和山水庫</button>
                                    </td>
                                    <td>23.52</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">明德水庫</button>
                                    </td>
                                    <td>23.58</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><button type="button" class="btn btn_bor">台中</button>
                                    </td>
                                    <td rowspan="2">11.94</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">鯉魚潭水庫</button>
                                    </td>
                                    <td>18.29</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">德基水庫</button>
                                    </td>
                                    <td>29.24</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><button type="button" class="btn btn_bor">嘉南</button>
                                    </td>
                                    <td rowspan="2">5.49</td>
                                    <td>
                                        <button type="button" class="btn btn_bor">烏山頭水庫</button>
                                    </td>
                                    <td>6.28</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" class="btn btn_bor">曾文水庫</button>
                                    </td>
                                    <td>10.27</td>
                                </tr>

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

.active {
    color: #fff;
    background-color: #0d6dfd;
    border-color: #0d6dfd;
}


.wrap {
    border-right: 10px;
    background-color: #fff;

}

.map_wrap {
    position: relative;
    padding: 16px;
}

.button_outer {
    display: flex;
    padding: 7px 6px;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #F3F5F7;
    background: #FFF;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.10);
    margin-bottom: 8px;

    .btn {
        font-family: Noto Sans TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

.leaflet-control {
    position: absolute;
    left: 26px;
    bottom: 26px;
    width: 165px;
    margin-top: auto;
}

.entry-marker {
    gap: 7px;
    align-items: center;
}

.rain_wrap {
    border-radius: 10px;
    border: 1px solid #F3F5F7;
    background: #FFF;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.10);
    padding: 12px;

    .title {
        color: #000;
        font-family: Noto Sans TC;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

.collapse_btn {
    width: 26px;
    height: 26px;
    border-radius: 5px;
    background: #8C8C8C;
    cursor: pointer;
}

.marker {
    width: 32px;
    height: 16px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid #000;
}

.legend-entry {
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
}

.close {
    max-height: 0px;
}

.title_outer {
    padding-top: 30px;

    h6 {
        font-size: 24px;
        font-weight: 500;
        color: #606060;
    }
}

.map {
    margin: auto;
}

.map img {
    height: 100%;
    vertical-align: top;
}

.map_contrl {
    position: absolute;
    right: 26px;
    top: 126px;
}

.rotate180 {
    transform: rotate(180deg);
}

.thead_green th {
    background: #39A771;
    color: #fff;
    border: 1px solid #E7E7E7;
}

tbody td {
    border: 1px solid #E7E7E7;
}


table>* {
    text-align: center;
    vertical-align: middle;
}

table button {
    width: 50%;
}

.btn {
    white-space: nowrap;
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
</style>