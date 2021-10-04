/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Pic1 from '../../../../../assets/1583912506113.jpg';

const url = 'http://localhost:3001/tampilBerita';

// const theme = useTheme();
// class News extends Component {
//   state = {
//     beritas: [],
//   };

//   constructor() {
//     super();
//     this.getBeritas();
//   }

//   getBeritas = async () => {
//     try {
//       let data = await url
//         .get('/tampilBerita', {
//           params: {
//             _limit: 4,
//             _start: 0,
//           },
//         })
//         .then(({ data }) => data);
//       this.setState({ beritas: data });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   render() {
//     return (
//       <Box>
//         <Box marginBottom={4}>
//           <Typography
//             sx={{
//               textTransform: 'uppercase',
//               fontWeight: 'medium',
//             }}
//             gutterBottom
//             color={'secondary'}
//             align={'center'}
//           >
//             Berita
//           </Typography>
//           <Box
//             component={Typography}
//             fontWeight={700}
//             variant={'h3'}
//             align={'center'}
//             gutterBottom
//           >
//             Baca Berita Terbaru di Bitung
//           </Box>
//         </Box>
//         <Grid container spacing={4}>
//           {this.state.beritas.map((berita) => (
//             <Grid item xs={12} sm={6} md={3} key={berita.id_berita}>
//               <Box
//                 component={'a'}
//                 href={'#0'}
//                 display={'block'}
//                 width={'100%'}
//                 height={'100%'}
//                 sx={{
//                   textDecoration: 'none',
//                   transition: 'all .2s ease-in-out',
//                   '&:hover': {
//                     transform: `translateY(-${theme.spacing(1 / 2)})`,
//                   },
//                 }}
//               >
//                 <Box
//                   component={Card}
//                   width={'100%'}
//                   height={'100%'}
//                   data-aos={'fade-up'}
//                   borderRadius={3}
//                 >
//                   <CardMedia
//                     image={berita.cover_berita}
//                     title={berita.judul_berita}
//                     sx={{
//                       height: 140,
//                     }}
//                   />
//                   <Box component={CardContent}>
//                     <Box
//                       component={Typography}
//                       variant={'h6'}
//                       gutterBottom
//                       fontWeight={500}
//                       align={'left'}
//                     >
//                       {berita.judul_berita}
//                     </Box>
//                     <Typography
//                       align={'left'}
//                       variant={'body2'}
//                       color="textSecondary"
//                     >
//                       {berita.tgl_berita}
//                     </Typography>
//                   </Box>
//                   <Box component={CardActions} justifyContent={'flex-end'}>
//                     <Button size="small">Learn More</Button>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//           <Grid item container xs={12} justifyContent={'center'}>
//             <Button
//               color={'secondary'}
//               variant={'contained'}
//               size={'large'}
//               endIcon={<ChevronRightIcon />}
//             >
//               Read all
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   }
// }
const News = () => {
  const theme = useTheme();

  const [lists, setList] = useState([]);

  const getBerita = async () => {
    const response = await fetch(url);
    const lists = await response.json();
    setList(lists.values);
  };

  useEffect(() => {
    getBerita();
  }, []);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Berita
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Terbaru di Bitung
        </Box>
      </Box>
      <Grid container spacing={4}>
        {lists.map((list) => (
          <Grid item xs={12} sm={6} md={3} key={list.id_berita}>
            <Box
              component={'a'}
              href={'#0'}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
                borderRadius={3}
              >
                <CardMedia
                  image={list.cover_berita}
                  title={list.judul_berita}
                  sx={{
                    height: 140,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'left'}
                  >
                    {list.judul_berita}
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {list.tgl_berita}
                  </Typography>
                </Box>
                <Box component={CardActions} justifyContent={'flex-end'}>
                  <Button size="small">Lebih banyak</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container xs={12} justifyContent={'center'}>
          <Button
            color={'secondary'}
            variant={'contained'}
            size={'large'}
            endIcon={<ChevronRightIcon />}
          >
            Baca semua
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default News;
