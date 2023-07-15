import React from 'react';

const Chat = ({ item }) => {
    return (<>
        <main>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <button type="submit" disabled={!formValue}>🕊️</button>
        </form>
    </>)
};

export default Chat;