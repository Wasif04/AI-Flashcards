import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "react-bootstrap";
import { Toolbar, Typography, AppBar, Button, Box, Grid } from "@mui/material";
import Head from "next/head";


export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name = "description" content="Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1}}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button color="inherit"> Login</Button>
            <Button color="inherit"> Sign up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{
        textAlign: 'center',
        my: 4,
      }}>
        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">
          {'  '}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color='primary' sx = {{mt:2}}>
          Get Started
        </Button>
      </Box>
      <Box sx = {{my: 6}}>
        <Typography variant="h4">
          Features
        </Typography>
        <Grid container spacing = {4}>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {'  '}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              {'  '}
              Our AI Intelligently breaks down your text
               into concise flashcards, perfect for studying
              
              </Typography>
          </Grid>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              {'  '}
              Access your flashcards from any device at any time. Study on the go.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx= {{ my: 6, textAlign:'center'}}>
        <Typography variant="h4"> Pricing</Typography>
        <Grid container spacing = {4}>
          <Grid item xs = {12} md={4}>
            <Box sx = {{
              p:3,
              border:'1px solid',
              borderColor: 'grey.300',
              borderRadius:2,
            }}>
              <Typography variant="h6">Easy Text Input</Typography>
              <Typography>
                {'  '}
                Simply input your text and let our software do the rest. Creating flashcards has never been easier.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              {'  '}
              Our AI Intelligently breaks down your text into concise flashcards, perfect for studying
              
              </Typography>
          </Grid>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              {'  '}
              Access your flashcards from any device at any time. Study on the go.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
