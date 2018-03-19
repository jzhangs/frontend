class Timer {
  countdown(end, update, handle) {
    const now = new Date().getTime();

    if (now > end) {
      handle();
    } else {
      let lastTime = end - now;
      const msDay = 1000 * 60 * 60 * 24;
      const msHour = 1000 * 60 * 60;
      const msMin = 1000 * 60;
      const msSec = 1000;

      let d = Math.floor(lastTime / msDay);
      let h = Math.floor((lastTime - d * msDay) / msHour);
      let m = Math.floor((lastTime - d * msDay - h * msHour) / msMin);
      let s = Math.floor((lastTime - d * msDay - h * msHour - m * msMin) / msSec);
      let r = [];
      (r.length || d > 0) && r.push(`<em>${d}</em>day`);
      (r.length || h > 0) && r.push(`<em>${h}</em>时`);
      (r.length || m > 0) && r.push(`<em>${m}</em>分`);
      (r.length || s > 0) && r.push(`<em>${s}</em>秒`);

      update.call(this, r.join(''));
      setTimeout(() => {
        this.countdown(end, update, handle);
      }, 1000);
    }
  }
}

export default Timer;
