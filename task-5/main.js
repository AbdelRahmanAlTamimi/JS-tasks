
  // Task 1
  const alertButton = document.getElementById("alertButton");
  alertButton.addEventListener("click", () => {
    alert("Button clicked!");
  });

  // Task 2
  const textChangeButton = document.getElementById("textChangeButton");
  const textChangeParagraph = document.getElementById("textChangeParagraph");
  textChangeButton.addEventListener("click", () => {
    textChangeParagraph.textContent = "Text changed!";
  });

  // Task 3:
  const dblclickDiv = document.getElementById("dblclickDiv");
  dblclickDiv.addEventListener("dblclick", () => {
    dblclickDiv.style.backgroundColor = "lightblue";
  });

  // Task 4
  const mouseenterDiv = document.getElementById("mouseenterDiv");
  mouseenterDiv.addEventListener("mouseenter", () => {
    mouseenterDiv.textContent = "Mouse entered";
  });

  // Task 5
  mouseenterDiv.addEventListener("mouseleave", () => {
    mouseenterDiv.textContent = "Hover over me";
  });

  // Task 6
  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form not submitted");
  });

  // Task 7
  const focusInput = document.getElementById("focusInput");
  focusInput.addEventListener("focus", () => {
    focusInput.classList.add("highlight");
  });

  // Task 8
  focusInput.addEventListener("blur", () => {
    focusInput.classList.remove("highlight");
  });

  // Task 9
  const keyEventInput = document.getElementById("keyEventInput");
  keyEventInput.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });

  // Task 10
  const toggleDiv = document.getElementById("toggleDiv");
  toggleDiv.addEventListener("click", () => {
    toggleDiv.classList.toggle("toggled");
  });

  // Task 11
  const validateForm = document.getElementById("validateForm");
  validateForm.addEventListener("submit", (e) => {
    if (!validateForm.checkValidity()) {
      e.preventDefault();
      alert("Form validation failed");
    }
  });

  // Task 12
  const changeImage = document.getElementById("changeImage");
  const changeImageButton = document.getElementById("changeImageButton");
  changeImageButton.addEventListener("click", () => {
    changeImage.src = "https://via.placeholder.com/200";
  });

  // Task 13
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  togglePassword.addEventListener("change", () => {
    passwordInput.type = togglePassword.checked ? "text" : "password";
  });

  // Task 14
  const colorPicker = document.getElementById("colorPicker");
  const colorDiv = document.getElementById("colorDiv");
  colorPicker.addEventListener("input", () => {
    colorDiv.style.backgroundColor = colorPicker.value;
  });

  // Task 15
  const carouselImages = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];
  let currentImageIndex = 0;
  const carouselImage = document.getElementById("carouselImage");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  prevButton.addEventListener("click", () => {
    currentImageIndex =
      (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    carouselImage.src = carouselImages[currentImageIndex];
  });
  nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImage.src = carouselImages[currentImageIndex];
  });

  // Task 16
  const contentArray = ["Content 1", "Content 2", "Content 3"];
  const loadContentButton = document.getElementById("loadContentButton");
  const contentDiv = document.getElementById("contentDiv");
  loadContentButton.addEventListener("click", () => {
    contentDiv.textContent =
      contentArray[Math.floor(Math.random() * contentArray.length)];
  });

  // Task 17
  const contextMenuDiv = document.getElementById("contextMenuDiv");
  const customMenu = document.getElementById("customMenu");
  contextMenuDiv.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    customMenu.style.display = "block";
    customMenu.style.left = `${e.pageX}px`;
    customMenu.style.top = `${e.pageY}px`;
  });
  document.addEventListener("click", () => {
    customMenu.style.display = "none";
  });

//   // Task 18: Detect Window Resize
//   window.addEventListener("resize", () => {
//     console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
//   });

//   // Task 19: Scroll to Top Button
//   const scrollTopButton = document.getElementById("scrollTopButton");
//   scrollTopButton.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });

//   // Task 20: Prevent Default Link Behavior
//   const preventLink = document.getElementById("preventLink");
//   preventLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert("Default link behavior prevented");
//   });

//   // Task 21: Hover Tooltip
//   const hoverDiv = document.getElementById("hoverDiv");
//   const tooltip = document.getElementById("tooltip");
//   hoverDiv.addEventListener("mouseenter", (e) => {
//     tooltip.style.display = "block";
//     tooltip.style.left = `${e.pageX}px`;
//     tooltip.style.top = `${e.pageY}px`;
//   });
//   hoverDiv.addEventListener("mouseleave", () => {
//     tooltip.style.display = "none";
//   });

