// The Quick "innerHTML" Way
const listDiv = document.getElementById("list-ul");

listDiv.innerHTML = `
  <div style="display:flex; gap:10px;">
    <div style="position:relative; background:lightblue; width:600px; height:40px; border-radius:10px;">
      <span 
        id="progress-bar" 
        style="position:absolute; top:0; left:0; width:0%; height:100%; background:red; border-radius:10px; transition:width 0.4s ease;">
      </span>
    </div>
    <button id="start-progress-bar" style="border-radius:10px; cursor:pointer;">
      Continue Progress Bar
    </button>
  </div>
`;

function progressbar(initialValue = 0) {
  let value = initialValue;
  let percentage = (value / 100) * 100;
  console.log(percentage);
  return percentage;
}

document.getElementById("start-progress-bar").addEventListener("click", () => {
  const percentage = progressbar(40);
  const progressbarE1 = document.getElementById("progress-bar");
  progressbarE1.style.width = percentage + "%";
});
