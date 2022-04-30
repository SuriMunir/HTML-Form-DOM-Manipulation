const fname = document.querySelector('#first-name');
const lname = document.querySelector('#last-name');
const add = document.querySelector('#address');
const pin = document.querySelector('#pincode');
const state = document.querySelector('#state');
const country = document.querySelector('#country');
const gender = document.querySelectorAll('input[type="radio"]');
const food = document.querySelectorAll('input[type="checkbox"]');
const form = document.querySelector('#form');
const error = document.querySelector('.error');
const tbody = document.querySelector('#table-body');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let firstNameValue = fname.value.trim();
  let lastNameValue = lname.value.trim();
  let addressValue = add.value.trim();
  let pincodeValue = pin.value.trim();
  let stateValue = state.value.trim();
  let countryValue = country.value.trim();
  let genderValue = radioValue(gender);
  let foodValue = checkBoxValue(food);
  if (checkBoxValidation(foodValue)) {
    console.log(
      firstNameValue +
        ' ' +
        lastNameValue +
        ' ' +
        addressValue +
        ' ' +
        pincodeValue +
        ' ' +
        stateValue +
        ' ' +
        countryValue +
        ' ' +
        genderValue +
        ' ' +
        foodValue
    );
    appendTable(
      firstNameValue,
      lastNameValue,
      addressValue,
      pincodeValue,
      stateValue,
      countryValue,
      genderValue,
      foodValue
    );
  }
});

function radioValue(ele) {
  let result = [];
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      result.push(ele[i].value);
    }
  }
  if (result.length == 0) {
    return 'not selected';
  } else {
    return result.join();
  }
}

function clearRadioCheckBtn(ele) {
  for (let i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }
}

function checkBoxValue(ele) {
  let values = [];
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      values.push(ele[i].value);
    }
  }
  if (values.length == 0) {
    return 'not selected';
  } else {
    return values;
  }
}

function checkBoxValidation(ele) {
  if (ele.length < 2) {
    error.classList.add('display-error');
    return false;
  } else {
    error.classList.remove('display-error');
    return true;
  }
}

function appendTable(fn, ln, add, pi, st, con, g, f) {
  let trow = document.createElement('tr');
  let rowContent = `
            <td>${fn}</td>
            <td>${ln}</td>
            <td>${add}</td>
            <td>${pi}</td>
            <td>${st}</td>
            <td>${con}</td>
            <td>${g}</td>
            <td>${f}</td>`;
  trow.innerHTML = rowContent;
  tbody.appendChild(trow);
  clearForm();
}

function clearForm() {
  fname.value = '';
  lname.value = '';
  add.value = '';
  pin.value = '';
  state.value = '';
  country.value = '';
  clearRadioCheckBtn(gender);
  clearRadioCheckBtn(food);
}
