const text = 'text/plain';
const json = 'application/json';

export const request = async (...fetchArgs) => {
  const response = await fetch(...fetchArgs);
  if (response.ok) {
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes(json)) {
      return response.json();
    } else if (contentType.includes(text)) {
      return response.text();
    }
    return;
  } else {
    throw new APIError(await response.text());
  }
}
