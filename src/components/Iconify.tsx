import { Icon, IconProps } from "@iconify/react";
import { experimental_sx } from "@mui/material/styles";

type Props = {
  color?: string;
} & IconProps;

export default function Iconify({ color: _color, ...props }: Props) {
  const styles = experimental_sx((s) => {
    console.log(styles);

    return {};
  });
  return <Icon {...props} />;
}
