const API_BASE_URL = "https://api.coingecko.com/api/v3/coins/markets";

const state = {
  currency: "usd",
  coins: [],
  filteredCoins: [],
  query: "",
};

const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("cryptoTableBody");
const statusEl = document.getElementById("status");
const tableWrap = document.getElementById("tableWrap");
const resultMeta = document.getElementById("resultMeta");
const refreshButton = document.getElementById("refreshButton");
const currencyButtons = Array.from(document.querySelectorAll(".currency-btn"));

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: state.currency.toUpperCase(),
    maximumFractionDigits: value > 1 ? 2 : 6,
  }).format(value);
}

function formatCompactCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: state.currency.toUpperCase(),
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

function setStatus(type, message) {
  statusEl.className = "status";
  statusEl.textContent = message;

  if (type) {
    statusEl.classList.add(type);
  }
}

function renderTable(coins) {
  tableBody.innerHTML = "";

  if (coins.length === 0) {
    tableWrap.hidden = true;
    setStatus("", "No cryptocurrency found for your search.");
    resultMeta.textContent = "0 results";
    return;
  }

  const rowsMarkup = coins
    .map((coin) => {
      const changeClass = coin.price_change_percentage_24h >= 0 ? "change-positive" : "change-negative";
      const changeValue = `${coin.price_change_percentage_24h.toFixed(2)}%`;

      return `
        <tr>
          <td>${coin.market_cap_rank ?? "-"}</td>
          <td>
            <div class="coin">
              <img src="${coin.image}" alt="${coin.name} logo" loading="lazy" />
              <div class="coin-text">
                <strong>${coin.name}</strong>
                <span class="coin-symbol">${coin.symbol}</span>
              </div>
            </div>
          </td>
          <td>${formatCurrency(coin.current_price)}</td>
          <td class="${changeClass}">${changeValue}</td>
          <td>${formatCompactCurrency(coin.market_cap)}</td>
          <td>${formatCompactCurrency(coin.total_volume)}</td>
        </tr>
      `;
    })
    .join("");

  tableBody.innerHTML = rowsMarkup;
  tableWrap.hidden = false;
  setStatus("", "");
  resultMeta.textContent = `Showing ${coins.length} cryptocurrencies in ${state.currency.toUpperCase()}`;
}

function applySearchFilter() {
  const query = state.query.trim().toLowerCase();
  state.filteredCoins = state.coins.filter((coin) => {
    return coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query);
  });

  renderTable(state.filteredCoins);
}

async function fetchCoins() {
  setStatus("loading", "Loading live market data...");
  tableWrap.hidden = true;

  try {
    const params = new URLSearchParams({
      vs_currency: state.currency,
      order: "market_cap_desc",
      per_page: "25",
      page: "1",
      sparkline: "false",
      price_change_percentage: "24h",
    });

    const response = await fetch(`${API_BASE_URL}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    state.coins = await response.json();
    applySearchFilter();
  } catch (error) {
    state.coins = [];
    state.filteredCoins = [];
    tableBody.innerHTML = "";
    tableWrap.hidden = true;
    resultMeta.textContent = "Unable to load data";
    setStatus("error", "Could not fetch data from CoinGecko. Please try again.");
    console.error(error);
  }
}

function updateActiveCurrencyButton() {
  currencyButtons.forEach((button) => {
    const isActive = button.dataset.currency === state.currency;
    button.classList.toggle("is-active", isActive);
  });
}

currencyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCurrency = button.dataset.currency;

    if (!selectedCurrency || selectedCurrency === state.currency) {
      return;
    }

    state.currency = selectedCurrency;
    updateActiveCurrencyButton();
    fetchCoins();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  applySearchFilter();
});

refreshButton.addEventListener("click", fetchCoins);

fetchCoins();
