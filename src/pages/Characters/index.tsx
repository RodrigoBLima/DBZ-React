import React, {useState, useEffect} from 'react';

import { Container } from './styles';
import Layout from '../../components/Layout';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
      
  }, [])

  return (
    <Layout>
      <Container>

      </Container>
    </Layout>
  );
};

export default Characters;
