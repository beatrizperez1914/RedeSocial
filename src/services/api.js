 const api = {}

 const generateId = length =>{
     let result ='';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    const characterslength = characters.length;

    for (var i =0; i <length; i++) {
        result += characters.charAt(Math.floor(Math.random()* characterslength))
    }
    return result;
 }

 api.addVideo = async (values={}) =>{
    const id = generateId(20);
    const list = JSON.parse( localStorage.getItem('videoList'))
    let newobj = {...values,id};
    localStorage.setItem('videoList', JSON.stringify(list.concat(newobj)));
    api.getVideoList();
 }

 api.getVideoList = async () =>{
     let list = JSON.parse( localStorage.getItem('videoList') );
     return list.map(l=>({...l, date: l.date ? new Date(l.date) : new Date() }));

}


export default api