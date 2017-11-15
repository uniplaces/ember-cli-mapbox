const mockMap = {
  on() {},
  removeLayer() {}
};

const mockStyleLayer = {
  addTo() {}
};

const mockMarker = {
  addTo() {},
  setIcon() {},
  bindPopup() {},
  on() {}
};

const mockCircle = {
  addTo() {}
};

const mockControl = {
  Zoom() {
    return {
      addTo() {}
    };
  }
};

const mockMapBox = {
  mapbox: {
    map() {
      return mockMap;
    },
    styleLayer() {
      return mockStyleLayer;
    }
  },
  icon() {},
  marker() {
    return mockMarker;
  },
  circle() {
    return mockCircle;
  },
  Control: mockControl
};

export default mockMapBox;
