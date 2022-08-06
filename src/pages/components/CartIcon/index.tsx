import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../../contexts/CartContext";

const theme = createTheme({
  colors: {
    background: "#1F1F1F",
    primary: "#008BF8",
    border: "#F5F5F5",
  },
});

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 5,
    border: `2px solid ${theme.colors.border}`,
    padding: "0",
    color: "FFFFFF",
    backgroundColor: theme.colors.primary,
  },
}));

const n = 2;

const StyledShoppingCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  color: theme.colors.background,
}));

export default function CustomizedBadges() {
  const cartOptions = React.useContext(CartContext);
  const total = cartOptions?.total;
  return (
    <ThemeProvider theme={theme}>
      <IconButton
        onClick={() => cartOptions?.setShowCart(true)}
        aria-label="carrt"
      >
        <StyledBadge badgeContent={total} color={"primary"}>
          <StyledShoppingCartIcon sx={{ fontSize: "28px" }} />
        </StyledBadge>
      </IconButton>
    </ThemeProvider>
  );
}
