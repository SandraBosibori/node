const http= require('node:http')

const server=http.createServer((req,res)=>{
    if (req.url=== '/'){
        res.end('<h1>Hello World</h1>')
    }else if (req.url==='/about'){
        res.end('This is the about page')
    }
})

server.listen(1000, ()=>{
    console.log('Server is running on port http://localhost:1000')
    
})