import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlinestatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlinestatus(false);
    });
  }, [onlinestatus]);
  return onlinestatus;
};

export default useOnlineStatus;