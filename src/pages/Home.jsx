import React from 'react';
import ChartSection from '../components/chart/ChartSection';
import PlaylistSection from '../components/playlist/PlaylistSection';
import ColumnSection from '../components/column/ColumnSection';
import NewsSection from '../components/news/NewsSection';

const Home = () => {
  return (
    <>
      <ChartSection />
      <PlaylistSection />
      <ColumnSection />
      <NewsSection />
    </>
  );
};

export default Home;
