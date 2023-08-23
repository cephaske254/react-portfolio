import { Icon, IconProps } from "@iconify/react";

type Props = {
  color?: string;
} & IconProps;

export default function Iconify({ color: _color, ...props }: Props) {
  
  return <Icon {...props} />;
}
