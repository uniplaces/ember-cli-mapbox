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

export const mockMap = {
  on() {},
  removeLayer() {}
};

export const mockStyleLayer = {
  addTo() {}
};

export const mockMarker = {
  addTo() {},
  setIcon() {},
  bindPopup() {},
  on() {},
  icon() {}
};

const mockCircle = {
  addTo() {}
};

export const mockGeoJson = {
  openPopup() {},
  getBounds() {},
  on() {},
  addTo() {}
}

const mockControl = {
  Zoom() {
    return {
      addTo() {}
    };
  }
};

const Lmock = {
  mapbox: mockMapbox,
  icon() {},
  marker() {
    return mockMarker;
  },
  circle() {
    return mockCircle;
  },
  Control: mockControl,
  geoJson() {
    return mockGeoJson;
  }
};

export default Lmock;
