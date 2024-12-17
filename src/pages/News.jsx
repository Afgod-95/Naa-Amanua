import React from 'react';
import Footer from '../components/Footer';
import { getFormattedDate } from '../constant/FormatDate';
import NewsContainer from '../components/NewsContainer';
import { news } from '../news-data/singleNews';
import { Typography } from '@mui/material';

const News = () => {
    return (
        <>
            {news.map((item, index) => {
                // Extract the first description and the rest
                const [firstDescription, ...remainingDescriptions] = item.descriptions;

                return (
                    <NewsContainer
                        key={index}
                        title={item.title}
                        img={item.img}
                        date={getFormattedDate()}
                        desc1={<b style ={{color: "black"}}>{firstDescription}</b>}
                        desc2={
                            remainingDescriptions.map((desc, i) => (
                                <Typography key={i} style={{ marginBottom: '1rem', color: "black" }}>
                                    {desc}
                                </Typography>
                            ))
                        }
                        source={item.source}
                    />
                );
            })}
            <Footer />
        </>
    );
};

export default News;
