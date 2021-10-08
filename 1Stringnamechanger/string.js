document.getElementById('btnCreate').onclick = function() {
    let fullName = document.querySelector('#fullname').value;

    let nametrim = fullName.trim();
    let namechanged = nametrim.toLowerCase();
    let nameArray = namechanged.split(' ');

    let firstName = nameArray[0];
    let middleName = nameArray[1];
    let lastName = nameArray[2];

    document.getElementById('firstname').value = firstName[0].toUpperCase() + firstName.substring(1);
    document.getElementById('middlename').value = middleName[0].toUpperCase() + middleName.substring(1);
    document.getElementById('lastname').value = lastName[0].toUpperCase() + lastName.substring(1);
}
