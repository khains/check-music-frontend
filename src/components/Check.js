import React, { Component } from 'react';
import { Form, FormGroup, Label, CustomInput } from "reactstrap";
import {post} from "axios";

export default class Check extends Component {
    state = {
       
    }

    render() {
        
        return (
            <Form className="form"
                encType="multipart/form-data"
            >
                <FormGroup>
                    <Label for="avatar">Chọn bài nhạc cần kiểm tra</Label>
                    <CustomInput className="input"
                        onChange={(evt) => {
                            evt.preventDefault();
                            this.setState({
                                file: evt.target.files[0],
                            })
                        }}
                        type="file" name="mp3" id="mp3"
                        placeholder="chọn file"/>
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
                        post('http://localhost:6969/api/check', formData, config)
                            .then((res) => {
                                if (res.data.success) {
                                    alert(res.data.message)
                                    this.setState({file: null,})
                                    window.location.href = ("/")
                                }
                                else{
                                    alert(res.data.message)
                                    this.setState({file: null,})
                                    window.location.href = ("/")
                                }
                            })           
                    }}
                    type="button"
                >
                    Check
                </button>
            </Form>
        )
    }
}
