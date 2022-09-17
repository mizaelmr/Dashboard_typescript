import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { BoxButton, TitlePage } from "../pacientes/styles";

import React from "react";

const Financias: React.FC = () => {
  return (
    <Box>
      <TitlePage>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography variant="subtitle1">Financias</Typography>
        </Breadcrumbs>
      </TitlePage>

      <Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField
              name="amount"
              label="Amout"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              name="category"
              label="Categoria"
              variant="outlined"
              type="email"
              fullWidth
            />
          </Grid>
        </Grid>
        <BoxButton>
          <Button variant="contained">Enviar</Button>
        </BoxButton>
      </Box>
    </Box>
  );
};

export default Financias;
