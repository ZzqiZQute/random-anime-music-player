import request from '../request';

export default async function () {
    return await request<{
        anime_info: {
            atime: number;
            bg: string;
            desc: string;
            id: string;
            logo: string;
            month: number;
            title: string;
            year: number;
        };
        atime: number;
        author: string;
        id: string;
        play_url: string;
        recommend: boolean;
        title: string;
        type: string;
    }>({
        method: 'get',
        action: 'getRandomMusic'
    });
}
