const apiKey="9HKRzxwyRS6hNaa15BPUOKSUNnAARqJCa0QJdusbzomqGIvlErZxnFnkNJTpi0OoO-Kt2OntBaYXrhC9_lJbNCY-UOAPEV-xZ9EUQA3zWMa0CoQ5EfSnIsXjfW3Yx";
let Yelp={
  search(term,location,sortBy){
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
        headers:{
        Authorization:`Bearer ${apiKey}`
      },
    }).then(response=>{
      return response.json();
    }).then(jsonResponse=>{
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business=>{
          return {
                      id: business.id,
                      imageSrc: business.imageSrc,
                      name: business.name,
                      address: business.address,
                      city: business.city,
                      state: business.state,
                      zipCode: business.zipCode,
                      category: business.category,
                      rating: business.rating,
                      reviewCount: business.reviewCount,

                  }
        })
      }
    })
  }
}
export default Yelp;
