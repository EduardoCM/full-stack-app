import { Box, Toolbar, Typography } from "@mui/material";




export const Inicio = () => {
    var hoy = new Date();

    console.log('Creando mi primer componente en React: ' + hoy);
    return (
        <>
        <h1>Sitio de los 4 elementos </h1>

        <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Este es mi primer sitio creado con React en este taller en el que estamos aprendiendo juntos los fondamentos para formarnos como Java Full Stack Developer
        </Typography>
        <Typography>
          Nombre: Eduardo Castillo Mendoza 
        </Typography>
        <Typography>
          Planeta: Tierra 
        </Typography>
        <Typography>
          Pais: México 
        </Typography>
      </Box>
        </>
    )
}