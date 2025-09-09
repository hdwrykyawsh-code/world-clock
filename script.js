
let select = document.getElementById('citycelect');  
let list = document.getElementById('demo');

select.addEventListener('change', function() {
    let selectedOption = this.options[this.selectedIndex];
    let cityname = selectedOption.text;
    let timezone = selectedOption.value;

    let li = document.createElement('li');
    list.appendChild(li);

    function updateTime() {
        let time = moment().tz(timezone).format('HH:mm:ss');
        li.textContent = `${cityname}: ${time}`;
    }

    updateTime(); // بار اول نمایش زمان
    setInterval(updateTime, 1000); // هر ثانیه آپدیت کن
});




 
