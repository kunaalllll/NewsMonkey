import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Suspects arrested over Pakistan mosque blast, police focus on how bomber got in - Reuters",
      description:
        "Police investigating a suicide bombing that killed more than 100 people at a Pakistan mosque said on Tuesday that several people had been arrested, and they could not rule out the possibility that the bomber had internal assistance evading security checks.",
      url: "https://www.reuters.com/world/asia-pacific/death-toll-pakistan-mosque-blast-rises-83-hospital-spokesperson-2023-01-31/",
      urlToImage:
        "https://www.reuters.com/resizer/-0cRmQfXYCqyL_V6VAY9bOS7PHU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2G67MQA2XVMVXKXDM4VTM37JDY.jpg",
      publishedAt: "2023-02-01T09:44:00Z",
      content:
        "PESHAWAR, Pakistan, Feb 1 (Reuters) - Police investigating a suicide bombing that killed more than 100 people at a Pakistan mosque said on Tuesday that several people had been arrested, and they coul… [+2629 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Elizabeth Wolfe, Paradise Afshar, Tina Burnside",
      title:
        "Report: Man accused of kidnapping, torturing Oregon woman dies from self-inflicted gunshot wound following police standoff - CNN",
      description:
        "A week after authorities discovered a woman bound and beaten in a southwest Oregon home, the kidnapping suspect has died from a self-inflicted gunshot wound, a CNN affiliate reports.",
      url: "https://www.cnn.com/2023/02/01/us/oregon-kidnapping-suspect-benjamin-foster-dead-wednesday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230201090149-grants-pass-standoff-013123.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-01T09:19:00Z",
      content:
        "A week after authorities discovered a woman bound and beaten in a southwest Oregon home, the kidnapping suspect has died from a self-inflicted gunshot wound, a CNN affiliate reports. \r\nBenjamin Obadi… [+3443 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Olivia Wilde, Jason Sudeikis Fighting Over Child Support Issues - TMZ",
      description:
        "Olivia Wilde and Jason Sudeikis may have been hugging recently, but not because they've resolved their conflicts -- TMZ's learned there's a dogfight over how child support will be handled.",
      url: "https://www.tmz.com/2023/02/01/olivia-wilde-jason-sudeikis-child-support-child-custody-battle-court-la-new-york/",
      urlToImage:
        "https://imagez.tmz.com/image/2d/16by9/2023/01/31/2d56637643e7448a907a3d588dfc1ee8_xl.jpg",
      publishedAt: "2023-02-01T09:00:00Z",
      content:
        "Olivia Wilde and Jason Sudeikis may have been hugging recently, but not because they've resolved their conflicts -- TMZ's learned there's a dogfight over how child support will be handled.\r\nSources w… [+1353 chars]",
    },
    {
      source: {
        id: null,
        name: "The Times of Israel",
      },
      author: null,
      title:
        "Netanyahu says he wants to hear ‘counter offers’ to proposed judicial overhaul - The Times of Israel",
      description:
        "In wide-ranging CNN interview, PM insists radical changes will 'correct' Israeli democracy, vows to thwart Iran, says he's 'looking into' giving Ukraine 'other kinds of aid'",
      url: "https://www.timesofisrael.com/netanyahu-says-he-wants-to-hear-counteroffers-to-proposed-judicial-overhaul/",
      urlToImage:
        "https://static.timesofisrael.com/www/uploads/2023/02/Screenshot-2023-01-31-at-10.02.50-PM-e1675224422536-1024x640.png",
      publishedAt: "2023-02-01T07:38:44Z",
      content:
        "Prime Minister Benjamin Netanyahu said Tuesday that he is ready to “hear counter offers” to his contentious plan to radically overhaul Israel’s independent judiciary, while still defending the propos… [+15319 chars]",
    },
  ];

  constructor() {
    super();
    console.log("hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
