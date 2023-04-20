var ServerURL="http://192.168.29.107:5000"

const getData=async(url)=>{
  try{
    var response=await fetch(`${ServerURL}/${url}`,{method:'GET',
    mode:'cors',
  headers:{"content-type":'application/json;charset-utf-8'}})
    var result=await response.json()
    return result
  }
 catch(e)
 {   console.log(e)
     return null
 }
}

const postData = async (url, body) => {
  try {
    const response = await fetch(`${ServerURL}/${url}`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e)
    return null;
  }
}

export {postData,getData,ServerURL}