import type {NextPage} from 'next'
import React, {useState} from "react";
import UiExtension from "@bloomreach/ui-extension";
import CmsDialog from "../components/CmsDialog";
import {CircularProgress} from "@mui/material";

const Dialog: NextPage = () => {

    const [component, setComponent] = useState(<CircularProgress/>)

    try {
        UiExtension.register().then(ui => {
            setComponent(<CmsDialog ui={ui}/>)
        });
    } catch (e: any) {
        console.warn(e.message)
    }

    return (
        component
    )
}

export default Dialog
