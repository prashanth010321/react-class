import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source,} = this.props;

    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex',
                        justifyContent:'flex-end',
                        position:'abso;ute',
                        right:'0'}}>

          
        <span className=" badge rounded-pill bg-danger" > {source}</span>
        </div>
           <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/04/16/1600x900/kohli_ganguly_rift_1681661099518_1681661109544_1681661109544.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
 
              <p className="card-text">{description}</p>
              <p class="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
    </div>
</div>
    )
  }
}

export default NewsItem
