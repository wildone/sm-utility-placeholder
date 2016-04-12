const placeholderDefaults = { type: String, value: '' },
    usePlaceholdDefaults = { type: Boolean, value: false };

export default function(placeholder = {}, usePlacehold = {}) {
  return {
    properties: {
      placeholder: Object.assign({}, placeholderDefaults, placeholder),
      usePlaceholder: Object.assign({}, usePlaceholdDefaults, usePlacehold)
    }
  };
}
