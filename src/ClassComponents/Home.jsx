import React, { Component } from 'react'
import NewsDetail from './NewsDetail'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            totalResults: 0,
            articles: []
        }
    }
    async getApiData() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=71fb92775180421398f900b65a4eaeb2`)
        response = await response.json()
        this.setState({
            totalResults: response.totalResults,
            articles: response.articles

        })
        // let filteredData = response.filter((q)=>{
        //     response.q.toLoweCase().includes('')
        // })

    }
    componentDidMount() {
        this.getApiData()
    }
    componentDidUpdate(oldData) {
        if (oldData.q !== this.props.q) {
            this.getApiData()
        }
    }
    render() {
        return (
            <>
                <h5 className='bg-primary py-2 mt-1 text-light text-center'> {this.props.q}</h5>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.articles.map((item, index) => {
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
                </div>
            </>
        )
    }
}
