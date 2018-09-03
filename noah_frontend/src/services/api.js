import axios from 'axios'

import {setConstantChoices} from '../actions/choices'

export class APIService {
    constructor(dispatch) {
        this.dispatch = dispatch
    }

    static get baseUrl() {
        return `/api/v1/`
    }

    get server() {
        const request = axios.create({
            baseURL: APIService.baseUrl,
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        request.interceptors.response.use(
            resp => {
                console.log(resp)
                return Promise.resolve(resp)
            },
            error => {
                let msg = error.message
                let status = 500

                if (error.response) {
                    msg = error.response.data.msg || error.response.statusText
                    status = error.response.data.status || error.response.statusCode
                } else if (error.request) {
                    msg = "A request was made, but no response was given"
                }

                alert(msg)
                console.log({msg, status})
                return Promise.reject({msg, status})
            })
        return request
    }

    getFormValues() {
        return this.server.post("init/")
            .then(resp => {
                this.dispatch(setConstantChoices(resp.data))
            })
            .catch(err => {})
    }

    registerDonation(payload, form, push) {
        return this.server.post("donation.register/", payload)
            .then(resp => {
                alert(resp.data.msg)
                form.reset()
                push('/how-to-donate')
            })
            .catch(err => {})
    }
}
