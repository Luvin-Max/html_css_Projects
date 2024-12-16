document.addEventListener("DOMContentLoaded", () => {
  const nextPageBtn = document.getElementById("nextPageBtn");
  const prevPageBtn = document.getElementById("prevPageBtn");
  const sections = [
    document.getElementById("section1"),
    document.getElementById("section2"),
    document.getElementById("section3"),
    document.getElementById("section4"),
    document.getElementById("section5"),
    document.getElementById("section6"),
    document.getElementById("section7"),
  ];
  const pageNum = document.getElementById("pageNum");
  let val = 0; // Current section index

  // Function to update the display dynamically
  const updateSection = () => {
    // Hide all sections
    sections.forEach((section) => (section.style.display = "none"));

    // Show the current section
    sections[val].style.display = "block";

    // Update the page number
    pageNum.innerText = `Page ${val + 1}`;
    pageNum.style.transform = "scale(1.2)";
    setTimeout(() => {
      pageNum.style.transform = "scale(1)";
    }, 300);
  };

  // Next Button Click Event
  nextPageBtn.addEventListener("click", () => {
    val = (val + 1) % sections.length; // Move forward and loop back to 0
    updateSection();
  });

  // Previous Button Click Event
  prevPageBtn.addEventListener("click", () => {
    val = (val - 1 + sections.length) % sections.length; // Move backward and loop to the last section
    updateSection();
  });

  // Initial display setup
  updateSection();
});
