const mockMapbox = {
  map() {
    return mockMap;
  },
  styleLayer() {
    return mockStyleLayer;
  },
  marker: {
    icon() {}
  }
};

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
  on() {},
  icon() {}
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

const mock = {
  mapbox: mockMapbox,
  icon() {},
  marker() {
    return mockMarker;
  },
  circle() {
    return mockCircle;
  },
  Control: mockControl
};

export { mock };
