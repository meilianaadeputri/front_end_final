function status(response) {
  if (response.status !== 200) {
    console.log("Error: "+response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

function json (response) {
  return response.json();
}

function error(error) {
  console.log("Error: "+error);
}
