const express = require('express');
const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware');
var cors = require('cors')
const app = express();

app.use(cors())

app.use('/', createProxyMiddleware({ target: 'https://restful-booker.herokuapp.com', 
changeOrigin: true, 
logger: console ,
on: {
  proxyRes: responseInterceptor(async (buffer, proxyRes, req, res) => {
    // log original response
    // console.log(`[DEBUG] original response:\n${buffer.toString('utf8')}`);
    console.log(res, req)

    
    })},

    proxyReq: (req,res)=>{console.log(req,res)}
}));
app.listen(3001);