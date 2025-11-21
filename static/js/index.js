window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("#dataset-tabs li");
  const panels = document.querySelectorAll(".dataset-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // remove active from all tabs
      tabs.forEach((t) => t.classList.remove("is-active"));

      // hide all dataset panels
      panels.forEach((p) => p.classList.remove("is-active"));

      // activate selected
      tab.classList.add("is-active");
      const target = tab.getAttribute("data-target");
      document.getElementById(target).classList.add("is-active");

      window.dispatchEvent(new Event("resize"));
    });
  });
});
