import React from "react";
import {UiConfig} from "./utils";
import {UiScope} from "@bloomreach/ui-extension";
import UiDialog from "./UiDialog";

interface CmsDialogState {
    item?: any

}

interface CmsDialogProperties {
    ui: UiScope
}

export default class CmsDialog extends React.Component<CmsDialogProperties, CmsDialogState> {
    private config: UiConfig;

    constructor(props: CmsDialogProperties) {
        super(props);

        this.config = JSON.parse(props.ui.extension.config) ?? {};
    }

    render() {

        return (<UiDialog
            onOk={items => {
                this.props.ui.dialog.close(items)
            }} key={this.config.apiKey} apiKey={this.config.apiKey}
            channelId={this.config.channelId} />);
    }
}


