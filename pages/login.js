import { Component } from "react"
import AdminLayoutHoc from '../components/Layout/AdminLayoutHoc'
import Router from 'next/router'
import axios from 'axios';
import { Cookies } from 'react-cookie';

const serverUrl = 'http://localhost:3001';

// set up cookies
const cookies = new Cookies();
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: cookies.get('token') || null
        }
    }

    onLoginClick = async () => {
        console.log("Login called");
        const response = await axios.get(serverUrl + '/api/login')
        const token = response.data.token;
        cookies.set('token', token);
        this.setState({
            token: token
        })

        Router.push('/admin');
    }

    render() {
        return (

            <div className="">
                <div className="login-page">
                    <div className="login-box">
                        <div className="login-logo">
                            <a href="../../index2.html">Ailem <b>Güvende</b></a>
                        </div>
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p className="login-box-msg">Başlamak İçin Giriş Yapın</p>

                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Beni Hatırla</label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" onClick={() => this.onLoginClick()} className="btn btn-primary btn-block">Giriş Yap</button>
                                    </div>
                                </div>
                                <p className="mb-1">
                                    <a href="forgot-password.html">Şifremi Unuttum</a>
                                </p>
                                <p className="mb-0">
                                    <a href="register.html" className="text-center">Kayıt Ol</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
}