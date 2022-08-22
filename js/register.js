

function addStudent() {
    let firstName = document.getElementById("fname").value
    let lastName = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let grade = document.getElementById("grade").value;

    const student = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
        grade: grade,
    }
    fetch('http://localhost:8000/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(student)
    })
        .then(response => response.text())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}

const loopTroughStudents = (listOfStudents) => {
    for (let i = 0; i < listOfStudents.length; i++) {
        let studentId = document.getElementById("studentId")
        let Pid = document.createElement("p");
        Pid.innerHTML = listOfStudents[i].id;
        document.body.appendChild(Pid);
        studentId.appendChild(Pid);

        let fnames = document.getElementById("fnames");
        let Pfname = document.createElement("p");
        Pfname.innerHTML = listOfStudents[i].firstName;
        document.body.appendChild(Pfname);
        fnames.appendChild(Pfname);

        let lnames = document.getElementById("lnames");
        let Plname = document.createElement("p");
        Plname.innerHTML = listOfStudents[i].lastName;
        document.body.appendChild(Plname);
        lnames.appendChild(Plname);

        let Pemail = document.createElement("p");
        let emails = document.getElementById("emails");
        Pemail.innerHTML = listOfStudents[i].email;
        document.body.appendChild(Pemail);
        emails.appendChild(Pemail)

        let Pgender = document.createElement("p");
        const sex = document.getElementById("genders");
        Pgender.innerHTML = listOfStudents[i].gender;
        document.body.appendChild(Pgender);
        sex.appendChild(Pgender)

        let Pgrade = document.createElement("p");
        const studentGrade = document.getElementById("studentgrade")
        Pgrade.innerHTML = listOfStudents[i].grade;
        document.body.appendChild(Pgrade);
        studentGrade.appendChild(Pgrade)

    }
}
function displayStudents() {
    fetch('http://localhost:8000/students')
        .then((response) => response.json())
        .then((data) => loopTroughStudents(data))
        .catch(err => console.log(err));

}

const removeStudent = () => {
    const id = prompt("enter id of student to delete")
    fetch(`http://localhost:8000/students/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => {
            if (res) {
                prompt("deleting data successfully")
            } else {
                console.log("deletindg data unsuccessfully")
            }
            return res
        })
        .then(res => res.text())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

