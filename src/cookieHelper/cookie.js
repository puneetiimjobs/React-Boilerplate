// import Cookies from 'universal-cookie';


// const cookies = new Cookies();

// export default setcookie = () =>{
//     let d = new Date();
//     d.setTime(d.getTime() + (minutes*60*1000));

//     cookie.set("onboarded", true, {path: "/", expires: d});


// }
// console.log('dsvjhsd');
// export default function setCookie(name , value , days) { //time will be no of days
//     // console.log(INC_HOST);
    
//     // var cname = name ;
//     // console.log(cname);
//     console.log("1");
//     var d = new Date();
//     d.setTime(d.getTime() + (days*24*60*60*1000));
//     console.log("2");
//     var expires = "expires="+ d.toUTCString();
//     console.log(name + "=" + value + ";" + expires + ";domain ="+ "."+"hirist.com" + ";path=/");
//     // console.log()
//     document.cookie = name + "=" + value + ";" + expires + ";domain ="+ "."+"hirist.com" + ";path=/";
//   }
 
function setCookie(cname, cvalue, exdays) {    
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=."+process.env.REACT_APP_INC_HOST+".com";
  }
  
  function getCookie(c_name) {
      var c_value = document.cookie,
          c_start = c_value.indexOf(" " + c_name + "=");
      if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
      if (c_start == -1) {
          c_value = null;
      } else {
          c_start = c_value.indexOf("=", c_start) + 1;
          var c_end = c_value.indexOf(";", c_start);
          if (c_end == -1) {
              c_end = c_value.length;
          }
          c_value = unescape(c_value.substring(c_start, c_end));
      }
  
      cookieValue = c_value;
  
      return c_value;
  }
  
  function delete_cookie(name){
      console.log("Inside delete Cookie");
      console.log(name);
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=."+process.env.REACT_APP_INC_HOST+".com";
      
      // document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  
  module.exports = {
    setCookie: setCookie,
    getCookie: getCookie,
    delete_cookie: delete_cookie
  }