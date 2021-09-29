# ef-data-table



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type                                                                                                 | Default                                                                                                                                                                                                                                                   |
| -------------- | ---------------- | ----------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`         | --               |             | `{ [key: string]: string \| number; }[]`                                                             | `[     {       name: 'Frozen Yogurt',       calories: 159,     },     {       name: 'Ice cream sandwich',       calories: 237,     },   ]`                                                                                                                |
| `headers`      | --               |             | `{ text: string; value: string; slot?: (item: { [key: string]: string \| number; }) => Element; }[]` | `[     {       text: 'Dessert (100g serving)',       value: 'name',       slot: (item: { [key: string]: string \| number }) => {         return <button>{`hola ${item.name}`}</button>;       },     },     { text: 'Calories', value: 'calories' },   ]` |
| `urlIconArrow` | `url-icon-arrow` |             | `string`                                                                                             | `undefined`                                                                                                                                                                                                                                               |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
