import customProtocolCheck from "custom-protocol-check";

export default function checkProtocol() {
  return customProtocolCheck(
    "planrr://",
    () => {
      console.log("Custom protocol not found.");
    },
    () => {
      console.log("Custom protocol found and opened the file successfully.");
    },
    5000
  );
}
