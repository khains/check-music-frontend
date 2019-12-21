import React, { Component } from 'react';
import { Form, FormGroup, Label, CustomInput } from "reactstrap";
import Loading from "./Loading";
// import {post} from "axios";
import axios from "../axios";

export default class Check extends Component {
    state = {
        
    }

    render() {
        const loading = this.state.active && this.state.active==="enable" ? (
            <div>
                <Loading/>
            </div>
        ) : "";
        // const loading = (
        //     <div>
        //         <Loading/>
        //     </div>
        // )
        return (
            <div>
                <div className="text-align-center loading">
                    {loading}
                </div>
                <Form className="form"
                    encType="multipart/form-data"
                >
                    <FormGroup>
                        <Label className="title">Chọn bài nhạc cần kiểm tra</Label>
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
                                alert('Bạn chưa chọn file.')
                                return;
                            }
                            const formData = new FormData();
                            formData.append("mp32", this.state.file);
                            const config = {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }
                            axios.post('/api/check', formData, config)
                                .then((res) => {
                                    console.log(res.data);
                                    if (res.data.success) {
                                        alert(res.data.message)
                                        this.setState({ file: null, })
                                        window.location.href = ("/")
                                    }
                                    else {
                                        alert(res.data.message)
                                        this.setState({ file: null, })
                                        window.location.href = ("/")
                                    }
                                })
                            this.setState({
                                active: "enable",
                            })
                        }}
                        type="button"
                    >
                        Check
                    </button>
                </Form>
               
            </div>
        )
    }
}
