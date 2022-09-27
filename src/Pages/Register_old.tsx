import {
    makeStyles,
    Container,
    Typography,
    TextField,
    Button,
  } from "@mui/material";
  import { useForm } from "react-hook-form";
  import { useState } from "react";
  
  interface IFormInput {
    email: string;
    firstName: string;
    password: string;
  }
  
  const useStyles = makeStyles((theme:any) => ({
    heading: {
      textAlign: "center",
      margin: theme.spacing(1, 0, 4),
    },
    submitButton: {
      marginTop: theme.spacing(4),
    },
  }));
  
  function Register() {
    const {
      register,
      handleSubmit,
    } = useForm<IFormInput>();
  
    const { heading, submitButton } = useStyles;
  
    const [json, setJson] = useState<string>();
  
    const onSubmit = (data: IFormInput) => {
      setJson(JSON.stringify(data));
    };
  
    return (
      <Container maxWidth="xs">
        <Typography className={heading} variant="h3">
          Sign Up Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            {...register("email")}
            variant="outlined"
            margin="normal"
            label="Email"
            fullWidth
            required
          />
          <TextField
            {...register("firstName")}
            variant="outlined"
            margin="normal"
            label="First Name"
            fullWidth
            required
          />
          <TextField
            {...register("password")}
            variant="outlined"
            margin="normal"
            label="Password"
            type="password"
            fullWidth
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submitButton}
          >
            Sign Up
          </Button>
          {json && (
            <>
              <Typography variant="body1">
                Below is the JSON that would normally get passed to the server
                when a form gets submitted
              </Typography>
              <Typography variant="body2">{json}</Typography>
            </>
          )}
        </form>
      </Container>
    );
  }
  export default Register