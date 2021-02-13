export async function getData() {
  let response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`)
  try {
    response = await response.json();
  } catch (err) {
    return []
  }
  return response
}

export async  function getResponse() {
    let response = await getData()

    return {response}
}