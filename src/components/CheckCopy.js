import React, { Component } from 'react';
import { Form, FormGroup, Label, CustomInput } from "reactstrap";
// import Loading from "./Loading";
// import {post} from "axios";
import axios from "../axios";

export default class Check extends Component {
    state = {
        type: "",

    }

    render() {
        const loading = this.state.active && this.state.active==="enable" ? (
            <span class="spinner-border spinner-border-sm"></span>
        ) : (
            <span>
                Kiểm tra
            </span>
        );
        // const loading = (
        //     <div>
        //         <Loading/>
        //     </div>
        // )
        return (
            <div>
                
                <Form className="form-form"
                    encType="multipart/form-data"
                >
                    <FormGroup>
                        <Label className="title">Chọn bài nhạc cần kiểm tra</Label>
                        <CustomInput className="input"
                            onChange={(evt) => {
                                evt.preventDefault();
                                // console.log(evt.target.files[0].type);
                                this.setState({
                                    file: evt.target.files[0],
                                    type: evt.target.files[0].type,
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
                            console.log(this.state.type);
                            if (!this.state.file) {
                                alert('Bạn chưa chọn file')
                                return;
                            }
                            if(this.state.type === "audio/mp3" || this.state.type === "audio/opus"
                            || this.state.type === "audio/flac" || this.state.type === "audio/webm"
                            || this.state.type === "audio/weba" || this.state.type === "audio/wav"
                            || this.state.type === "audio/ogg" || this.state.type === "audio/m4a"
                            || this.state.type === "audio/oga" || this.state.type === "audio/mid"
                            || this.state.type === "audio/amr" || this.state.type === "audio/aiff"
                            || this.state.type === "audio/wma" || this.state.type === "audio/au"
                            || this.state.type === "audio/aac"
                            ){
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
                            }
                            else{
                                alert('Bạn hãy chọn file audio')
                                return;
                            }
                        }
                        }
                        type="button"
                    >
                        {loading}
                    </button>
                </Form>
                {/* <div className="text-align-center loading">
                    {loading}
                </div> */}
            </div>
        )
    }
}
