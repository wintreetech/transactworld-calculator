const createQuote = (req, res) => {
  res.send("create quotes successfully");
};
const getQuotes = (req, res) => {
  res.send("get quotes successfully");
};
const getQuoteById = (req, res) => {
  res.send("get single quote successfully");
};
const updateQuoteEntry = (req, res) => {
  res.send("update single quote entry successfully");
};
const deleteQuote = (req, res) => {
  res.send("delete quote successfully");
};

export { createQuote, getQuotes, getQuoteById, updateQuoteEntry, deleteQuote };
