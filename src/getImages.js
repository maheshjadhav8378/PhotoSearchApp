const URL = process.env.URL;
const API_KEY = process.env.API_KEY;

export const getImages = async ()=> {
       try{
        const response = await fetch(URL+"/photos"+ "?"+ new URLSearchParams({per_page : 30 }), 
                    {
                        headers: {
                        'Authorization' : `Client-ID ${API_KEY}`
                        },
                    });

        if(!response.ok){
            console.log('Error in fetching Images');
            return [];
        }
       
        const data = await response.json()
        return data;
    }
    catch(err){
        console.error(err);
        return [];

    }
   
}


export const getSeachedImages =async (param ) => {

    
    try{
        const response = await fetch(URL + "/search/photos?" + new URLSearchParams({ query : param, per_page : 30 }),
        {
            headers: {
                Authorization : `Client-ID ${API_KEY}`
            },
        });

        if (!response.ok) {
            console.log(response.error);
            return [];
        }

        const data = await response.json()
        return data.results;
    }
    catch(err){
        console.log(err);
        return [];
    }
}