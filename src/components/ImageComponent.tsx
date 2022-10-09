import { styled } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import me from "../assets/me.png";
import { APPBAR } from "../constants";
import useResponsive from "../hooks/useResponsive";

const Image = styled("img")(
  ({ theme: { breakpoints, transitions, palette } }) => ({
    alignSelf: "end",
    transition: transitions.create(["width", "height", "scale"], {
      delay: 0,
      easing: "ease-in-out",
      duration: ".5s",
    }),
    pointerEvents: "none",
    userSelect: "none",

    [breakpoints.down("sm")]: {
      width: 200,
      zIndex: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: APPBAR.defaultHeight,
      background: palette.primary.light,
      // borderColor: palette.primary.main,
      borderWidth: 0,
      // borderBottomWidth: 5,
      // borderTopWidth: 5,
      borderStyle: "solid",
      // top: `calc(50% - 100px)`,
      borderRadius: 100,
    },

    [breakpoints.up("sm")]: {
      width: 450,
      // position: "absolute",
      // right: 100,
    },

    [breakpoints.up("md")]: {
      position: "relative",
      width: 650,
    },
    [breakpoints.up("lg")]: {
      width: 700,
      marginLeft: "auto",
    },
  })
);

export default function ImageComponent() {
  const imageRef = useRef<HTMLImageElement>(null);
  const prev = useRef(0);

  const isDesktop = useResponsive("up", "sm");

  const handleScroll = () => {
    const pos = window.scrollY;
    if (imageRef.current) {
      const halfHeight = imageRef.current.height / 2;
      const rad = pos * 10;
      const greater = rad <= halfHeight;
      imageRef.current.style.borderRadius = `${greater ? rad : halfHeight}px`;

      if (prev.current < pos) imageRef.current.style.scale = "90%";
      else imageRef.current.style.scale = "100%";
    }
    prev.current = pos;
  };

  const unmountScrollListener = () => {
    window.removeEventListener("scroll", handleScroll);
    if (imageRef.current) {
      imageRef.current.style.borderRadius = "50%";
      imageRef.current.style.scale = "100%";
    }
  };

  useEffect(() => {
    if (isDesktop) window.addEventListener("scroll", handleScroll as any);
    else unmountScrollListener();

    return unmountScrollListener;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  return <Image src={me} alt="" onScroll={(e) => e} ref={imageRef} />;
}
