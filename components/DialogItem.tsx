import React from "react";
import {Card, CardContent, CardMedia, Fab, Tooltip, Typography} from "@mui/material";
import {Check} from "@mui/icons-material";
import {Video} from "./UiDialog"

interface ItemProperties {
    item: any
    onSelected: (item: any) => void
}

interface ItemState {
    item: Video
    onHover: boolean
}


function truncate(str: string, n: number) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
};

export default class DialogItem extends React.Component<ItemProperties, ItemState> {

    constructor(props: ItemProperties) {
        super(props);

        this.state = {
            item: props.item,
            onHover: false,

        }
    }

    render() {
        const {item, onHover} = this.state;
        return (
            <Card sx={{position: 'relative', cursor: 'pointer'}} onClick={() => this.props.onSelected(item)}
                  onMouseEnter={() => this.setState({onHover: true})}
                  onMouseLeave={() => this.setState({onHover: false})}>
                {onHover &&
                    <Fab sx={{position: 'absolute', top: '5px', right: '5px'}} size={'small'} color="default"
                         aria-label="Add">
                        <Check/>
                    </Fab>}
                {item.id.kind === 'youtube#video' ? <Tooltip
                    placement={"top"}
                    enterDelay={2000}
                    enterTouchDelay={2000}
                    title={
                        <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`}
                                sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                                style={{border: 'none'}}
                                allowFullScreen></iframe>
                    }
                >
                    <CardMedia
                        component="img"
                        image={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                    />
                </Tooltip> : <CardMedia
                    component="img"
                    image={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                    title={item.snippet.title}
                />}
                <CardContent>
                    <Typography height={50} variant="body1" color="text.primary"
                                dangerouslySetInnerHTML={{__html: `${item.snippet.channelTitle} &#x2022; ${truncate(item.snippet.title, 50)}`}}
                                sx={{overflow: 'hidden'}}/>
                    <Typography height={70} variant="body2" color="text.secondary">
                        {item.snippet.description}
                    </Typography>
                </CardContent>
            </Card>
        );
    }


}


