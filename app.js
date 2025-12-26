const express = require('express');
const path = require('path');
const app = express();

// CONFIGURACIÓN DE ARCHIVOS ESTÁTICOS
// Esto permite que los HTML encuentren sus estilos, scripts e imágenes
app.use(express.static(path.join(__dirname, 'limelight-html')));

// RUTAS EXPLÍCITAS A LOS ARCHIVOS HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'limelight-html', 'index.html'));
});

app.get('/Nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'limelight-html', 'about.html'));
});

app.get('/Contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'limelight-html', 'contact.html'));
});

app.get('/Galeria', (req, res) => {
    res.sendFile(path.join(__dirname, 'limelight-html', 'gallery.html'));
});

app.get('/Servicios', (req, res) => {
    res.sendFile(path.join(__dirname, 'limelight-html', 'service.html'));
});

app.get('/Testimonios', (req, res) => {
    res.sendFile(path.join(__dirname, 'limelight-html', 'testimonial.html'));
});

// Ruta dinámica: intenta resolver a un archivo <ruta>.html dentro de limelight-html
app.get('/:page', (req, res, next) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, 'limelight-html', `${page}.html`);
    res.sendFile(filePath, (err) => {
    if (err) next(); // pasa al handler 404 si el archivo no existe
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Limelight corriendo en http://localhost:${PORT}`);
});
