  function userBtn() {
    var x = document.getElementById("userMenuContaier");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function filterContainerBtn() {
    var x = document.getElementById("filterContainer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
  var currentTab = 0;
  showTab(currentTab); 
  
  function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Ok";
      
    } else if (n == (x.length - 4)) {
      document.getElementById("nextBtn").innerHTML = "Pay $40.00";
    }
    else if (n == (x.length - 2)) {
      document.getElementById("nextBtn").innerHTML = "Extend";
    }

    else {
      document.getElementById("nextBtn").innerHTML = "Proceed";
    }
    fixStepIndicator(n)
  }
  
  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
      document.getElementById("parking-steps").submit();
      return false;
    }
    showTab(currentTab);
  }
  
  
