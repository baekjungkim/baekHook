export const useNetwork = handleNetworkChagne => {
  const handleChange = () => {
    if (typeof handleNetworkChagne === "function") {
      handleNetworkChagne(navigator.onLine);
    }
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
};
