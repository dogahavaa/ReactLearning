import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const { id, title, price, description, category, image } = product;

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product-details/${id}`)
    }


    return (
        <Card sx={{ maxWidth: 250, height: 450, margin: 1 }} onClick={handleCardClick}>
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
                    <Typography gutterBottom variant="h6" component="div" sx={{ height: "75px" }}>
                        {
                            title.length > 30 ? `${title.slice(0, 30)}...` : title
                        }
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'darkorange', fontWeight: "bold", textAlign: "right" }}>
                        {price} ₺
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product