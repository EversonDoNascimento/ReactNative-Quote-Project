let baseURL = "https://economia.awesomeapi.com.br/json";

export const getUSD = async () => {
  try {
    const response = await fetch(`${baseURL}/last/USD-BRL`);
    const data = await response.json();
    if (data.USDBRL) {
      const value = parseFloat(data.USDBRL.ask);
      return value;
    }
    return 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const getEUR = async () => {
  try {
    const response = await fetch(`${baseURL}/last/EUR-BRL`);
    const data = await response.json();
    if (data.EURBRL) {
      const value = parseFloat(data.EURBRL.ask);
      return value;
    }
    return 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const getBTC = async () => {
  try {
    const response = await fetch(`${baseURL}/last/BTC-BRL`);
    const data = await response.json();
    if (data.BTCBRL) {
      const value = parseFloat(data.BTCBRL.ask);
      return value;
    }
    return 0;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
