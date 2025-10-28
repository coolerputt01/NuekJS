export default async function serverRender(html){
  try {
  const response = await fetch("https://uek-coolerputt018507-7cbjdfyy.leapcell.dev/render",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({html})
  });
  
  if(!response.ok){
    throw new Error(`Server error: ${response.status}`);
  }
  return response.text();
  }catch(err){
    throw new Error(`Server error: ${err}`);
    return html;
  }
}