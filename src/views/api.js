// services/api.js
import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
    baseURL: 'https://api.example.com', // 设置你的 API 地址
    timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些事情
        // 例如，可以在请求头中添加认证信息
        // config.headers.Authorization = 'Bearer ' + getToken();
        return config;
    },
    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 在响应数据之前做些事情
        return response.data;
    },
    (error) => {
        // 处理响应错误
        return Promise.reject(error);
    }
);

// 定义 API 请求
const api = {
    getUser(id) {
        return instance.get(`/users/${id}`);
    },

    postUser(data) {
        return instance.post('/users', data);
    },
    // 取得歷史成果預報
    async getHistoricalForecast(dataYear) {
        try {

            // 1.正式連線用API
            // const response = await axios.post('https://9d659b5b-7217-4212-86ee-e9d338dc05c4.mock.pstmn.io/GetHistoricalForecast', {
            //     "DataYear": `${dataYear.value}`,
            // });

            // 2.測試用假資料
            const response = await axios.get(`/data/GetHistoricalForecast${dataYear.value}.json`);



            console.log(response.data); // 处理响应数据
            precipitationData.value = response.data;
            // console.log("precipitationData:", precipitationData.value)

            // 使用 reduce 按照 Area 和 Month 分组
            organizedData.value = precipitationData.value.reduce((result, current) => {
                const area = current.Area;

                // 检查是否已经存在该区域的对象
                const existingAreaObject = result.find(obj => obj.area === area);

                if (existingAreaObject) {
                    const month = current.Month;
                    const existingMonthObject = existingAreaObject.months.find(obj => obj.month === month);

                    if (existingMonthObject) {
                        existingMonthObject.LowerProbability.push(current.LowerProbability);
                        existingMonthObject.normalProbability.push(current.normalProbability);
                        existingMonthObject.higherProbability.push(current.higherProbability);
                    } else {
                        existingAreaObject.months.push({
                            month: month,
                            LowerProbability: [current.LowerProbability],
                            normalProbability: [current.normalProbability],
                            higherProbability: [current.higherProbability],
                        });
                    }
                } else {
                    result.push({
                        area: area,
                        months: [{
                            month: current.Month,
                            LowerProbability: [current.LowerProbability],
                            normalProbability: [current.normalProbability],
                            higherProbability: [current.higherProbability],
                        }],
                    });
                }

                return result;
            }, []);

            // 输出结果
            // console.log("organizedData.value:", organizedData.value);



        } catch (error) {
            console.error('获取数据时发生错误：', error);
        }
    },

};

export default api;
