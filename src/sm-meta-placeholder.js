class SmMetaPlaceholder {
  beforeRegister() {
    this.is = 'sm-meta-placeholder';

    this.properties = {
      show: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      shouldInline: {
        type: Boolean,
        observer: '_shouldInlineChanged',
        value: false
      }
    };
  }

  _shouldInlineChanged(value) {
    this.customStyle['--display'] = value ? 'inline' : 'block';
    this.updateStyles();
  }
}

Polymer(SmMetaPlaceholder);
