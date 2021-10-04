/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const url = 'http://localhost:3001/tampilVisimisi';

const Visi = () => {
  const [lists, setList] = useState([]);

  const getVisimisi = async () => {
    const response = await fetch(url);
    const lists = await response.json();
    setList(lists.values);
  };
  useEffect(() => {
    getVisimisi();
  }, []);

  return (
    <Box>
      <Box marginBottom={{ xs: 4, sm: 8, md: 12 }}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
          data-aos="fade-up"
        >
          VISI
        </Box>
        {lists.map((list) => {
          const { id_visimisi, visi, misi } = list;
          const isi = visi.replace(/(<([^>]+)>)/gi, '');
          return (
            <Typography
              variant={'h6'}
              component={'p'}
              color={'textSecondary'}
              align={'center'}
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

export default Visi;
