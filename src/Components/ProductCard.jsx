import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const MediaCard = ({img, nombre, descripcion, unidades, precio, id}) => {
    return (
        <ul className='cards'>
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={img}
            title={nombre}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Unidades por paquete: {unidades} un.
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ${precio}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><Link to={`/productos/${nombre}`}>Ver más</Link></Button>
            <Button size="small">Cancelar</Button>
        </CardActions>
        </Card>
        </ul>
    );
}

export default MediaCard;