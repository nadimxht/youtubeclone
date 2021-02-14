import React from 'react';
import Comments from './Comments'

const MainVideo = () => {
  return (
    
    <div className='col-md-7'>
      <div className='row'>
        <iframe
          title='react-summet'
          width='756'
          height='425'
          src='https://www.youtube.com/embed/tO8qHlr6Wqg?list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='row'>
        <h2>
          Requisite React: Learn how to use React Hooks, Suspense & JSX - Kent
          C. Dodds
        </h2>
      </div>
      
      <br/>
      <br/>
      <br/>
      <h2>Comment section </h2>
    <Comments />
    </div>
  );
};

export default MainVideo;