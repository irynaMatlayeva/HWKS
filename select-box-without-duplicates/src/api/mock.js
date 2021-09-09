const camelcaseKeys = require('camelcase-keys');

const cluster = {
  variations: [
    {
      id: 13035,
      frame_size: 'M',
      size: 175
    },
    {
      id: 13039,
      frame_size: 'L',
      size: 185
    },
    {
      id: 13040,
      frame_size: 'M',
      size: 185
    },
    {
      id: 13036,
      frame_size: 'M',
      size: 175
    },
    {
      id: 13037,
      frame_size: 'XXL',
      size: 195
    },
    {
      id: 13038,
      frame_size: 'XL',
      size: 195
    },
    {
      id: 13041,
      frame_size: 'S',
      size: 165
    },
    {
      id: 13042,
      frame_size: 'S',
      size: 165
    }
  ]
}

camelcaseKeys({'foo-bar': true, nested: {unicorn_rainbow: true}},
  {deep: true, pascalCase: true});

export const getSizes = () => {
  return camelcaseKeys(cluster.variations)
}
