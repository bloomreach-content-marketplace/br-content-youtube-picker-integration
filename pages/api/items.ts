// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const key = (req.query.token ?? '') as string
    const q = (req.query.query ?? '') as string
    const channelId = (req.query.channelId ?? '') as string
    const maxResult = (req.query.maxResult ?? '') as string
    const pageToken = (req.query.pageToken ?? '') as string
    if (!key || !q) {
        // @ts-ignore
        res.status(403).json('KEY AND/OR QUERY NOT PROVIDED');
    } else {
        const parameters = new URLSearchParams({
            key,
            q,
            channelId,
            maxResult,
            pageToken,
            'part': 'snippet,id'
        }).toString();
        const url = `https://youtube.googleapis.com/youtube/v3/search?${parameters}`;
        const response = await axios.get(url)
        res.status(response.status).json(response.data)
    }

}
