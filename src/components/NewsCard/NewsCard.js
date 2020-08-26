import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea href={url} target="_blank">
                    <CardMedia className={classes.media} image={urlToImage || 'https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_86470279_stock-vector-breaking-news-background-world-global-tv-news-banner-design.html&psig=AOvVaw1K1fas6Ra0zBurHifYBILc&ust=1597144593177000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND5zLvBkOsCFQAAAAAdAAAAABAi'} />
                    <div className={classes.details}>
                        <Typography varient="body2" color="textSecondary" component="h3">{(new Date(publishedAt)).toDateString()}</Typography>
                        <Typography varient="body2" color="textSecondary" component="h3">{source.name}</Typography>
                    </div>
                    <Typography className={classes.title} gutterBottom variant="h6">{title}</Typography>
                    <CardContent>
                        <Typography varient="body2" color="textSecondary" component="p" >{description}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Button size="samll" color="primary">Learn More</Button>
                    <Typography varient="h5" color="textSecondary">{ i + 1 }</Typography>
                </CardActions>
            </Card>
        </div>
    )
}

export default NewsCard
