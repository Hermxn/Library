async function FetchAPI(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
  data: Record<string, any> | null = null,
  token: string | null = null
) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  let body: string | null = null;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (data && method !== "GET") {
    body = JSON.stringify(data);
  }

  const options: RequestInit = {
    method,
    headers,
    ...(body ? { body } : {}),
    credentials: "include",
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default FetchAPI;
