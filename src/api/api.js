import axios from 'axios';
import token from '@/api/token.json';

const orgReq = axios.create({
    baseURL: new URL(location.href).searchParams.get('wfciUrl') ?? import.meta.env.VITE_WFCI_API_DOMAIN
});
orgReq.interceptors.request.use((config) => {
    const tokenParam = new URL(location.href).searchParams.get('token') || token.afToken;
    config.headers.token = `${tokenParam}`;
    return config;
});

///////取得組織樹
export const apiGetOrgTree = () => orgReq.get('/api/org/all');

////////稽催排名
export const apiPostRemindersDepMemData = (data) => orgReq.post('/api/task/reminders', data);
export const apiPostUserData = (data) => orgReq.post('/api/task/reminders/process', data);

//////流程排名
export const apiPostRunningTaskAvgTime = (data) => orgReq.post('/api/task/rootProcess', data);
export const apiPostRunningSubAvgTime = (data) => orgReq.post('/api/task/sub/avg-time', data);

////////逾期排名
export const apiPostOverdueData = (data) => orgReq.post('/api/task/overdue-quantity', data);
export const apiPostOverdueTableData = (data) => orgReq.post('/api/task/overdue', data);
export const apiGetRootTaskDetailData = (id) => orgReq.get(`/api/task/overdue/task/${id}`);

//////////使用排名
export const apiPostUseData = (data) => orgReq.post('/api/task/usage-amount', data);
export const apiPostUseDataRank = (data) => orgReq.post('/api/task/history', data);



export const getTableData = async () => {
    try {
        // 在實際應用中，這裡可能會有基本的 API 請求配置，例如設置 API 的基本路徑等。
        // 現在，我們只是示範一個簡單的 GET 請求。

        // 模擬等待資料回傳
        await new Promise(resolve => setTimeout(resolve, 2500));

        // 測試用假資料
        const res = await axios.get('/data/GetFutureWeekforecastRainfallTable.json');

        return res.data;
    } catch (error) {
        console.error('获取数据时发生错误：', error);
        throw error; // 將錯誤拋出以便在調用端處理
    }
};