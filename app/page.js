'use client'
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "react-bootstrap";
import { Toolbar, Typography, AppBar, Button, Box, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',
      },
    })

    const checkoutSessionJson = await checkoutSession.json()

    if(checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id
    })

    if(error){
      console.warn(error.message)
    }
  }
  return (
    // Need to change style to sx for more scalability, only temp solution for now

    <Container maxWidth="100vw" style={{ 
      minHeight: '100vh', 
      padding: 0,
      margin: 0, 
      background: 'linear-gradient(180deg, #a1c4fd, #c2e9fb)',
      display: 'flex', 
      flexDirection: 'column',
      }}>
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <AppBar position="sticky"   sx={{
        top: 0, 
        backgroundColor: '#0d47a1', // Dark blue color
        minHeight: '56px', // Reduced height
        zIndex: 1100, // Ensure it stays above other content
        boxShadow: 3, // Add a slight shadow for depth
      }}>
        <Toolbar sx={{ minHeight: '56px' }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in" sx={{
              '&:hover': {
                backgroundColor: '#1976d2', // Lighter blue on hover
                color: '#ffffff',
              },
            }}>
              
              Login
            </Button>
            <Button color="inherit" href="/sign-up" sx={{
              '&:hover': {
                backgroundColor: '#1976d2', // Lighter blue on hover
                color: '#ffffff',
              },
            }}>
              
              Sign up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: "center",
          my: 4,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{
            fontFamily: '"Montserrat", sans-serif', // Apply Montserrat font
            fontWeight: 700, // Bold font weight
            fontSize: '3rem', // Increase font size
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add slight shadow
          }}>
          Unlock Smarter Learning with Memora AI
        </Typography>
        <Typography variant="h5" gutterBottom>
          {"  "}
          Transform your notes into dynamic flashcards in seconds.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} href="/generate" >
          Get Started
        </Button>
      </Box>
      
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom align="center">
              Easy Text Input
            </Typography>
            <Typography align="center">
              {"  "}
              Effortlessly convert your notes into flashcards. Just paste your text, and we’ll handle the rest, saving you time and boosting your study efficiency.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom align="center">
              Smart Flashcards
            </Typography>
            <Typography align="center">
              {"  "}
              Leverage the power of AI to transform complex information into simple, easy-to-study flashcards, tailored for optimal retention.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom align="center">
              Accessible Anywhere
            </Typography>
            <Typography align="center">
              {"  "}
              Stay connected to your study material wherever you go. Access your flashcards seamlessly across all your devices, anytime.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom align="center">
          {" "}
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: '100%',
                p: 3,
                border: "1px solid",
                borderColor: "#90caf9",
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                bgcolor: '#e3f2fd',
                color: 'text.primary',
              }}
            >
              <Typography variant="h5" gutterBottom >
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                {" "}
                $5 / month
              </Typography>
              <Typography>
                {"  "}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: '100%',
                p: 3,
                border: "1px solid",
                borderColor: "#ffcc80",
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                bgcolor: '#ffe0b2',
                color: 'text.primary',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                {" "}
                $10 / month
              </Typography>
              <Typography>
                {"  "}
                Unlimited flashcards and storage with priority support
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
