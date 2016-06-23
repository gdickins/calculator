document.getElementById('add').onclick = function() {
  var x = Number(document.querySelector('input#num1').value);
  var y = Number(document.querySelector('input#num2').value);
  if (isNaN(x) || isNaN(y)) {
    alert('You can only add numbers');
  } else {
    document.querySelector('span').textContent = x + y;
  }
};
document.getElementById('subtract').onclick = function() {
  var x = Number(document.querySelector('input#num1').value);
  var y = Number(document.querySelector('input#num2').value);
  if (isNaN(x) || isNaN(y)) {
    alert('You can only add numbers');
  } else {
    document.querySelector('span').textContent = x - y;
  }
};
document.getElementById('multiply').onclick = function() {
  var x = Number(document.querySelector('input#num1').value);
  var y = Number(document.querySelector('input#num2').value);
  if (isNaN(x) || isNaN(y)) {
    alert('You can only add numbers');
  } else {
    document.querySelector('span').textContent = x * y;
  }
};
document.getElementById('divide').onclick = function() {
  var x = Number(document.querySelector('input#num1').value);
  var y = Number(document.querySelector('input#num2').value);
  if (isNaN(x) || isNaN(y)) {
    alert('You can only add numbers');
  } else {
    document.querySelector('span').textContent = x / y;
  }
};
