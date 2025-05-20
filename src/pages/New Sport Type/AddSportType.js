import React, { useState, useEffect } from "react";
import Axios from "axios";

import {
  Button,
  Dialog,
  CssBaseline,
  Typography,
  Container,
  Box,
  TextField,
  Grid,
  FormLabel,
} from "@mui/material";

import CloseButton from "../../components/CloseButton";
import AvatarUpload from "../../components/AvatarUpload";
import DropDownSportType from "./DropDownSportType";

function AddSportType(props) {
  const [openAvatar, setOpenAvatar] = useState(false);
  const handleAvatar = () => setOpenAvatar(prev => !prev);

  const [sportType, setSportType] = useState({
    name: "",
    category: "",
    trainerid: "",
    description: "",
    // default: žádný obrázek
    sportPic: "",
  });

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/api/trainers/`)
      .then(res => setTrainers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleClose = () => props.toggle();

  const handleAdd = async e => {
    e.preventDefault();
    try {
      // 1) vytvoříme záznam bez obrázku nebo s prázdným řetězcem
      const { data: created } = await Axios.post(
        `${process.env.REACT_APP_API_URL}/api/sportTypes/`,
        sportType
      );

      // 2) pokud má sportType.sportPic File, pošleme ho zvlášť
      if (sportType.sportPic instanceof File) {
        const form = new FormData();
        form.append("sportPic", sportType.sportPic);
        form.append("id", created._id);

        await Axios.post(
          `${process.env.REACT_APP_API_URL}/api/sportTypes/upload`,
          form,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }
    } catch (err) {
      console.error("Chyba při ukládání sportu:", err);
    }

    handleClose();
  };

  const categoryData = ["Minim", "Cadet", "Junior", "Senior"];

  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <CloseButton onClose={handleClose} />

      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            New Sport Type
          </Typography>

          <Box
            component="form"
            onSubmit={handleAdd}
            encType="multipart/form-data"
            sx={{ width: "100%" }}
          >
            <Grid container spacing={3}>
              {/* Sport Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  name="sportName"
                  label="Sport Name"
                  size="small"
                  onChange={e =>
                    setSportType({ ...sportType, name: e.target.value })
                  }
                />
              </Grid>

              {/* Category */}
              <Grid item xs={12} sm={6}>
                <DropDownSportType
                  names={categoryData}
                  label="Category"
                  handleChange={cat =>
                    setSportType({ ...sportType, category: cat })
                  }
                />
              </Grid>

              {/* Trainer */}
              <Grid item xs={12}>
                <DropDownSportType
                  names={trainers}
                  label="Trainers"
                  trainer
                  handleChange={id =>
                    setSportType({ ...sportType, trainerid: id })
                  }
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  size="small"
                  onChange={e =>
                    setSportType({
                      ...sportType,
                      description: e.target.value,
                    })
                  }
                />
              </Grid>

              {/* Sport Picture (inline label + button) */}
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <FormLabel>Sport Picture</FormLabel>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleAvatar}
                  >
                    Upload
                  </Button>
                </Box>
                <AvatarUpload
                  isOpen={openAvatar}
                  toggle={handleAvatar}
                  formData={sportType}
                  setFormData={setSportType}
                  sport
                />
              </Grid>

              {/* Submit */}
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button type="submit" variant="contained">
                  Add Sport Type
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Dialog>
  );
}

export default AddSportType;
