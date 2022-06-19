var tabsNode = document.getElementsByClassName("tab");
console.log(tabsNode);
for (var index = 0; index < tabsNode.length; index++) {
  tabsNode[index].onclick = function (e) {
    if (!e.target.classList.contains("active")) {
      e.target.classList.toggle("active");
    }
  };
}
