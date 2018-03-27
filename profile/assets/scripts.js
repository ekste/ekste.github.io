const global = function () {

    const tabs = function () {
        let tabs = document.getElementsByClassName("player-stats__tab");
        let contents = document.getElementsByClassName("player-stats__content");
        for (let i = 0; i < tabs.length; i++) {
          let tab = tabs[i];
          let content = contents[i];
          tab.onclick = function () {
            for (let i = 0; i < tabs.length; i++) {
              let tabRemove = tabs[i];
              let contentRemove = contents[i];
              tabRemove.classList.remove("player-stats__tab--active");
              contentRemove.classList.remove("player-stats__content--active");
            }
            tab.classList.toggle("player-stats__tab--active");
            content.classList.toggle("player-stats__content--active");
            return false;
          };
        }
    }

    return {
        tabs: tabs
    }

}();

global.tabs();