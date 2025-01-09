import axios from "axios";

export default async function () {
  try {
    let response: {
      data: {
        id: string;
      }[];
    } = await axios.get("https://jsonplaceholder.typicode.com/users");

    return response.data.map((el) => Number(el.id)).reduce((acc) => 1 + acc, 0);
  } catch (error) {
    console.log(error);
  }
}
