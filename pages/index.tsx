import type {NextPage} from 'next'
import UiExtension from "@bloomreach/ui-extension";
import React, {useEffect, useState} from "react";
import {CircularProgress, NoSsr} from "@mui/material";
import CmsField from "../components/CmsField";

const Field: NextPage = () => {

    const [component, setComponent] = useState(<CircularProgress/>)

    useEffect(() => {
        try {
            UiExtension.register().then(ui => {
                setComponent(<CmsField ui={ui}/>);
            });
        } catch (e: any) {
            console.warn(e.message)
        }
    }, [])


    return <NoSsr>{component}</NoSsr>


}

export default Field
