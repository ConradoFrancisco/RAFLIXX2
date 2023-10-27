export async function returnFetch(url,options){
    try{
        const response = await fetch(url,options)
        if(!response.ok){
            throw new Error('error de los datos');
        }
        const data = await response.json();
        return data
    }catch(error){
        console.log("error de fetch: ",error)
        throw error
    }
    
    
}