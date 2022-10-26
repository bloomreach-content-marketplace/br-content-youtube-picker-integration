import React from "react";
import {AppBar, CircularProgress, Dialog, DialogContent, Fade, Grid, TextField, Toolbar} from "@mui/material";
import axios from "axios";
import DialogItem from "./DialogItem";

export interface Id {
    kind: string;
    videoId: string;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface High {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
}

export interface Video {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
}

interface DialogState {
    items: Array<any>
    isLoading: boolean
    keyword?: string
    nextPageToken?: string
}

interface DialogProperties {
    onOk: (item: any) => void
    apiKey: string
    channelId?: string
    type?: 'channel' | 'playlist' | 'video'
    property?: string
}

function resolve(path: string, obj: any) {
    return path.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : null
    }, obj || self)
}


export default class UiDialog extends React.Component<DialogProperties, DialogState> {

    constructor(props: DialogProperties) {
        super(props);

        this.state = {
            items: [],
            isLoading: true
        }
    }


    componentDidMount() {
        axios.get(this.getYoutubeUrl()).then(response => this.setState({
            items: response.data.items,
            isLoading: false,
            nextPageToken: response.data.nextPageToken
        }));
    }

    onScroll(event: any) {
        const container = event.target;
        const scrollY = container.scrollHeight - container.scrollTop;
        const height = container.offsetHeight;
        const offset = height - scrollY;

        if ((offset >= -120) && !this.state.isLoading) {
            this.nextPage()
        }
    }

    getYoutubeUrl(): string {
        const {keyword: q, nextPageToken: pageToken} = this.state;
        const {apiKey: key, channelId, type} = this.props

        const parameters = new URLSearchParams({
            key,
            q: q ?? '',
            channelId: channelId ?? '',
            maxResults: '24',
            pageToken: pageToken ?? '',
            'part': 'snippet,id',
            type: type ?? 'video'
        }).toString();
        return `https://youtube.googleapis.com/youtube/v3/search?${parameters}`;
    }


    render() {
        const {items, isLoading} = this.state;
        return (<Dialog fullScreen open={true}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="search"
                        style={{
                            minWidth: 200
                        }}
                        label={"Search"}
                        placeholder={'press enter to search'}
                        type="text"
                        fullWidth={true}
                        onKeyDown={event => {
                            event.key === 'Enter' && this.onKeyWordChange()
                        }}
                        onChange={event => {
                            this.setState({keyword: event.currentTarget.value})
                        }}
                    />
                </Toolbar>
            </AppBar>
            <DialogContent sx={{height: '100%'}} onScroll={event => this.onScroll(event)}>
                {isLoading && <Fade
                    in={isLoading}
                    style={{
                        position: 'absolute',
                        zIndex: 9999999,
                        transitionDelay: isLoading ? '800ms' : '0ms',
                    }}
                    unmountOnExit>
                    <CircularProgress/>
                </Fade>}
                <Grid container rowSpacing={1} columnSpacing={1}>
                    {items.map((item: Video, index) => {
                        return (<Grid key={index} item xs={6} md={4} lg={3}>
                            <DialogItem item={item}
                                        onSelected={(item) => this.props.onOk(resolve(this.props.property ?? 'id.videoId', item))}/></Grid>)
                    })}
                </Grid>
            </DialogContent>
        </Dialog>);
    }


    onKeyWordChange() {
        this.setState({
            items: [],
            isLoading: true
        }, () => {
            axios.get(this.getYoutubeUrl()).then(response => this.setState((state) => ({
                items: response.data.items,
                isLoading: false,
                nextPageToken: response.data.nextPageToken
            })));
        })


    }

    nextPage() {
        this.setState({
            isLoading: true,
        }, () => {
            axios.get(this.getYoutubeUrl()).then(response => this.setState((state) => ({
                items: state.items.concat(response.data.items),
                isLoading: false,
                nextPageToken: response.data.nextPageToken
            })));
        })
    }


}


