const div = `<div style="background-color: red; color: white; margin: 0px auto; padding: 20px 10px 30px 10px; text-align: center; font-family: monospace; font-size: 25px;">
  <marquee scrolldelay="60">SERENITY NOW</marquee>
</div>`;
document.body.style.border = '10px solid red';
document.body.insertAdjacentHTML('afterbegin', div);
