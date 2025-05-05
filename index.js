require('dotenv').config()
const http= require('http')

function requestController(req, res){
    console.log('Bienvenidos al curso de Mandarinas')
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>¡Aplicación desplegada en Render exitosamente!</h1>');
}

const server=http.createServer(requestController)

const PORT=process.env.PORT || 3000

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})