// read home storage
const getStoredHomes = ()=>{
    const storedHomes = localStorage.getItem('order-homes');
    if(storedHomes){
        return JSON.parse(storedHomes)
    }
    return [];
}

const saveHomes = id =>{
    const storedHomes = getStoredHomes()
    const exists = storedHomes.find(HomeId => HomeId === id);
    if(!exists){
        storedHomes.push(id)
        localStorage.setItem('order-homes', JSON.stringify(storedHomes))
    }
    else{
        alert('This item already added')
    }

}


export { saveHomes, getStoredHomes }



