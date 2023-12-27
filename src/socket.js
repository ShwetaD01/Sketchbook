import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://sketchbook-server-5ulm.onrender.com' : 'http://localhost:5000'
export var socket = io.connect(URL, {reconnect: true});

// var socket = io.connect('http://localhost:8080', {reconnect: true})