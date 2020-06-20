import dotenv from "dotenv";
dotenv.config();

const URL = "https://ride-booking-app.herokuapp.com/graphql";
console.log(URL);
async function makeRequest({ url = URL, method = "post", data, token }) {
  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
}

const handleResponse = (res) => {
  if (res.status !== 200 && res.status !== 201) {
    throw new Error(
      "You are not signed in. Click the logout button and sign in again"
    );
  }
  return res.json();
};

const handleError = (err) => {
  throw err;
};
export default makeRequest;
