import axios from 'axios';

export const actions = {
    // 随机返回一首音乐
    getRandomMusic: `https://api.paugram.com/acgm/`,
};

interface RequestOptions {
    method: 'get' | 'post';
    action: keyof typeof actions;
    params?: Record<string, string>;
    data?: any;
    dataField?: string;
}

export default async function request<ReturnValue = any>(options: RequestOptions): Promise<ReturnValue> {
    const res = await axios.request({
        method: options.method,
        url: actions[options.action],
        params: options.params,
        data: options.data
    });
    return res.data;
}
