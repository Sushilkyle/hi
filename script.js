require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/ScaleBar",
  "esri/widgets/Home",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Locate",
  "esri/widgets/LayerList",
], function (
  esriConfig,
  WebMap,
  MapView,
  Legend,
  ScaleBar,
  Home,
  Expand,
  BasemapGallery,
  LayerList,
  Locate
) {
  esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal";

  // Create a WebMap instance //
  const myMap = new WebMap({
    portalItem: {
      id: "7644b287ab3a4238b3dc8c1f7b7197aa",
    },
  });
  // Create a MapView //
  const view = new MapView({
    map: myMap,
    container: "viewDiv",
  });

  // SCALE BAR //
  const scaleBar = new ScaleBar({
    view: view,
    unit: "metric",
  });
  view.ui.add(scaleBar, { position: "bottom-right" });

  // HOME //
  const homeWidget = new Home({
    view: view,
  });
  view.ui.add(homeWidget, "top-left");

  // BASEMAP GALLARY INSIDE EXPAND WIDGET //
  const basemapGallery = new BasemapGallery({
    view: view,
    container: document.createElement("div"),
  });
  const bgExpand = new Expand({
    view: view,
    content: basemapGallery,
  });

  // LOCATE //
  let locateWidget = new Locate({
    view: view,
  });

  // LEGEND INSIDE EXPAND WIDGET //
  const legend = new Legend({
    view: view,
    container: "legend-container",
  });

  let layerList = new LayerList({
    view: view,
    container: "layerlist-container",
  });

  const appDetailModalBtn = document.getElementById("app-details-action");
  const appDetailModalEl = document.getElementById("app-details-modal");
  appDetailModalBtn.addEventListener("click", () => {
    appDetailModalEl.open = !appDetailModalEl.open;
  });
});
