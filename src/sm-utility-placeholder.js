class SmUtilityPlaceholder {
  beforeRegister() {
    this.is = 'sm-utility-placeholder';

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

Polymer(SmUtilityPlaceholder);
