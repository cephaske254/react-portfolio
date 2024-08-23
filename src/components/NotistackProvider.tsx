import { useRef } from "react";
import { SnackbarKey, SnackbarProvider } from "notistack";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";
import IconButton from "@mui/material/IconButton";
//
import Iconify from "./Iconify";
import icons from "utils/icons";

// ----------------------------------------------------------------------

function SnackbarStyles() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        "& .notistack-MuiContent": {
          width: "100%",
          padding: theme.spacing(1),
          paddingRight: theme.spacing(3),
          margin: theme.spacing(0.25, 0),
          boxShadow: theme.shadows["8"],
          borderRadius: theme.shape.borderRadius * 2,
          "&.notistack-MuiContent-success, &.notistack-MuiContent-error, &.notistack-MuiContent-warning, &.notistack-MuiContent-info":
            {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.background.paper,
            },
          [theme.breakpoints.up("md")]: {
            minWidth: 240,
          },
        },
        fontWeight: theme.typography.fontWeightMedium,

        "& .content": {
          paddingRight: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            paddingRight: theme.spacing(3),
          },
        },
      }}
    />
  );
}

// ----------------------------------------------------------------------

export default function NotistackProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const notistackRef = useRef<SnackbarProvider>(null);

  const onClose = (key: SnackbarKey) => () => {
    notistackRef.current?.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider
        ref={notistackRef}
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3000}
        variant="success" // Set default variant
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        iconVariant={{
          info: <SnackbarIcon icon={icons.snackbar_info} color="info" />,
          success: (
            <SnackbarIcon icon={icons.snackbar_success} color="success" />
          ),
          warning: (
            <SnackbarIcon icon={icons.snackbar_warning} color="warning" />
          ),
          error: <SnackbarIcon icon={icons.snackbar_error} color="error" />,
        }}
        // With close as default
        action={(key) => (
          <IconButton size="small" onClick={onClose(key)} sx={{ p: 0.5 }}>
            <Iconify icon={"eva:close-fill"} />
          </IconButton>
        )}
      >
        <div className="content">{children}</div>
      </SnackbarProvider>
    </>
  );
}

// ----------------------------------------------------------------------

type SnackbarIconProps = {
  color: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  icon: string;
};

function SnackbarIcon({ icon, color }: SnackbarIconProps) {
  return (
    <Box
      component="span"
      className="SnackbarItem-action"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        justifyContent: "center",
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      <Iconify icon={icon} width={24} height={24} />
    </Box>
  );
}
