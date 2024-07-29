/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  console.log('zozo');
  //   document.getElementById('mySidebar').style.width = '250px';
  //   document.getElementById('main').style.marginLeft = '250px';
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

function validate() {
  let text = '';
  if (document.myForm.name.value == '') {
    text = "Name Can't be Empty";
    document.getElementById('validationResult').innerHTML = text;
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.email.value == '') {
    text = "Email Can't be Empty";
    document.getElementById('validationResult').innerHTML = text;
    document.myForm.name.focus();
    return false;
  }
  let emailId = document.myForm.email.value;
  let atPosn = emailId.indexOf('@');
  let dotPos = emailId.lastIndexOf('.');
  if (atPosn < 1 || dotPosn - atPosn < 2) {
    text = 'Please enter valid Email';
    document.getElementById('validationResult').innerHTML = text;
    document.myForm.email.focus();
    return false;
  }
  if (document.myForm.project.value == '') {
    text = "Email Can't be Empty";
    document.getElementById('validationResult').innerHTML = text;
    document.myForm.name.focus();
    return false;
  }
}
