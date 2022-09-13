import axios from 'axios';
const Bases = {
    ANIME_BASE_URL: 'https://anime-music.jijidown.com/api/v2' as const
};

// const appendBase = <T extends string>(actions: Record<string, T>, base: typeof Bases[keyof typeof Bases]): Record<string, `${typeof base}${T}`> => {
//     return Object.assign({}, ...Object.keys(actions).map((it) => ({
//         [it]: `${ base }${ actions[it] }`
//     })));
// };

const appendBase = <T extends string>(actions: Record<T, string | Function>, base: string): Record<T, string> => {
    return Object.assign({}, ...Object.keys(actions).map((it) => {
        if (typeof actions[it as keyof typeof actions] === 'string') {
            return {
                [it]: `${ base }${ actions[it as keyof typeof actions] }`
            };
        } else {
            return {
                [it]: `${ base }${ (actions[it as keyof typeof actions] as Function)() }`
            }
        }
    }));
};
export const actions = appendBase({
    // 随机返回一首音乐
    getRandomMusic: '/music',
    // 通过id返回一首音乐
    getMusicById: (id: string) => `/music/${id}`
}, Bases.ANIME_BASE_URL);
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
    if (res.data.code === 0) {
        return res.data[options.dataField ?? 'res'];
    }
    throw new Error(res.data);
}
