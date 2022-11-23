// const BASE_URL = "https://e-commerce-backend-desafio-m9.vercel.app/api";
const BASE_URL = "https://api.apx.school/api";

export async function fetchAPI(input: RequestInfo, options: any) {
  //   const token = localStorage.getItem("token");
  const url = BASE_URL + input;
  const token = getSavedToken();
  const newOptions: any = options || {};
  newOptions.headers ||= {};
  if (token) {
    newOptions.headers.authorization = `Bearer ${token}`;
  }
  newOptions.headers["content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);
  console.log("response", res);
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw {
      message: "Hubo un error",
      status: res.status,
    };
  }
}

export async function sendCode(email: string) {
  console.log("sendCode", email);
  return fetchAPI("/users/auth", {
    method: "POST",
    body: {
      email,
    },
  });
}
export async function getToken(email: string, code: string) {
  const data = await fetchAPI("/users/auth/token", {
    method: "POST",
    body: {
      email,
      code: parseInt(code),
    },
  });
  saveToken(data.token);
  return true;
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}
export function getSavedToken() {
  return localStorage.getItem("auth_token");
}
