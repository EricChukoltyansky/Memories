import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { Container, Grow, Grid } from "@mui/material";
import { AppBarStyled, HeaderStyled } from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

export default function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBarStyled position="static" color="inherit">
        <HeaderStyled variant="h2" align="center">
          Blogs
        </HeaderStyled>
      </AppBarStyled>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
