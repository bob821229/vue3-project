<script setup>
import PageTitle from '../components/PageTitle.vue';
import { onMounted, ref } from 'vue'
import axios from 'axios';


const xx = ref([]);
// 水稻
const rice = ref([]);
const riceOpen = ref(false);
// 雜1
const miscellany = ref([]);
const miscellanyOpen1 = ref(false);

// 雜2
const miscellany2 = ref([]);
const miscellanyOpen2 = ref(false);

// 雜3
const miscellany3 = ref([]);
const miscellanyOpen3 = ref(false);


onMounted(() => {
    getData();
})
// 取得最新成果預報
const getData = async () => {
    try {

        const res = await axios.get('/data/GetIrrigationPlanManageDataByTendays.json');

        console.log("res.data:", res.data)
        xx.value = res.data;
        rice.value = xx.value.filter(item => item.CropType == '水稻');
        // console.log("rice.value:", rice.value)
        console.log("rice.value.length:", rice.value.length)
        miscellany.value = xx.value.filter(item => item.CropType == '雜作' && item.CropCount == 1);
        // console.log("miscellany.value:", miscellany.value)
        // console.log("miscellany.value.length:", miscellany.value.length)
        miscellany2.value = xx.value.filter(item => item.CropType == '雜作' && item.CropCount == 2);
        // console.log("miscellany2.value:", miscellany2.value)
        miscellany3.value = xx.value.filter(item => item.CropType == '雜作' && item.CropCount == 3);
        // console.log("miscellany3.value:", miscellany3.value)
    } catch (error) {
        console.error('获取数据时发生错误：', error);
    }
};
const riceHandle = () => {
    riceOpen.value = !riceOpen.value;
}
const miscellanyHandle = (x) => {
    if (x === 1) {
        miscellanyOpen1.value = !miscellanyOpen1.value;
    }
    else if (x === 2) {
        miscellanyOpen2.value = !miscellanyOpen2.value;
    }
    else {
        miscellanyOpen3.value = !miscellanyOpen3.value;
    }
}
const allHandle = (x) => {
    if (x === 'open') {
        riceOpen.value = true;
        miscellanyOpen1.value = true;
        miscellanyOpen2.value = true;
        miscellanyOpen3.value = true;
    } else {
        riceOpen.value = false;
        miscellanyOpen1.value = false;
        miscellanyOpen2.value = false;
        miscellanyOpen3.value = false;
    }
}
</script>

<template>
    <main>
        <PageTitle>各旬計畫用水量</PageTitle>
        {{ }}

        <div class="d-flex justify-content-center m-auto">
            <button type="button" class="btn btn-outline-success btn-br" @click="allHandle('open')">全部展開</button>
            <button type="button" class="btn btn-outline-success btn-br" @click="allHandle('close')">全部收合</button>
        </div>

        <table class="mt-5">
            <thead>
                <tr>
                    <th rowspan="2">灌溉類別</th>
                    <th rowspan="2">分處/組別</th>
                    <th rowspan="2">計畫面積(公頃)</th>
                    <th rowspan="2">計畫用水量總計(萬噸)</th>
                    <th colspan="3">一月</th>
                    <th colspan="3">二月</th>
                    <th colspan="3">三月</th>
                    <th colspan="3">四月</th>
                    <th colspan="3">五月</th>
                    <th colspan="3">六月</th>
                    <th colspan="3">七月</th>
                </tr>
                <tr>
                    <th>上</th>
                    <th>中</th>
                    <th>下</th>
                    <th>上</th>
                    <th>中</th>
                    <th>下</th>
                    <th>上</th>
                    <th>中</th>
                    <th>下</th>
                    <th>上</th>
                    <th>中</th>
                    <th>下</th>
                    <th>上</th>
                    <th>中</th>
                    <th>下</th>
                    <th>上</th>
                    <th>中</th>
                    <th>下</th>
                    <th>上</th>
                    <th>中</th>
                    <th>下</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button type="button" class="btn btn-outline-primary" @click="riceHandle">
                            {{ riceOpen ? '水稻 -' : '水稻 +' }}
                        </button>
                    </td>
                    <td>合計</td>
                    <td>16606</td>
                    <td>23504</td>
                    <td>-</td>
                    <td>-</td>
                    <td>2821</td>
                    <td>2427</td>
                    <td>1938</td>
                    <td>1451</td>
                    <td>1760</td>
                    <td>1813</td>
                    <td>2207</td>
                    <td>2124</td>
                    <td>2086</td>
                    <td>2006</td>
                    <td>1807</td>
                    <td>1064</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <template v-if="riceOpen">
                    <tr>
                        <td :rowspan="rice.length + 1">水稻</td>
                    </tr>
                    <tr v-for="item in rice" :key="item">
                        <td>{{ item.SystemName }}</td>
                        <td>{{ item.FieldArea }}</td>
                        <td>sum</td>
                        <td>{{ item.T1 ? item.T1 : "-" }}</td>
                        <td>{{ item.T2 ? item.T2 : "-" }}</td>
                        <td>{{ item.T3 ? item.T3 : "-" }}</td>
                        <td>{{ item.T4 ? item.T4 : "-" }}</td>
                        <td>{{ item.T5 ? item.T5 : "-" }}</td>
                        <td>{{ item.T6 ? item.T6 : "-" }}</td>
                        <td>{{ item.T7 ? item.T7 : "-" }}</td>
                        <td>{{ item.T8 ? item.T8 : "-" }}</td>
                        <td>{{ item.T9 ? item.T9 : "-" }}</td>
                        <td>{{ item.T10 ? item.T10 : "-" }}</td>
                        <td>{{ item.T11 ? item.T11 : "-" }}</td>
                        <td>{{ item.T12 ? item.T12 : "-" }}</td>
                        <td>{{ item.T13 ? item.T13 : "-" }}</td>
                        <td>{{ item.T14 ? item.T14 : "-" }}</td>
                        <td>{{ item.T15 ? item.T15 : "-" }}</td>
                        <td>{{ item.T16 ? item.T16 : "-" }}</td>
                        <td>{{ item.T17 ? item.T17 : "-" }}</td>
                        <td>{{ item.T18 ? item.T18 : "-" }}</td>
                        <td>{{ item.T19 ? item.T19 : "-" }}</td>
                        <td>{{ item.T20 ? item.T20 : "-" }}</td>
                        <td>{{ item.T21 ? item.T21 : "-" }}</td>
                        <!-- <td>{{ item.T22 ? item.T22 : "-" }}</td>
                    <td>{{ item.T23 ? item.T23 : "-" }}</td>
                    <td>{{ item.T24 ? item.T24 : "-" }}</td>
                    <td>{{ item.T25 ? item.T25 : "-" }}</td>
                    <td>{{ item.T26 ? item.T26 : "-" }}</td>
                    <td>{{ item.T27 ? item.T27 : "-" }}</td>
                    <td>{{ item.T28 ? item.T28 : "-" }}</td>
                    <td>{{ item.T29 ? item.T29 : "-" }}</td>
                    <td>{{ item.T30 ? item.T30 : "-" }}</td>
                    <td>{{ item.T31 ? item.T31 : "-" }}</td>
                    <td>{{ item.T32 ? item.T32 : "-" }}</td>
                    <td>{{ item.T33 ? item.T33 : "-" }}</td>
                    <td>{{ item.T34 ? item.T34 : "-" }}</td>
                    <td>{{ item.T35 ? item.T35 : "-" }}</td>
                    <td>{{ item.T36 ? item.T36 : "-" }}</td> -->
                    </tr>
                </template>

                <tr>
                    <td>
                        <button type="button" class="btn btn-outline-primary" @click="miscellanyHandle(1)">
                            {{ miscellanyOpen1 ? '雜作1 -' : '雜作1 +' }}
                        </button>
                    </td>
                    <td>合計</td>
                    <td>16606</td>
                    <td>23504</td>
                    <td>-</td>
                    <td>-</td>
                    <td>2821</td>
                    <td>2427</td>
                    <td>1938</td>
                    <td>1451</td>
                    <td>1760</td>
                    <td>1813</td>
                    <td>2207</td>
                    <td>2124</td>
                    <td>2086</td>
                    <td>2006</td>
                    <td>1807</td>
                    <td>1064</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <template v-if="miscellanyOpen1">
                    <tr>
                        <td :rowspan="miscellany.length + 1">雜作(第一次)</td>
                    </tr>
                    <tr v-for="item in miscellany" :key="item">
                        <td>{{ item.SystemName }}</td>
                        <td>{{ item.FieldArea }}</td>
                        <td>sum</td>
                        <td>{{ item.T1 ? item.T1 : "-" }}</td>
                        <td>{{ item.T2 ? item.T2 : "-" }}</td>
                        <td>{{ item.T3 ? item.T3 : "-" }}</td>
                        <td>{{ item.T4 ? item.T4 : "-" }}</td>
                        <td>{{ item.T5 ? item.T5 : "-" }}</td>
                        <td>{{ item.T6 ? item.T6 : "-" }}</td>
                        <td>{{ item.T7 ? item.T7 : "-" }}</td>
                        <td>{{ item.T8 ? item.T8 : "-" }}</td>
                        <td>{{ item.T9 ? item.T9 : "-" }}</td>
                        <td>{{ item.T10 ? item.T10 : "-" }}</td>
                        <td>{{ item.T11 ? item.T11 : "-" }}</td>
                        <td>{{ item.T12 ? item.T12 : "-" }}</td>
                        <td>{{ item.T13 ? item.T13 : "-" }}</td>
                        <td>{{ item.T14 ? item.T14 : "-" }}</td>
                        <td>{{ item.T15 ? item.T15 : "-" }}</td>
                        <td>{{ item.T16 ? item.T16 : "-" }}</td>
                        <td>{{ item.T17 ? item.T17 : "-" }}</td>
                        <td>{{ item.T18 ? item.T18 : "-" }}</td>
                        <td>{{ item.T19 ? item.T19 : "-" }}</td>
                        <td>{{ item.T20 ? item.T20 : "-" }}</td>
                        <td>{{ item.T21 ? item.T21 : "-" }}</td>
                    </tr>
                </template>
                <tr>
                    <td>
                        <button type="button" class="btn btn-outline-primary" @click="miscellanyHandle(2)">
                            {{ miscellanyOpen2 ? '雜作2 -' : '雜作2 +' }}
                        </button>
                    </td>
                    <td>合計</td>
                    <td>16606</td>
                    <td>23504</td>
                    <td>-</td>
                    <td>-</td>
                    <td>2821</td>
                    <td>2427</td>
                    <td>1938</td>
                    <td>1451</td>
                    <td>1760</td>
                    <td>1813</td>
                    <td>2207</td>
                    <td>2124</td>
                    <td>2086</td>
                    <td>2006</td>
                    <td>1807</td>
                    <td>1064</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <template v-if="miscellanyOpen2">
                    <tr>
                        <td :rowspan="miscellany2.length + 1">雜作(第二次)</td>
                    </tr>
                    <tr v-for="item in miscellany2" :key="item">
                        <td>{{ item.SystemName }}</td>
                        <td>{{ item.FieldArea }}</td>
                        <td>sum</td>
                        <td>{{ item.T1 ? item.T1 : "-" }}</td>
                        <td>{{ item.T2 ? item.T2 : "-" }}</td>
                        <td>{{ item.T3 ? item.T3 : "-" }}</td>
                        <td>{{ item.T4 ? item.T4 : "-" }}</td>
                        <td>{{ item.T5 ? item.T5 : "-" }}</td>
                        <td>{{ item.T6 ? item.T6 : "-" }}</td>
                        <td>{{ item.T7 ? item.T7 : "-" }}</td>
                        <td>{{ item.T8 ? item.T8 : "-" }}</td>
                        <td>{{ item.T9 ? item.T9 : "-" }}</td>
                        <td>{{ item.T10 ? item.T10 : "-" }}</td>
                        <td>{{ item.T11 ? item.T11 : "-" }}</td>
                        <td>{{ item.T12 ? item.T12 : "-" }}</td>
                        <td>{{ item.T13 ? item.T13 : "-" }}</td>
                        <td>{{ item.T14 ? item.T14 : "-" }}</td>
                        <td>{{ item.T15 ? item.T15 : "-" }}</td>
                        <td>{{ item.T16 ? item.T16 : "-" }}</td>
                        <td>{{ item.T17 ? item.T17 : "-" }}</td>
                        <td>{{ item.T18 ? item.T18 : "-" }}</td>
                        <td>{{ item.T19 ? item.T19 : "-" }}</td>
                        <td>{{ item.T20 ? item.T20 : "-" }}</td>
                        <td>{{ item.T21 ? item.T21 : "-" }}</td>
                    </tr>
                </template>
                <tr>
                    <td>
                        <button type="button" class="btn btn-outline-primary" @click="miscellanyHandle(3)">
                            {{ miscellanyOpen3 ? '雜作3 -' : '雜作3 +' }}
                        </button>
                    </td>
                    <td>合計</td>
                    <td>16606</td>
                    <td>23504</td>
                    <td>-</td>
                    <td>-</td>
                    <td>2821</td>
                    <td>2427</td>
                    <td>1938</td>
                    <td>1451</td>
                    <td>1760</td>
                    <td>1813</td>
                    <td>2207</td>
                    <td>2124</td>
                    <td>2086</td>
                    <td>2006</td>
                    <td>1807</td>
                    <td>1064</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <template v-if="miscellanyOpen3">
                    <tr>
                        <td :rowspan="miscellany3.length + 1">雜作(第三次)</td>
                    </tr>
                    <tr v-for="item in miscellany3" :key="item">
                        <td>{{ item.SystemName }}</td>
                        <td>{{ item.FieldArea }}</td>
                        <td>sum</td>
                        <td>{{ item.T1 ? item.T1 : "-" }}</td>
                        <td>{{ item.T2 ? item.T2 : "-" }}</td>
                        <td>{{ item.T3 ? item.T3 : "-" }}</td>
                        <td>{{ item.T4 ? item.T4 : "-" }}</td>
                        <td>{{ item.T5 ? item.T5 : "-" }}</td>
                        <td>{{ item.T6 ? item.T6 : "-" }}</td>
                        <td>{{ item.T7 ? item.T7 : "-" }}</td>
                        <td>{{ item.T8 ? item.T8 : "-" }}</td>
                        <td>{{ item.T9 ? item.T9 : "-" }}</td>
                        <td>{{ item.T10 ? item.T10 : "-" }}</td>
                        <td>{{ item.T11 ? item.T11 : "-" }}</td>
                        <td>{{ item.T12 ? item.T12 : "-" }}</td>
                        <td>{{ item.T13 ? item.T13 : "-" }}</td>
                        <td>{{ item.T14 ? item.T14 : "-" }}</td>
                        <td>{{ item.T15 ? item.T15 : "-" }}</td>
                        <td>{{ item.T16 ? item.T16 : "-" }}</td>
                        <td>{{ item.T17 ? item.T17 : "-" }}</td>
                        <td>{{ item.T18 ? item.T18 : "-" }}</td>
                        <td>{{ item.T19 ? item.T19 : "-" }}</td>
                        <td>{{ item.T20 ? item.T20 : "-" }}</td>
                        <td>{{ item.T21 ? item.T21 : "-" }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 100px;
    border-radius: 10px;
    background: #F3F5F7;
    padding: 0 36px 36px 36px;
    min-height: 100vh;
}

table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    vertical-align: middle;
}

.table>thead {
    vertical-align: middle;
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

.hide {
    display: none;
}

td,
th {
    padding: 5px;
}

.btn-br {
    border-radius: 20px;
    margin: 20px;
}
</style>