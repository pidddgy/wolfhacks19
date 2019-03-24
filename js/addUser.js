// add user to a certain chat

function addUser(user, chat) {
    const db = firebase.database();

    db.ref("/users/"+user).push({
        chat
    })
}