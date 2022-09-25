export default function parsContentData(data){
    const items = Object.values(data)
    const parsedItems = items.map(dict=>{
        const itemsValues = Object.values(dict)
        return {
            date: itemsValues[itemsValues.length - 1].date,
            ...itemsValues[itemsValues.length - 1]
        } 
    }).sort(function(a,b){
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
    }) 
    return(
        parsedItems
    )
}