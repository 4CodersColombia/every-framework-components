# ef-modal-confirmation



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type      | Default      |
| ------------------ | ------------------- | ----------- | --------- | ------------ |
| `showModal`        | `show-modal`        |             | `boolean` | `false`      |
| `textCancel`       | `text-cancel`       |             | `string`  | `'Cancelar'` |
| `textConfirmation` | `text-confirmation` |             | `string`  | `'Aceptar'`  |
| `width`            | `width`             |             | `string`  | `undefined`  |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `event` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ef-modal](../ef-modal)
- [ef-button](../ef-button)

### Graph
```mermaid
graph TD;
  ef-modal-confirmation --> ef-modal
  ef-modal-confirmation --> ef-button
  style ef-modal-confirmation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
