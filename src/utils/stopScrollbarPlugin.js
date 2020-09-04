import { ScrollbarPlugin } from 'smooth-scrollbar';

class stopScrollbarPlugin extends ScrollbarPlugin {
  static pluginName = 'stopScrollbar';

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

export default stopScrollbarPlugin;
