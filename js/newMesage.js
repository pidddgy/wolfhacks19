// create new message inside chat

const newMessage = (id, message) => {
    const db = firebase.database();
    
    return db.ref('/groups/'+id).push({
        message
    })
}
