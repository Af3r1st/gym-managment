import React from "react";
import { Grid, Container, Box, Paper, Card, CardContent, CardMedia, Typography, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const GYM_PICS = [
  { img: '/images/gym.jpg',            title: 'Gym' },
  { img: '/images/gym-closed.jpg',     title: 'Gym Closed' },
  { img: '/images/gym-exterier.jpeg',   title: 'Gym Exterior' },
  { img: '/images/gym-interier.jpg',   title: 'Gym Interior' },
  { img: '/images/burger.jpg',         title: 'Burger' },
  { img: '/images/coffee.jpg',         title: 'Coffee' },
];




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function Profil() {
  return (
    <Container>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, mb: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image="/images/gym.jpg"
              alt="Fitness Heroes"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                PocketGym
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Leader of fitness in Czech Republic! Top equipment, expert
                coaches, and unbeatable quality-price ratio.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, mb: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                About
              </Typography>
              <Stack spacing={1}>
                {[
                  { icon: <HomeIcon />, text: 'Pocket Gym' },
                  { icon: <LocalPhoneIcon />, text: '777 888 999' },
                  { icon: <EmailIcon />, text: 'pocketGym@gmail.com' },
                ].map((info, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ mr: 1 }}>{info.icon}</Box>
                    <Typography variant="body2">{info.text}</Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, p: 2, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Sport Types
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip
                icon={<SportsMartialArtsIcon />}
                label="Karate"
                variant="outlined"
              />
              <Chip icon={<SportsMmaIcon />} label="Box" variant="outlined" />
              <Chip
                icon={<SportsKabaddiIcon />}
                label="Full Contact"
                variant="outlined"
              />
              <Chip
                icon={<SportsKabaddiIcon />}
                label="Muay Thai"
                variant="outlined"
              />
            </Box>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3, p: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Pictures
                </Typography>
                 <ImageList cols={3} gap={8}>
                      {GYM_PICS.map(item => (
                        <ImageListItem key={item.title}>
                          <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: 200,
                              objectFit: 'cover',
                              borderRadius: 4,
                            }}
                          />
                        </ImageListItem>
                      ))}
                </ImageList>
              </Card>


          <Card sx={{ mb: 3, p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Total Revenue
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AttachMoneyIcon sx={{ mr: 1 }} />
              <Typography variant="body2">Pocket Gym</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profil;
