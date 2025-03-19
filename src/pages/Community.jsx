import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: ${props => props.theme.spacing.xlarge} 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Community = () => {
  return (
    <PageContainer>
      <PageTitle>커뮤니티</PageTitle>
      <p>커뮤니티 페이지 내용이 여기에 표시됩니다.</p>
    </PageContainer>
  );
};

export default Community;
