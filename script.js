document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    dept: document.getElementById("dept").value,
    year: document.getElementById("year").value,
  };

  localStorage.setItem("student", JSON.stringify(student));
  window.location.href = "details.html";
});
