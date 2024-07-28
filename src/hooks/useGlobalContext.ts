import GlobalContext from "context/global";
import { useContext } from "react";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
};

export default useGlobalContext;
