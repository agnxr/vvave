const apiKey = '7129137-0ebf8cbfe5e38668049f26d2b';

const Pixabay = { 
    searchPixabay(term) {
        return fetch(`https://pixabay.com/api/?key=7129137-0ebf8cbfe5e38668049f26d2b&q=${term}&image_type=photo`, { 
            headers: {
                Authorization: `Bearer ${apiKey}`
                },
            }).then((response) => { 
            return response.json() ;
        }).then((jsonResponse) => {
            if (jsonResponse.hits) {
                return jsonResponse.hits.map(((img) => {
                    console.log(img);
                    return {
                    src: img.imageURL,
                    };
                }));
            }
        })
    }
};

export default Pixabay;