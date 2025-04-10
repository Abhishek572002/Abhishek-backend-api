import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const currencyOptions = [
      { value: 'USD', label: <div className="option-row"><span className="code">USD</span><span className="desc">US Dollar</span></div> },
      { value: 'INR', label: <div className="option-row"><span className="code">INR</span><span className="desc">Indian Rupee</span></div> },
      { value: 'EUR', label: <div className="option-row"><span className="code">EUR</span><span className="desc">Euro</span></div> },
      { value: 'GBP', label: <div className="option-row"><span className="code">GBP</span><span className="desc">British Pound</span></div> },
      { value: 'JPY', label: <div className="option-row"><span className="code">JPY</span><span className="desc">Japanese Yen</span></div> },
      { value: 'AUD', label: <div className="option-row"><span className="code">AUD</span><span className="desc">Australian Dollar</span></div> },
      { value: 'CAD', label: <div className="option-row"><span className="code">CAD</span><span className="desc">Canadian Dollar</span></div> },
      { value: 'CHF', label: <div className="option-row"><span className="code">CHF</span><span className="desc">Swiss Franc</span></div> },
      { value: 'CNY', label: <div className="option-row"><span className="code">CNY</span><span className="desc">Chinese Yuan</span></div> },
      { value: 'SGD', label: <div className="option-row"><span className="code">SGD</span><span className="desc">Singapore Dollar</span></div> },
];
    

const ConverterForm = () => {
  const [source, setSource] = useState("USD");
  const [target, setTarget] = useState("INR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!amount || isNaN(amount)) {
      setError("Please enter a valid amount");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/convert", {
        source,
        target,
        amount: parseFloat(amount),
      });
      setResult(res.data);
      setHistory([{ ...res.data }, ...history]);
    } catch (err) {
      setError(
        "Conversion failed. Please check your inputs or try again later."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <Select
          className="select-dropdown"
          options={currencyOptions}
          value={currencyOptions.find((opt) => opt.value === source)}
          onChange={(selected) => setSource(selected.value)}
          placeholder="From Currency"
        />

        <span>to</span>

        <Select
          className="select-dropdown"
          options={currencyOptions}
          value={currencyOptions.find((opt) => opt.value === target)}
          onChange={(selected) => setTarget(selected.value)}
          placeholder="To Currency"
        />

        <button type="submit">Convert</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <p>Exchange Rate: {result.exchangeRate}</p>
          <h3>
            {result.amount} {result.source} = {result.convertedValue}{" "}
            {result.target}
          </h3>
        </div>
      )}

      {history.length > 0 && (
        <div className="history">
          <h4>Conversion History</h4>
          <div className="history-grid">
            {history.map((h, i) => (
              <div className="history-item" key={i}>
                <span>
                  {h.amount} {h.source}
                </span>{" "}
                →{" "}
                <span>
                  {h.convertedValue} {h.target}
                </span>
                <br />
                <span>Rate:</span> {h.exchangeRate}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConverterForm;
