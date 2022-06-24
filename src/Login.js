import React from "react";
import { signin } from "./service/ApiService";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link"
import { Container } from "@material-ui/core";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    // eventHandler
    event.preventDefault(); // submit 버튼 클릭의 고유의 동작을 막아줌
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");

    // ApiService 의 signin 메서드를 사용해 로그인.
    // this.~ constructord에서 this.hanglesubmit =~ 처리 해줘야 윈도우 객체가 아니라 로그인 컴포넌트를 의미함.
    signin({ email: email, password: password });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
          </Grid>
          <form noValidate onSubmit={this.handleSubmit}>
            {" "}
            {/* submit 버튼을 클릭하면 handleSubmit이 실행됨. */}
            <Grid container spacing = {2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="이메일 주소"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="패스워드"
                name="password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                로그인
              </Button>
            </Grid>
            <Link href = "/signup" variant = "body2">
              <Grid item>계정이 없습니까? 여기서 가입 하세요. </Grid>
            </Link>
            </Grid>
          </form>
        </Grid>
      </Container>
    );
  }
}
export default Login;