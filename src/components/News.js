import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
   country: 'in',
   pageSize: 8,
   category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  articles= [
    {
   "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Vladimir Kara-Murza: Russian opposition figure jailed for 25 years - BBC",
    "description": "The former journalist denies the charges against him, which are linked to his anti-war comments.",
    "url": "https://www.bbc.com/news/world-europe-65297003",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B55C/production/_129382464_gettyimages-1243865891.jpg",
    "publishedAt": "2023-04-17T10:09:49Z",
    "content": "Opposition activist Vladimir Kara-Murza has been sentenced to 25 years in jail in Russia for charges linked to his criticism of the war in Ukraine.\r\nHe was found guilty of treason, spreading \"false\" … [+2802 chars]"
    },
    {
   "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Elizabeth Wolfe",
    "title": "Alabama investigators piecing together details of Sweet 16 birthday party shooting that left 4 dead and dozens injured - CNN",
    "description": "After a Sweet 16 birthday celebration was shattered by a shooting over the weekend that left four people dead and at least 28 others injured, investigators in Dadeville, Alabama, are still working to determine what caused the chaos.",
    "url": "https://www.cnn.com/2023/04/17/us/dadeville-alabama-birthday-party-shooting-monday/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230416212419-12-dadeville-alabama-shooting-vigil.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-04-17T10:02:00Z",
    "content": "After a Sweet 16 birthday celebration was shattered by a shooting over the weekend that left four people dead and at least 28 others injured, investigators in Dadeville, Alabama, are still working to… [+5972 chars]"
    },
    {
   "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Rashard Rose",
    "title": "Tennessee Air National Guardsman applied to be a hitman online, the FBI says. It was a spoof website and now he's facing charges - CNN",
    "description": "A Tennessee Air National Guardsman is facing charges after applying to be a hitman on a spoof \"rent-a-hitman\" website, according to the Department of Justice.",
    "url": "https://www.cnn.com/2023/04/17/us/tennessee-air-national-guardsman-hitman-online-application/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/201014194936-fbi-seal-logo.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-04-17T09:06:00Z",
    "content": "A Tennessee Air National Guardsman is facing charges after applying to be a hitman on a spoof rent-a-hitman website, according to the Department of Justice.\r\nJosiah Ernesto Garcia, 21, was charged Th… [+3251 chars]"
    },
    {
   "source": {
    "id": null,
    "name": "WPVI-TV"
    },
    "author": null,
    "title": "Band of gunmen shoot up La Palma resort in central Mexico, killing 6 adults and 7-year-old - WPVI-TV",
    "description": "A band of gunmen invaded a resort where dozens of vacationers were spending the weekend in central Mexico and opened fire, killing six adults and a 7-year-old, authorities said.",
    "url": "https://6abc.com/la-palma-resort-shooting-central-mexico-gunmen-shootout-cortazar/13138640/",
    "urlToImage": "https://cdn.abcotvs.com/dip/images/13140234_041623-kabc-7pm-mexico-resort-shooting-vid.jpg?w=1600",
    "publishedAt": "2023-04-17T08:58:29Z",
    "content": "MEXICO CITY -- A band of gunmen invaded a resort where dozens of vacationers were spending the weekend in central Mexico and opened fire, killing six adults and a 7-year-old, authorities said.\r\nNOTE:… [+1009 chars]"
    },
    {
   "source": {
    "id": null,
    "name": "The Desert Sun"
    },
    "author": "Tom Coulter",
    "title": "Coachella 2023: Frank Ocean forced to cut long-awaited set short due to curfew rules - Desert Sun",
    "description": "On Sunday, Ocean became the first openly gay man to headline the globally beloved festival.",
    "url": "https://www.desertsun.com/story/life/entertainment/music/coachella/2023/04/17/coachella-2023-frank-ocean-plays-new-music-cuts-set-short-due-to-curfew/70102269007/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2023/04/17/PPAS/751506a6-b2bd-451c-8cc8-287353d8e428-20230416_CoachellaSunday_050.jpg?crop=2999,1687,x0,y145&width=2999&height=1687&format=pjpg&auto=webp",
    "publishedAt": "2023-04-17T08:40:34Z",
    "content": "After six years without a public performance, Frank Ocean returned to the spotlight Sunday night, closing out the Coachella Valley Music and Arts Festivals first weekend with a set that had intimate … [+4382 chars]"
    },
  ]
  constructor(props){
    super(props);
    console.log("Hello I am a constructor from News component");
     this.state = {
       articles:this.articles,
       loading: true,
       page:1,
       totalResults: 0
     

     }
     document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
      
}
async updateNews(){
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  this.props.setProgress(50);
  let parsedData = await data.json()
  this.props.setProgress(70);
  console.log(parsedData);
 this.setState({articles:parsedData.articles,
   totalResults:parsedData.totalResults,
   loading:false,
   
  })
  this.props.setProgress(100);

}
async componentDidMount(){
  this.updateNews();

}
handlePrevClick = async () =>{
this.setState({page:this.state.page - 1});
this.updateNews();
}
handleNextClick = async () =>{
this.setState({page:this.state.page + 1})
this.updateNews();
}
fetchMoreData = async () => {
  this.setState({page: this.state.page + 1})
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
 this.setState({articles:this.state.articles.concat(parsedData.articles),
   totalResults:parsedData.totalResults
   
   
  })

};

    
  render() {
    return (
      <>
        <h1 className='text-center' style={{margin:'35px 0px;'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
       {this.state.loading && <Spinner />} 
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>

       <div className='container'>
      <div className='row'>
        { this.state.articles.map((element)=>{
          return  <div className='col-md-4' key={element.url} >
                  <NewsItem  title={element.title?element.title.slice(0):""} description={element.description?element.description.slice(0):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
        })}
        
      </div>
      </div>
      </InfiniteScroll>
     
      </>
    )
  }
}


export default News
