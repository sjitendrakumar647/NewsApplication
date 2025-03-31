import React, { useState, useEffect } from "react";

const News = ({ searchQuery }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetchNews(searchQuery);
    }
  }, [searchQuery]);

  const fetchNews = (query) => {
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=b9692c4d5e4d4114933ba42e2468b826`
    )
      .then((response) => response.json())
      .then((news) => {
        console.log(news.articles);
        setArticles(news.articles || []);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-lg border border-dark shadow-sm">
                {news.urlToImage && (
                  <img className="card-img-top" src={news.urlToImage} alt="News" />
                )}
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>

                  <div className="d-flex justify-content-between">
                    <a href={news.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Read More
                    </a>
                    
                    <p>
                      <strong>Author:</strong>{" "}
                      {news.author ? news.author : "No author"}
                    </p>

                  </div>

                  <p>{news.publishedAt}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-3">No news found...</p>
        )}
      </div>
    </div>
  );
};

export default News;
