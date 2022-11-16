import customProtocolCheck from "custom-protocol-check";

export default function checkProtocol() {
  const promise = new Promise<boolean>((resolve) => {
    const onFail = () => resolve(false);
    const onSuccess = () => resolve(true);
    customProtocolCheck("planrr://", onFail, onSuccess);
  });
  return promise;
}
