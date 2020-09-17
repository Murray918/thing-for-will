import axios from "axios";

// this would be in a separate file
export async function getFightKnockOutsData() {
  try {
    const response = await axios.get(
      "http://198.58.117.70:8080/mma/ufc/winmethod/ko",
      {
        headers: {
          CORS: "Access-Control-Allow-Origin",
        },
        mode: "cors",
      }
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}
