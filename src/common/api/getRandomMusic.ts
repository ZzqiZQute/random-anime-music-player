import request from '../request';
import axios from 'axios';

interface MusicInfo {
    id: number;
    title: string;
    artist: string;
    album: string;
    cover: string;
    link: string;
}

const musicTitleList: string[] = [];
export default async function getRandomMusic (): Promise<MusicInfo> {
    const music = await request<MusicInfo>({
        method: 'get',
        action: 'getRandomMusic'
    });
    if (!music.title || !music.artist || !music.cover || musicTitleList.indexOf(music.title) !== -1) {
        return await getRandomMusic();
    }
    const link = (await axios.get('https://service-psjbwgo7-1253812015.bj.apigw.tencentcs.com/release/get_redirect_url', {
        params: {
            url: encodeURIComponent(music.link)
        },
        responseType: 'text'
    })).data;
    if (/\/404$/.test(link)) {
        return await getRandomMusic();
    }
    music.link = link;
    musicTitleList.push(music.title);
    return music;
}
