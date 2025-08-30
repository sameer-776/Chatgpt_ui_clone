document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const chatArea = document.getElementById('chat-area');
    const chatMessages = document.getElementById('chat-messages');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // --- Chat  ---
    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}-message`;
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        if (!chatArea.classList.contains('chat-active')) {
            chatArea.classList.add('chat-active');
        }

        addMessage('user', messageText);
        messageInput.value = '';
        messageInput.style.height = 'auto';

        setTimeout(() => {
            const fakeResponses = [
                "That's a great question!",
                "I need a bit more information to help with that.",
                "Let's see what we can find out.",
                "Thinking...",
            ];
            const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
            addMessage('assistant', randomResponse);
        }, 1000);
    }

    sendBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = `${messageInput.scrollHeight}px`;
    });
});
