import React from "react";
import {Button, Grid} from "@mui/material";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';


interface FieldState {
    item: any
    editMode: boolean
}

interface FieldProperties {
    onChange: (item: any) => void
    onOpenDialog: (item: any) => void
    editMode: boolean
    item: any
}

export default class UiField extends React.Component<FieldProperties, FieldState> {

    constructor(props: FieldProperties) {
        super(props);

        this.state = {
            item: this.props.item,
            editMode: props.editMode,
        }
    }


    render() {
        const {editMode, item} = this.state;
        return (
            <>
                <Grid container sx={{minWidth: '375px'}} spacing={1}>
                    {editMode &&
                        <Grid sx={{paddingLeft: 0}} item>
                            <List sx={{paddingY: 0, paddingLeft: 0}}>
                                <ListItem sx={{paddingLeft: 0}}>
                                    <Button size={"small"} sx={{display: editMode ? 'block' : 'none'}}
                                            variant="outlined"
                                            onClick={() => {
                                                this.props.onOpenDialog(item)
                                            }}>Select</Button>

                                </ListItem>
                                <ListItem sx={{paddingLeft: 0}}>
                                    <Button size={"small"} sx={{display: editMode ? 'block' : 'none'}}
                                            variant="outlined"
                                            onClick={() => {
                                                this.props.onChange('')
                                            }}>Clear</Button>
                                </ListItem>
                            </List>
                        </Grid>}
                    <Grid item xs={8} sx={{paddingLeft: 0}}>
                        {(item && (typeof item === 'string' || item instanceof String)) &&
                            <iframe src={`https://www.youtube.com/embed/${item}`}
                                    sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                                    style={{border: 'none'}}
                                    allowFullScreen></iframe> }
                    </Grid>
                </Grid>
            </>);
    }


}