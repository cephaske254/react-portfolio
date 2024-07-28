import { createContext, useCallback, useState } from "react";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import Button from "@mui/material/Button";
import { socials } from "utils/constants";

const GlobalContext = createContext<GlobalContextType>({
  hasDownloadedPortfolio: false,
  onResumeDownloaded() {},
  onPortfolioDownload() {},
});

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
      const url =
        type === "portfolio" ? socials.portfolio.link : socials.resume.link;

      const anchorElement = document.createElement("a");
      anchorElement.href = url;
      anchorElement.download = "Cephas Too - Worksamples.pdf";

      anchorElement.click();
      anchorElement.remove();

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
          variant: "default",
          persist: true,
          action(key) {
            return (
              <Button
                onClick={() => {
                  triggerDownload("portfolio", function () {
                    closeSnackbar(key);
                  });
                }}
                variant="text"
              >
                Download
              </Button>
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
          message: "Click to download resume",
          variant: "default",
          persist: true,
          action(key) {
            return (
              <Button
                onClick={() => {
                  triggerDownload("resume", function () {
                    closeSnackbar(key);
                  });
                }}
                variant="text"
              >
                Download
              </Button>
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
