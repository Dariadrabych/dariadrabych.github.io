fetch('/api/progress', {
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token') // JWT токен
  }
})
.then(res => res.json())
.then(data => {
  const container = document.getElementById('progress-container');
  data.forEach(item => {
    const el = document.createElement('div');
    el.textContent = `Урок: ${item.lessonId}, Пройдений: ${new Date(item.passedAt).toLocaleDateString()}`;
    container.appendChild(el);
  });
});
