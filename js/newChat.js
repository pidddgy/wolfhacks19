const newChat = () => {
    const db = firebase.database();
    
    db.ref('/groups/').push({
            messages: ["hi", "hello", "asdf"],
            people: [12, 123, 14]
    })
}
