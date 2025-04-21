"use client";
import { Modal, Box, IconButton, Typography } from "@mui/material";

interface SimpleModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const AppModal = ({ open, onClose, children, title }: SimpleModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="dark-modal-title"
      aria-describedby="dark-modal-description"
      sx={{
        backdropFilter: "blur(4px)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "500px" },
          maxHeight: "60vh",
          bgcolor: "rgb(30, 41, 59)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          p: 3,
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            pb: 2,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {title && (
            <Typography
              variant="h6"
              id="dark-modal-title"
              sx={{
                fontWeight: 600,
                color: "white",
                fontSize: "1.25rem",
              }}
            >
              {title}
            </Typography>
          )}
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              "&:hover": {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <img src={"/close.svg"} className="h-5 w-5" />
          </IconButton>
        </Box>

        {/* Content */}
        <Box
          sx={{
            maxHeight: "calc(52vh - 100px)",
            overflowY: "hidden",
            pr: 1,
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "4px",
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default AppModal;
