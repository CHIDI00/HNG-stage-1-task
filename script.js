document.addEventListener("DOMContentLoaded", function() {
  function updateTime() {
      const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
      const currentDay = document.querySelector('[data-testid="currentDay"]');
      
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = days[now.getUTCDay()];

      currentTimeUTC.textContent = utcTime;
      currentDay.textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
