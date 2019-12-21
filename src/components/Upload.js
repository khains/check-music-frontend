import React, { Component } from 'react';
import { Form, FormGroup, Label, CustomInput } from "reactstrap";
import Loading from "./Loading";
// import {post} from "axios";
import axios from "../axios"

export default class ConvertMd5 extends Component {
    state = {

    }

    render() {
        const loading = this.state.active && this.state.active === "enable" ? (
            <div>
                <Loading />
            </div>
        ) : "";
        return (
            <div className="container form">
                <div className="text-align-center loading">
                    {loading}
                </div>
                <Form className="form"
                    encType="multipart/form-data"
                >
                    <FormGroup>
                        <Label className="title">Chọn bài nhạc cần upload</Label>
                        <CustomInput className="input"
                            onChange={(evt) => {
                                evt.preventDefault();
                                this.setState({
                                    file: evt.target.files[0],
                                })
                            }}
                            type="file" name="mp3" id="mp3"
                            placeholder="chọn file"
                            accept="audio/*"
                        />
                    </FormGroup>
                    <button
                        className="btn btn-primary"
                        onClick={(evt) => {
                            evt.preventDefault()
                            if (!this.state.file) {
                                alert('Bạn chưa chọn file')
                                return;
                            }
                            const formData = new FormData();
                            formData.append("mp32", this.state.file);
                            const config = {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    "Accept": "application/json",
                                }
                            }
                            axios.post('/api/md5', formData, config)
                                .then((res) => {
                                    console.log(res.data);
                                    if (res.data.success) {
                                        alert(res.data.message)
                                        this.setState({ file: null, })
                                        window.location.href = ("/upload")
                                    }
                                    else {
                                        alert("File đã được tải lên, hãy chọn file khác!!!")
                                        this.setState({ file: null, })
                                        window.location.href = ("/upload")
                                    }
                                })
                            this.setState({
                                active: "enable",
                            })
                        }}
                        type="button"
                    >
                        UPLOAD
                    </button>
                </Form>
                
            </div>

        )
    }
}
