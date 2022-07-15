let userEntries = [];
const displayEntries = () => {
  const savedUserEntries = localStorage.getItem("user-entries");
  let entries = "";
  if (savedUserEntries) {
    const parsedUserEntries = JSON.parse(savedUserEntries);
    entries = parsedUserEntries
      .map((entry, index) => {
        const number = `<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
          Number(index) + 1
        }</td>`;
        const name = `<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${entry.name}</td>`;
        const email = `<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${entry.email}</td>`;
        const password = `<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${entry.password}</td>`;
        const dob = `<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${entry.dob}</td>`;
        const acceptTerms = `<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${entry.acceptTermsAndConditions}</td>`;
        const row = `<tr class="bg-white border-b" >${number} ${name} ${email} ${password} ${dob} ${acceptTerms}</tr>`;
        return row;
      })
      .join("\n");
  }
  var table = `<table class="min-w-full"><thead class="border-b">
  <tr><th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">No.</th>
  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Password</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">dob</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">accepted terms ?</th>
          </tr>
          </thead>
          <tbody>
          ${entries} </tbody>
          </table>`;
  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTermsAndConditions =
    document.getElementById("acceptTerms").checked;
  const userDetails = {
    name,
    email,
    password,
    dob,
    acceptTermsAndConditions,
  };
  userEntries.push(userDetails);
  localStorage.setItem("user-entries", JSON.stringify(userEntries));
  displayEntries();
};

let form = document.getElementById("user_form");
form.addEventListener("submit", saveUserForm, true);
displayEntries();

userEntries = localStorage.getItem("user-entries");
if (userEntries) {
  userEntries = JSON.parse(userEntries);
} else {
  userEntries = [];
}
