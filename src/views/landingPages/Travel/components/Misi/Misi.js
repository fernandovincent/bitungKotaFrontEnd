/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const url = 'http://localhost:3001/tampilVisimisi';

const Misi = () => {
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
      <Box>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
          data-aos="fade-up"
        >
          MISI
        </Box>
        {lists.map((list) => {
          return (
            <Typography
              variant={'h6'}
              component={'p'}
              color={'textSecondary'}
              align={'center'}
              data-aos="fade-up"
            >
              {list.misi}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default Misi;
