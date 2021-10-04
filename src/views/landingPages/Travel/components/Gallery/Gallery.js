import React, { useState } from 'react';
import Slider from 'react-slick';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';

const photos = [
  {
    src:
      'https://indonesia.go.id/assets/upload/headline//1569987076_Festival_Pesona_Selat_Lembeh.jpg',
    title: 'New York',
  },
  {
    src:
      'https://cetbang.com/wp-content/uploads/2021/01/Cara-Membersihkan-Ikan-Cakalang.jpg',
    title: 'Paris',
  },
  {
    src:
      'https://alamendah.files.wordpress.com/2014/08/tarsius-lariang.jpg?w=400&h=366',
    title: 'Barcelona',
  },
  {
    src:
      'https://ksmtour.com/media/images/articles8/selat-lembeh-sulawesi-utara.jpg',
    title: 'Prague',
  },
  {
    src:
      'https://ceritaeka.files.wordpress.com/2016/10/tugu-trikora-bitung.jpg',
    title: 'Milan',
  },
  // {
  //   src: 'https://assets.maccarianagency.com/backgrounds/img18.jpg',
  //   title: 'Yerevan',
  // },
  // {
  //   src: 'https://assets.maccarianagency.com/backgrounds/img13.jpg',
  //   title: 'New York',
  // },
  // {
  //   src: 'https://assets.maccarianagency.com/backgrounds/img14.jpg',
  //   title: 'Paris',
  // },
  // {
  //   src: 'https://assets.maccarianagency.com/backgrounds/img15.jpg',
  //   title: 'Barcelona',
  // },
  // {
  //   src: 'https://assets.maccarianagency.com/backgrounds/img16.jpg',
  //   title: 'Prague',
  // },
  // {
  //   src: 'https://assets.maccarianagency.com/backgrounds/img17.jpg',
  //   title: 'Milan',
  // },
  // {
  //   src: 'https://assets.maccarianagency.com/backgrounds/img18.jpg',
  //   title: 'Yerevan',
  // },
];

const Gallery = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
          Galeri
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Explore Bitung
        </Box>
        <Box
          marginTop={2}
          display={'flex'}
          justifyContent={'center'}
          data-aos="fade-up"
        >
          <Button
            color={'primary'}
            variant={'contained'}
            size={'large'}
            onClick={() => openLightbox(0)}
          >
            Lihat
          </Button>
        </Box>
      </Box>
      <Slider {...sliderOpts}>
        {photos.map((item, i) => (
          <Box key={i} paddingX={2}>
            <Box
              component={Card}
              width={'100%'}
              height={'100%'}
              borderRadius={3}
              onClick={() => openLightbox(i)}
              sx={{
                cursor: 'pointer',
              }}
            >
              <CardMedia
                image={item.src}
                title={item.title}
                sx={{
                  height: 340,
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
};

export default Gallery;
