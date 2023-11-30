let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}


function check(){
        var question_01 = document.myform.question_01.value;
        var question_02 = document.myform.question_02.value;
        var question_03 = document.myform.question_03.value;
        var question_04 = document.myform.question_04.value;
        var question_05 = document.myform.question_05.value;
        var question_06 = document.myform.question_06.value;
        var question_07 = document.myform.question_07.value;
        var question_08 = document.myform.question_08.value;
        var question_09 = document.myform.question_09.value;
        var question_10 = document.myform.question_10.value;
        var count = 0;
        if(question_01 == "c")
        {
            count++;
        }
        if(question_02 == "b")
        {
            count++;
        }
        if(question_03 == "d")
        {
            count++;
        }
        if(question_04 == "d")
        {
            count++;
        }
        if(question_05 == "a")
        {
            count++;
        }
        if(question_06 == "b")
        {
            count++;
        }
        if(question_07 == "d")
        {
            count++;
        }
        if(question_08 == "c")
        {
            count++;
        }
        if(question_09 == "c")
        {
            count++;
        }
        if(question_10 == "b")
        {
            count++;
        }
        alert("Điểm của bạn là " + count + " marks");
}

let myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['HTML cơ bản', 'CSS cơ bản', 'HTML và CSS nâng cao', 'Javascript cơ bản', 'SQL cơ bản', 'A'],
        datasets:[{
          label:'Yêu thích',
          data:[
            90,
            80,
            55,
            40,
            35,
            15,
            0
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Bài học',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });


function login(){
      var email = document.getElementById("email").value
      var password = document.getElementById("password").value
      if (email == ""){
          alert("Vui lòng nhập email")
          pass
      }
      else if (password == ""){
          alert("Vui lòng nhập mật khẩu")
          pass
      }
      if ( email != "" && password != "" ){
          alert("Đăng nhập thành công")
      }
  }

function register(){
  var ten = document.getElementById("ten").value
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  var re_password = document.getElementById("re_password").value
  if  (ten == ""){
    alert("Vui lòng nhập tên")
    pass
  }
  else if (email == ""){
    alert("Vui lòng nhập email")
    pass
  }
  else if (password == ""){
    alert("Vui lòng nhập mật khẩu")
    pass
  }
  else if (re_password != password){
    alert("Vui lòng nhập mật khẩu chính xác")
  }
  if ( ten != "" && email != "" && password != "" && re_password == password){
    alert("Đăng ký thành công")
  }
}