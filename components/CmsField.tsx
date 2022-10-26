import React from "react";
import {DialogProperties, DialogSize, UiScope} from "@bloomreach/ui-extension";
import UiField from "./UiField";
import {UiConfig} from "./utils";

interface CmsFieldState {
    item: any
    editMode: boolean
}

interface CmsFieldProperties {
    ui: UiScope
}

export default class CmsField extends React.Component<CmsFieldProperties, CmsFieldState> {
    private config: UiConfig;

    constructor(props: CmsFieldProperties) {
        super(props);

        this.config = JSON.parse(props.ui.extension.config) ?? {};

        this.state = {
            item: '',
            editMode: false,
        }
    }

    componentDidMount() {
        this.getInitialItems(this.props.ui).then(state => this.setState(state));
    }

    async getInitialItems(ui: UiScope) {
        let item = {editMode: false, item: ''}
        try {
            const brDocument = await ui.document.get();
            item = {
                editMode: brDocument.mode === 'edit',
                item: await ui.document.field.getValue()
            }
            return item
        } catch
            (error: any) {
            console.error('Failed to register extension:', error.message);
            console.error('- error code:', error.code);
        }
        return item;
    }

    async openDialog(ui: UiScope) {
        try {
            const dialogOptions: DialogProperties = {
                title: 'Select a Youtube object',
                url: './dialog',
                size: DialogSize.Medium,
                value: this.state.item
            };
            const response = await ui.dialog.open(dialogOptions) as unknown as string;
            this.setState({item: response});
            await ui.document.field.setValue(response);
        } catch (error: any) {
            if (error.code === 'DialogCanceled') {
                return;
            }
            console.error('Error after open dialog: ', error.code, error.message);
        }
    }


    render() {
        const {item, editMode} = this.state;
        return (<UiField
            key={editMode + item}
            item={item}
            onChange={(item) => this.setState({item: item}, () => this.props.ui.document.field.setValue(item))}
            editMode={editMode}
            onOpenDialog={() => this.openDialog(this.props.ui)}/>);

    }
}


