// The Clean DOM Way
const ul = document.createElement("ul");

// 2. Create an <li> element
const li = document.createElement("li");
li.textContent = "First Item"; // Safe way to add text

// 3. Append the <li> to the <ul>
ul.appendChild(li);

// 4. Finally, append the <ul> to your page (e.g., the body)
document.body.appendChild(ul);

// Creating a List from an Array
const items = ["Apple", "Banana", "Cherry"];
const list = document.createElement("ul");

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

document.getElementById("container").appendChild(list);

// The Quick "innerHTML" Way
const listDiv = document.getElementById("list-ul");
listDiv.innerHTML = `
 <ul>
    ${items.map((item) => ` <li>${item}</li>`).join("")}
  </ul>
 <div style="position:relative; margin: 0 auto; color: red; background-color: lightblue; max-width: 600px; height: 40px; border-radius: 10px;">
    <span style="position:absolute; top: 0; left: 0; width:20%; height:100%; background:red; border-radius:10px"></span>
  </div>
`;
