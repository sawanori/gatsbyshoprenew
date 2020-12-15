import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export function CollectionTile({
  destination,
  description,
  title,
  backgroundImage,
  sale,
}) {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title>通販</Title>

          <StyledLink to={destination}>こちらをクリック</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
}
