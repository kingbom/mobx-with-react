import { extendObservable, toJS } from 'mobx';

class UserInfo {
    constructor() {
        extendObservable(this, {
            info: {
                userId: "",
                eventId: "",
                name: "",
                mobile: "",
                email: "",
                time: "",
                amount : "1",
                eventItemId: "",
                paymentType: ""
            }
        });
    }

    setDefaultInfo() {
        this.info = {
                userId: "",
                eventId: "",
                name: "",
                mobile: "",
                email: "",
                time: "",
                amount : "1",
                eventItemId: "",
                paymentType: ""
        };
    }

    setInfoValue(key, value) {
        this.info[key] = value;
    }

    setUserId(value){
        this.info.userId = value;
    }

    setEventId(value){
        this.info.eventId = value;
    }

    setPaymentType(value){
        this.info.paymentType = value;
    }

    setEventItemId(value){
        this.info.eventItemId = value;
    }

    getInfoJS() {
        return toJS(this.info);
    }
}

export default new UserInfo();