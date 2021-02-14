const axios = require("axios").default;
const { apiDomain } = require("../package.json");

const getRequest = async () => {
  const { data } = await axios.get(apiDomain);

  const requestId = document.getElementById("requestId");
  const requestDate = document.getElementById("requestDate");

  requestId.innerHTML = data.data.requestId;
  requestDate.innerHTML = data.data.requestDate;
};

const button = document.getElementById("getRequest");
button.addEventListener("click", () => {
  const collapseData = document.getElementById("collapseData");

  if (!collapseData.classList.contains("open")) {
    getRequest();
    collapseData.classList.add("open");
    return new window.bootstrap.Collapse(collapseData);
  } else {
    getRequest();
  }
});
