import { createContext, useCallback, useState } from "react";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { socials } from "utils/constants";
import Iconify from "components/Iconify";

const GlobalContext = createContext<GlobalContextType>({
  hasDownloadedPortfolio: false,
  onResumeDownloaded() {},
  onPortfolioDownload() {},
});

const props: IconButtonProps<"a"> = {
  size: "small",
  color: "default",
  sx: {
    "& svg": {
      color: "white",
    },
  },
};

export type GlobalContextType = {
  hasDownloadedPortfolio: boolean;
  onResumeDownloaded: VoidFunction;
  onPortfolioDownload: VoidFunction;
};

export function GlobalContextProvider({ children }: React.PropsWithChildren) {
  const [hasDownloadedPortfolio, setHasDownloadedPortfolio] = useState(false);
  const [hasDownloadedResume, setHasDownloadedResume] = useState(false);

  const triggerDownload = useCallback(
    (type: "resume" | "portfolio", callback?: VoidFunction) => {
      (type === "resume" ? setHasDownloadedResume : setHasDownloadedPortfolio)(
        true
      );

      callback?.();
    },
    []
  );

  const onResumeDownloaded = useCallback(() => {
    triggerDownload("portfolio", function () {
      if (!hasDownloadedPortfolio) {
        enqueueSnackbar({
          message: "Click here to download previous work samples too",
          variant: "success",
          autoHideDuration: 5000,
          action(key) {
            return (
              <IconButton
                onClick={() => {
                  triggerDownload("portfolio", function () {
                    closeSnackbar(key);
                  });
                }}
                href={socials.portfolio.link}
                download
                {...props}
              >
                <Iconify icon={socials.portfolio.icon} />
              </IconButton>
            );
          },
        });
      }
    });
  }, [hasDownloadedPortfolio]);

  const onPortfolioDownload = useCallback(() => {
    triggerDownload("resume", function () {
      if (!hasDownloadedResume) {
        enqueueSnackbar({
          message: "Click to download resume too",
          variant: "success",
          autoHideDuration: 5000,
          action(key) {
            return (
              <IconButton
                onClick={() => {
                  triggerDownload("resume", function () {
                    closeSnackbar(key);
                  });
                }}
                href={socials.resume.link}
                download
                {...props}
              >
                <Iconify icon={socials.portfolio.icon} />
              </IconButton>
            );
          },
        });
      }
    });
  }, [hasDownloadedResume]);

  return (
    <GlobalContext.Provider
      value={{
        hasDownloadedPortfolio,
        onResumeDownloaded,
        onPortfolioDownload,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
