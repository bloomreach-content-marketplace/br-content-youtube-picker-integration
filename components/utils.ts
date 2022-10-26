const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export function niceBytes(x: any) {
    let l = 0, n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
        n = n / 1024;
    }
    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

export function trim(string: string, length: number) {
    return string.length > length ? string.substring(0, length) + "..." : string;
}

export const userLocale =
    navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;


export interface UiConfig {
    apiKey: string
    channelId?: string
    property?: string
    type?: 'channel' | 'playlist' | 'video'
}

export const itemData: any[] =
    [
        {
            "_id": "632ab7b5a6da0f7eb716c7d0",
            "type": "form",
            "tags": [],
            "owner": "632ab753c82230607ad5bc87",
            "components": [{
                "label": "Name",
                "tableView": true,
                "key": "name",
                "type": "textfield",
                "input": true
            }, {
                "label": "Email",
                "tableView": true,
                "key": "email",
                "type": "textfield",
                "input": true
            }, {
                "label": "Message",
                "autoExpand": false,
                "tableView": true,
                "key": "message",
                "type": "textarea",
                "input": true
            }, {
                "type": "button",
                "label": "Submit",
                "key": "submit",
                "disableOnInvalid": true,
                "input": true,
                "tableView": false
            }],
            "revisions": "",
            "_vid": 0,
            "title": "Contact Form",
            "display": "form",
            "access": [{
                "roles": ["632ab76ceffe72b7be4821a1", "632ab76ceffe72bbd24821a6", "632ab76ceffe72707e4821ab"],
                "type": "read_all"
            }],
            "submissionAccess": [],
            "controller": "",
            "properties": {},
            "settings": {},
            "name": "contactForm",
            "path": "contactform",
            "project": "632ab76ceffe72722e48219a",
            "created": "2022-09-21T07:05:25.530Z",
            "modified": "2022-09-21T07:05:25.535Z",
            "machineName": "mohmrdooyjchssz:contactForm"
        },
    ];

export const itemDataList: any[] =

    [{
        "_id": "632ab7b5a6da0f7eb716c7d0",
        "type": "form",
        "tags": [],
        "owner": "632ab753c82230607ad5bc87",
        "components": [{
            "label": "Name",
            "tableView": true,
            "key": "name",
            "type": "textfield",
            "input": true
        }, {
            "label": "Email",
            "tableView": true,
            "key": "email",
            "type": "textfield",
            "input": true
        }, {
            "label": "Message",
            "autoExpand": false,
            "tableView": true,
            "key": "message",
            "type": "textarea",
            "input": true
        }, {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "input": true,
            "tableView": false
        }],
        "revisions": "",
        "_vid": 0,
        "title": "Contact Form",
        "display": "form",
        "access": [{
            "roles": ["632ab76ceffe72b7be4821a1", "632ab76ceffe72bbd24821a6", "632ab76ceffe72707e4821ab"],
            "type": "read_all"
        }],
        "submissionAccess": [],
        "controller": "",
        "properties": {},
        "settings": {},
        "name": "contactForm",
        "path": "contactform",
        "project": "632ab76ceffe72722e48219a",
        "created": "2022-09-21T07:05:25.530Z",
        "modified": "2022-09-21T07:05:25.535Z",
        "machineName": "mohmrdooyjchssz:contactForm"
    }, {
        "_id": "632ab76ceffe721f744821cd",
        "type": "form",
        "tags": [],
        "owner": null,
        "components": [{
            "type": "email",
            "persistent": true,
            "unique": false,
            "protected": false,
            "defaultValue": "",
            "suffix": "",
            "prefix": "",
            "placeholder": "Enter your email address",
            "key": "email",
            "lockKey": true,
            "label": "Email",
            "inputType": "email",
            "tableView": true,
            "input": true
        }, {
            "type": "password",
            "persistent": true,
            "protected": true,
            "suffix": "",
            "prefix": "",
            "placeholder": "Enter your password.",
            "key": "password",
            "lockKey": true,
            "label": "Password",
            "inputType": "password",
            "tableView": false,
            "input": true
        }, {
            "type": "button",
            "theme": "primary",
            "disableOnInvalid": true,
            "action": "submit",
            "block": false,
            "rightIcon": "",
            "leftIcon": "",
            "size": "md",
            "key": "submit",
            "tableView": false,
            "label": "Submit",
            "input": true
        }],
        "revisions": "",
        "_vid": 1,
        "title": "Admin Login",
        "name": "adminLogin",
        "path": "admin/login",
        "access": [{"roles": ["632ab76ceffe72707e4821ab"], "type": "read_all"}],
        "submissionAccess": [{"roles": ["632ab76ceffe72707e4821ab"], "type": "create_own"}],
        "machineName": "mohmrdooyjchssz:adminLogin",
        "project": "632ab76ceffe72722e48219a",
        "created": "2022-09-21T07:04:12.895Z",
        "modified": "2022-09-21T07:04:13.009Z"
    }, {
        "_id": "632ab76ceffe7206324821c6",
        "type": "form",
        "tags": [],
        "owner": null,
        "components": [{
            "type": "email",
            "persistent": true,
            "unique": false,
            "protected": false,
            "defaultValue": "",
            "suffix": "",
            "prefix": "",
            "placeholder": "Enter your email address",
            "key": "email",
            "lockKey": true,
            "label": "Email",
            "inputType": "email",
            "tableView": true,
            "input": true
        }, {
            "type": "password",
            "persistent": true,
            "protected": true,
            "suffix": "",
            "prefix": "",
            "placeholder": "Enter your password.",
            "key": "password",
            "lockKey": true,
            "label": "Password",
            "inputType": "password",
            "tableView": false,
            "input": true
        }, {
            "theme": "primary",
            "disableOnInvalid": true,
            "action": "submit",
            "block": false,
            "rightIcon": "",
            "leftIcon": "",
            "size": "md",
            "key": "submit",
            "label": "Submit",
            "input": true,
            "type": "button"
        }],
        "revisions": "",
        "_vid": 1,
        "title": "User Register",
        "name": "userRegister",
        "path": "user/register",
        "access": [{"roles": ["632ab76ceffe72707e4821ab"], "type": "read_all"}],
        "submissionAccess": [{"roles": ["632ab76ceffe72707e4821ab"], "type": "create_own"}],
        "machineName": "mohmrdooyjchssz:userRegister",
        "project": "632ab76ceffe72722e48219a",
        "created": "2022-09-21T07:04:12.884Z",
        "modified": "2022-09-21T07:04:12.989Z"
    }, {
        "_id": "632ab76ceffe722e3a4821bf",
        "type": "form",
        "tags": [],
        "owner": null,
        "components": [{
            "type": "email",
            "persistent": true,
            "unique": false,
            "protected": false,
            "defaultValue": "",
            "suffix": "",
            "prefix": "",
            "placeholder": "Enter your email address",
            "key": "email",
            "lockKey": true,
            "label": "Email",
            "inputType": "email",
            "tableView": true,
            "input": true
        }, {
            "type": "password",
            "persistent": true,
            "protected": true,
            "suffix": "",
            "prefix": "",
            "placeholder": "Enter your password.",
            "key": "password",
            "lockKey": true,
            "label": "Password",
            "inputType": "password",
            "tableView": false,
            "input": true
        }, {
            "type": "button",
            "theme": "primary",
            "disableOnInvalid": true,
            "action": "submit",
            "block": false,
            "rightIcon": "",
            "leftIcon": "",
            "size": "md",
            "key": "submit",
            "tableView": false,
            "label": "Submit",
            "input": true
        }],
        "revisions": "",
        "_vid": 1,
        "title": "User Login",
        "name": "userLogin",
        "path": "user/login",
        "access": [{"roles": ["632ab76ceffe72707e4821ab"], "type": "read_all"}],
        "submissionAccess": [{"roles": ["632ab76ceffe72707e4821ab"], "type": "create_own"}],
        "machineName": "mohmrdooyjchssz:userLogin",
        "project": "632ab76ceffe72722e48219a",
        "created": "2022-09-21T07:04:12.875Z",
        "modified": "2022-09-21T07:04:12.963Z"
    }];