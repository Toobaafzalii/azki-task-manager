"use client";
import { Card, Typography, Divider, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const ProfileCard = styled(Card)({
  background: "linear-gradient(135deg,rgb(31, 41, 55) 0%,rgb(30, 40, 60) 100%)",
  borderRadius: "16px",
  padding: "24px",
  width: "100%",
  maxWidth: "500px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  margin: "0 auto",
});

const InfoRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "120px 1fr",
  gap: "16px",
  padding: "12px 0",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "4px",
    padding: "8px 0",
  },
}));

const InfoLabel = styled(Typography)({
  color: "#fff",
  fontWeight: 500,
  fontSize: "0.92rem",
});

const InfoValue = styled(Typography)({
  color: "#fff",
  fontWeight: 600,
  fontSize: "1.1rem",
});

const WalletValue = styled(Typography)({
  background: "linear-gradient(90deg, #22d3ee, #0ea5e9)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: 700,
  fontSize: "1.2rem",
  display: "inline-block",
});

export default function UserProfileDisplay() {
  const user = {
    firstName: "Alexandra",
    lastName: "Chen",
    birthYear: 1992,
    phone: "+1 (415) 555-0192",
    email: "ndnd@google.com",
    wallet: 4825.75,
  };

  return (
    <ProfileCard>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: "#ffffff",
          mb: 2,
          fontSize: "1.5rem",
        }}
      >
        Your Profile
      </Typography>

      <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.12)", my: 2 }} />

      <Box>
        <InfoRow>
          <InfoLabel>First Name:</InfoLabel>
          <InfoValue>{user.firstName}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Last Name:</InfoLabel>
          <InfoValue>{user.lastName}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Birth Year:</InfoLabel>
          <InfoValue>{user.birthYear}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Phone:</InfoLabel>
          <InfoValue sx={{ fontFamily: "monospace" }}>{user.phone}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Email:</InfoLabel>
          <InfoValue sx={{ fontFamily: "monospace" }}>{user.email}</InfoValue>
        </InfoRow>

        <InfoRow sx={{ alignItems: "baseline" }}>
          <InfoLabel>Wallet:</InfoLabel>
          <WalletValue>
            {user.wallet.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            })}
          </WalletValue>
        </InfoRow>
      </Box>
    </ProfileCard>
  );
}
