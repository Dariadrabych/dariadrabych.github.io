const API_URL = 'https://photo-course-server.onrender.com';

fetch(`${API_URL}/api/progress`, {
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token') // JWT токен
  }
})
.then(res => {
  if (!res.ok) throw new Error('Помилка доступу. Можливо, токен недійсний');
  return res.json();
})
.then(data => {
  const container = document.getElementById('progress-container');
  container.innerHTML = ''; // очистити попередні записи
  data.forEach(item => {
    const el = document.createElement('div');
    el.textContent = `Урок: ${item.lessonId}, Пройдений: ${new Date(item.passedAt).toLocaleDateString()}`;
    container.appendChild(el);
  });
})
.catch(err => {
  console.error('Помилка:', err.message);
  alert('Не вдалося отримати дані. Перевірте авторизацію.');
});
