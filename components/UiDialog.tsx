import React from "react";
import {AppBar, CircularProgress, Dialog, DialogContent, Fade, List, ListItem, TextField, Toolbar} from "@mui/material";
import DialogItem from "./DialogItem";
import axios from "axios";

interface DialogState {
    items: Array<any>
    isLoading: boolean
    keyword?: string
}

interface DialogProperties {
    onOk: (items: Array<any>) => void
    token: string
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
        axios.get(`/api/items?token=${this.props.token}`).then(response => this.setState({
            items: response.data.items,
            isLoading: false
        }));
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
                        type="text"
                        fullWidth={true}
                        onChange={event => this.onKeyWordChange(event.currentTarget.value)}
                    />
                </Toolbar>
            </AppBar>
            <DialogContent sx={{height: '100%'}}>
                {isLoading && <Fade
                    in={isLoading}
                    style={{
                        zIndex: 9999999,
                        transitionDelay: isLoading ? '800ms' : '0ms',
                    }}
                    unmountOnExit>
                    <CircularProgress/>
                </Fade>}
                <List>
                    {items && items.map((item, index) => {
                            return (
                                <ListItem sx={{width: 'auto', display: 'inline-block'}} key={item.title}>
                                    <DialogItem item={item}
                                                onSelected={(itemSelected) => {
                                                    this.props.onOk([{
                                                        content: itemSelected,
                                                        embed: btoa(unescape(encodeURIComponent(`<div data-tf-widget="${itemSelected.id}"></div><script src="//embed.typeform.com/next/embed.js"></script>`)))
                                                    }])
                                                }}/>
                                </ListItem>
                            )
                        }
                    )}
                </List>
            </DialogContent>
        </Dialog>);
    }


    onKeyWordChange(keyword: string) {
        axios.get(`/api/forms?token=${this.props.token}&query=${keyword}`).then(response => this.setState({
            items: response.data.items,
            isLoading: false
        }));
    }


}


