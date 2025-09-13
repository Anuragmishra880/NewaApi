import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsDetail from './NewsDetail'

export default function Home(props) {
    const [totalResults, setTotalResults] = useState(0);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);






    async function getApiData() {
        try {
            let url = `https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&page=${page}&pageSize=24&apiKey=71fb92775180421398f900b65a4eaeb2`;
            let response = await fetch(url);
            response = await response.json();
            setTotalResults(response.totalResults)
            setArticles(response.articles)

        }

        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    let fetchData = async () => {
        try {
            let url = `https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&page=${page}&pageSize=24&apiKey=71fb92775180421398f900b65a4eaeb2`;
            let response = await fetch(url);
            response = await response.json();
            setTotalResults(response.totalResults)
            setArticles(response.articles.concat(response.articles))
            setPage(page + 1)

        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        getApiData()
    }, [props])

    return (
        <>
            <div className="container-fluid">
                <h5 className='bg-primary py-2 mt-1 text-light text-center text-capitalize'> {props.q}</h5>

                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchData} // User-Defined Function
                    hasMore={articles.length < totalResults}
                    loader={<div className=' my-3 text-center overflow-hide'>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    }>
                    <div className="row">
                        {articles.map((item, index) => {
                            return (

                                <NewsDetail key={index}
                                    title={item.title}
                                    author={item.author}
                                    source={item.source.name}
                                    description={item.description}
                                    date={item.publishedAt}
                                    url={item.url}
                                    pic={item.urlToImage}

                                />
                            )
                        })}

                    </div>
                </InfiniteScroll>
            </div >
        </>
    )
}

