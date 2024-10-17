
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;


        const telegramMessage = `
            Новая заявка с формы:
            Имя: ${name}
            Email/Telegram: ${email}
            Телефон: ${phone ? phone : 'не указан'}
            Сообщение: ${message}
        `;

        // Данные вашего бота
        const botToken = '7788382537:AAHjAO0E_lbA087ubxOII0xS7xWV9_sDJdg';
        const chatId = '5888615986';  
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Сообщение успешно отправлено!');
                document.getElementById('contactForm').reset(); // Сбрасываем форму
            } else {
                alert('Ошибка отправки сообщения. Попробуйте снова.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка отправки сообщения. Попробуйте снова.');
        });
    });
    
    
    document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const burgerCheckbox = document.getElementById('burger-checkbox');

  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      burgerCheckbox.checked = false;

      const sectionID = this.getAttribute('href').slice(1);
      const section = document.getElementById(sectionID);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


  window.addEventListener('scroll', () => {
    if (burgerCheckbox.checked) {
      burgerCheckbox.checked = false;
    }
  });
});