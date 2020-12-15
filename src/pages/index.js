import React from 'react';
import {Link} from 'gatsby'
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
  FrontPanel
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO description="The MadHatter store homepage" title="Homepage" />
      <FrontPanel/>
     

    </Layout>
  );
};

export default IndexPage;
