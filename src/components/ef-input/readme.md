# ef-input

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                               | Default     |
| ------------- | -------------- | ----------- | -------------------------------------------------- | ----------- |
| `appendIcon`  | `append-icon`  |             | `string`                                           | `undefined` |
| `disabled`    | `disabled`     |             | `boolean`                                          | `false`     |
| `error`       | `error`        |             | `boolean`                                          | `false`     |
| `label`       | `label`        |             | `string`                                           | `undefined` |
| `message`     | `message`      |             | `string`                                           | `undefined` |
| `prependIcon` | `prepend-icon` |             | `string`                                           | `undefined` |
| `type`        | `type`         |             | `"datepicker" \| "number" \| "password" \| "text"` | `'text'`    |
| `value`       | `value`        |             | `string`                                           | `undefined` |


## Events

| Event    | Description | Type                  |
| -------- | ----------- | --------------------- |
| `change` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ef-date-picker](../ef-date-picker)

### Graph
```mermaid
graph TD;
  ef-date-picker --> ef-input
  style ef-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
