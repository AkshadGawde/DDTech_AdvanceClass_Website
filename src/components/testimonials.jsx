import React, { useState, useEffect } from "react";

export const Testimonials = (props) => {
  const [chunkedData, setChunkedData] = useState([]);
  const [displayedRows, setDisplayedRows] = useState(2);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (props.data) {
      const chunked = chunkArray(props.data, 3);
      setChunkedData(chunked.map(chunk => chunk.map(d => ({ ...d, expanded: false }))));
    }
  }, [props.data]);

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  };

  const handleReadMore = (snippetIndex, chunkIndex) => {
    const updatedChunkedData = [...chunkedData];
    updatedChunkedData[chunkIndex][snippetIndex].expanded = true;
    setChunkedData(updatedChunkedData);
  };

  const handleReadLess = (snippetIndex, chunkIndex) => {
    const updatedChunkedData = [...chunkedData];
    updatedChunkedData[chunkIndex][snippetIndex].expanded = false;
    setChunkedData(updatedChunkedData);
  };

  const handleShowMore = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setDisplayedRows(prevRows => prevRows + 1);
    }, 500); // Adjust the timeout to match the animation duration
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our students say</h2>
        </div>
        {chunkedData.slice(0, displayedRows).map((chunk, chunkIndex) => (
          <div key={`row-${chunkIndex}`} className={`row ${showAnimation && 'fade-in'}`}>
            {chunk.map((d, snippetIndex) => (
              <div key={`${d.name}-${snippetIndex}`} className="col-md-4">
                <div className="testimonial">
                  <div className="testimonial-image">
                    <img src={d.thumbnail} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>
                      {d.expanded
                        ? d.snippet
                        : d.snippet.split(" ").slice(0, 30).join(" ")}
                      {d.snippet.split(" ").length > 30 && !d.expanded && (
                        <button
                          onClick={() => handleReadMore(snippetIndex, chunkIndex)}
                          className="read-more-button"
                        >
                          Read More
                        </button>
                      )}
                      {d.expanded && (
                        <button
                          onClick={() => handleReadLess(snippetIndex, chunkIndex)}
                          className="read-less-button"
                        >
                          Read Less
                        </button>
                      )}
                    </p>
                    <div className="testimonial-meta"> - {d.name} </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        {displayedRows < chunkedData.length && (
          <div className="text-center">
            <button className="show-more-button" onClick={handleShowMore}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};