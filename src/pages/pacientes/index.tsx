import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { BoxButton, TitlePage } from "./styles";
import { FormHandles, SubmitHandler } from "@unform/core";
import React, { useRef } from "react";

import { Form } from "@unform/web";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Pacientes: React.FC = () => {
  const fromRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(fromRef);
  };

  return (
    <Box>
      <TitlePage>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography variant="subtitle1">Pacientes</Typography>
        </Breadcrumbs>
      </TitlePage>

      <Box>
        <Form ref={fromRef} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                name="name"
                label="Nome"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                name="password"
                label="Senha"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                name="birth"
                type="date"
                label="Data de nacimento"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                name="phones"
                label="Telefone"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <Autocomplete
                options={[
                  {
                    label: "Masculino",
                    value: "masculino",
                  },
                  {
                    label: "Feminino",
                    value: "feminino",
                  },
                ]}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} name="sex" label="Sexo" />
                )}
              />
            </Grid>
          </Grid>
          <BoxButton>
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </BoxButton>
        </Form>
      </Box>
    </Box>
  );
};

export default Pacientes;
