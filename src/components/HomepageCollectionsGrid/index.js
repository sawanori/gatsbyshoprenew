import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections } from './styles';

export function HomepageCollectionsGrid({ collections }) {
  const saleCollection = collections?.find(
    collection => collection.title === 'SALE'
  );
  const remainingCollections = collections?.filter(
    collection => collection.title !== 'SALE'
  );

  return (
    <div>
      aaa
      {!!saleCollection && (
        <CollectionTile
          sale
          destination={`/all-products?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
        />
      )}
    </div>
  );
}
