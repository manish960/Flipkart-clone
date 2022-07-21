

const useAxios=({method,url,param})=>{
   return axios.request({
    headers: { 'Authorization': + 'Basic ' },
    method:method,
    url:`${process.env.Apiurl}${url}`,
    ...param
   })
}

export {useAxios}


