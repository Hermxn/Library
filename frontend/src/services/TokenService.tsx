const TokenService = {
  setExpirationDate: () => {
    return String(Date.now() + 1000 * 60 * 1); // 1 minute
  },
  checkValidity: (date?: string | null) => {
    if (!date) return false;
    return Date.now() < Number(date);
  },
};

export default TokenService;
