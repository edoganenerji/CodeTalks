export default function parseMessageContent(message) {
    return(

        Object.keys(message).map(key=>{
            return{
                id:key,
                ...message[key]
            }
        })
        ).sort(function(a,b){
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
        })
}