/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const url = 'http://localhost:3001/tampilSejarah';

const Sejarah = () => {
  const [lists, setList] = useState([]);

  const getSejarah = async () => {
    const response = await fetch(url);
    const lists = await response.json();
    setList(lists.values);
  };
  useEffect(() => {
    getSejarah();
  }, []);

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Sejarah Kota Bitung
        </Typography>
      </Box>
      <Box>
        {lists.map((list) => {
          const { id_sejarah, sejarah } = list;
          const isi = sejarah.replace(/(<([^>]+)>)/gi, '');
          return (
            <Typography
              mt={5}
              variant={'h6'}
              component={'p'}
              color={'textSecondary'}
              align={'left'}
              data-aos="fade-up"
            >
              {isi}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default Sejarah;
