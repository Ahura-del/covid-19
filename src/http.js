class Corona{
    constructor(){}

    // get data
    async get(url){
        let respons = await fetch(url)
        let post = await respons.json();
        return post
    }

}

export default Corona;