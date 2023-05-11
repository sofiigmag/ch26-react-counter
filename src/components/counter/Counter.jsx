import React, { useState } from "react";
import { Button } from "../button/Button";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {
   
    const [counter, setcounter] = useState( initialValue );
  return (
     <>
        <Container sx={{border:2, bgcolor:"gray"}} maxWidth="lg">
            <Grid sx={{m:0, bgcolor:"#112", color:"white"}}container spacing={2}>
                <Grid md={8} xs={12}>
                    <Typography color={"purple"} variant="h1" align="center">Counter</Typography>   
                </Grid>
                <Grid md={4} xs={12}>
                    <Typography color={"secondary"} variant="h2" align="center">{counter}</ Typography>   
                </Grid>
                <Grid md={12}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button startIcon= { <AddIcon/>} setcounter= { setcounter  } newValue={ counter     + increment } ></Button>
                        <Button startIcon= { <RemoveIcon /> } setcounter= { setcounter  } newValue={    counter - decrement } ></Button>
                        <Button startIcon= { <RestartAltIcon />  } setcounter={ setcounter  } newValue= { initialValue } ></Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
     </>   
  );
};

/*
 Hacer un componente para el botòn.
 atributo: increment={5}
 atributo: increment={-5}
 atributo: onClick={ fncCallBack }
 Color text: blue;

*/
