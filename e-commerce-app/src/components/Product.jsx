import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Product({ product }) {

    const { id, title, price, description, category, image } = product;
    console.log(title)


    return (
        <Card sx={{ maxWidth: 250, height: 650, margin: 1 }}>
            <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <CardMedia
                        component="img"
                        height="275"
                        image={image}
                        sx={{
                            objectFit: 'contain',
                        }}
                    />
                </Box>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Detay
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product