/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EfButton {
        "color": 'PRIMARY' | 'SECONDARY';
        "disabled": boolean;
        "icon": string;
        "size": 'LARGE' | 'MEDIUM' | 'SMALL';
        "text": string;
    }
    interface EfCardInfo {
        "image": string;
        "styleTitle": { [key: string]: string };
        "subtitle": string;
        "title": string;
    }
    interface EfCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "size": number;
    }
    interface EfDataTable {
        "data": { [key: string]: string | number }[];
        "headers": { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
        "icon_arrow": string;
    }
    interface EfDatePicker {
        "appendIcon": string;
        "date": string;
        "label": string;
        "prependIcon": string;
        "showModal": boolean;
    }
    interface EfDropdown {
        "disabled": boolean;
        "errorMessage": string;
        "icon": string;
        "items": { id: string | number; text: string }[];
        "label": string;
        "value": string;
    }
    interface EfInput {
        "appendIcon": string;
        "disabled": boolean;
        "errorMessage": string;
        "label": string;
        "prependIcon": string;
        "type": 'text' | 'password';
        "value": string;
    }
    interface EfModal {
        "showModal": boolean;
        "width": string;
    }
    interface EfModalRight {
        "showModal": boolean;
        "width": string;
    }
    interface EfTabs {
        "titles": { text: string; value: string; icon?: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
    }
    interface EfTemplateAdmin {
        "showModal": boolean;
    }
}
declare global {
    interface HTMLEfButtonElement extends Components.EfButton, HTMLStencilElement {
    }
    var HTMLEfButtonElement: {
        prototype: HTMLEfButtonElement;
        new (): HTMLEfButtonElement;
    };
    interface HTMLEfCardInfoElement extends Components.EfCardInfo, HTMLStencilElement {
    }
    var HTMLEfCardInfoElement: {
        prototype: HTMLEfCardInfoElement;
        new (): HTMLEfCardInfoElement;
    };
    interface HTMLEfCheckboxElement extends Components.EfCheckbox, HTMLStencilElement {
    }
    var HTMLEfCheckboxElement: {
        prototype: HTMLEfCheckboxElement;
        new (): HTMLEfCheckboxElement;
    };
    interface HTMLEfDataTableElement extends Components.EfDataTable, HTMLStencilElement {
    }
    var HTMLEfDataTableElement: {
        prototype: HTMLEfDataTableElement;
        new (): HTMLEfDataTableElement;
    };
    interface HTMLEfDatePickerElement extends Components.EfDatePicker, HTMLStencilElement {
    }
    var HTMLEfDatePickerElement: {
        prototype: HTMLEfDatePickerElement;
        new (): HTMLEfDatePickerElement;
    };
    interface HTMLEfDropdownElement extends Components.EfDropdown, HTMLStencilElement {
    }
    var HTMLEfDropdownElement: {
        prototype: HTMLEfDropdownElement;
        new (): HTMLEfDropdownElement;
    };
    interface HTMLEfInputElement extends Components.EfInput, HTMLStencilElement {
    }
    var HTMLEfInputElement: {
        prototype: HTMLEfInputElement;
        new (): HTMLEfInputElement;
    };
    interface HTMLEfModalElement extends Components.EfModal, HTMLStencilElement {
    }
    var HTMLEfModalElement: {
        prototype: HTMLEfModalElement;
        new (): HTMLEfModalElement;
    };
    interface HTMLEfModalRightElement extends Components.EfModalRight, HTMLStencilElement {
    }
    var HTMLEfModalRightElement: {
        prototype: HTMLEfModalRightElement;
        new (): HTMLEfModalRightElement;
    };
    interface HTMLEfTabsElement extends Components.EfTabs, HTMLStencilElement {
    }
    var HTMLEfTabsElement: {
        prototype: HTMLEfTabsElement;
        new (): HTMLEfTabsElement;
    };
    interface HTMLEfTemplateAdminElement extends Components.EfTemplateAdmin, HTMLStencilElement {
    }
    var HTMLEfTemplateAdminElement: {
        prototype: HTMLEfTemplateAdminElement;
        new (): HTMLEfTemplateAdminElement;
    };
    interface HTMLElementTagNameMap {
        "ef-button": HTMLEfButtonElement;
        "ef-card-info": HTMLEfCardInfoElement;
        "ef-checkbox": HTMLEfCheckboxElement;
        "ef-data-table": HTMLEfDataTableElement;
        "ef-date-picker": HTMLEfDatePickerElement;
        "ef-dropdown": HTMLEfDropdownElement;
        "ef-input": HTMLEfInputElement;
        "ef-modal": HTMLEfModalElement;
        "ef-modal-right": HTMLEfModalRightElement;
        "ef-tabs": HTMLEfTabsElement;
        "ef-template-admin": HTMLEfTemplateAdminElement;
    }
}
declare namespace LocalJSX {
    interface EfButton {
        "color"?: 'PRIMARY' | 'SECONDARY';
        "disabled"?: boolean;
        "icon"?: string;
        "onEvent"?: (event: CustomEvent<any>) => void;
        "size"?: 'LARGE' | 'MEDIUM' | 'SMALL';
        "text"?: string;
    }
    interface EfCardInfo {
        "image"?: string;
        "styleTitle"?: { [key: string]: string };
        "subtitle"?: string;
        "title"?: string;
    }
    interface EfCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onEvent"?: (event: CustomEvent<any>) => void;
        "size"?: number;
    }
    interface EfDataTable {
        "data"?: { [key: string]: string | number }[];
        "headers"?: { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
        "icon_arrow"?: string;
    }
    interface EfDatePicker {
        "appendIcon"?: string;
        "date"?: string;
        "label"?: string;
        "onEvent"?: (event: CustomEvent<any>) => void;
        "prependIcon"?: string;
        "showModal"?: boolean;
    }
    interface EfDropdown {
        "disabled"?: boolean;
        "errorMessage"?: string;
        "icon"?: string;
        "items"?: { id: string | number; text: string }[];
        "label"?: string;
        "onValueChange"?: (event: CustomEvent<object>) => void;
        "value"?: string;
    }
    interface EfInput {
        "appendIcon"?: string;
        "disabled"?: boolean;
        "errorMessage"?: string;
        "label"?: string;
        "onEvent"?: (event: CustomEvent<string>) => void;
        "prependIcon"?: string;
        "type"?: 'text' | 'password';
        "value"?: string;
    }
    interface EfModal {
        "showModal"?: boolean;
        "width"?: string;
    }
    interface EfModalRight {
        "showModal"?: boolean;
        "width"?: string;
    }
    interface EfTabs {
        "titles"?: { text: string; value: string; icon?: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
    }
    interface EfTemplateAdmin {
        "showModal"?: boolean;
    }
    interface IntrinsicElements {
        "ef-button": EfButton;
        "ef-card-info": EfCardInfo;
        "ef-checkbox": EfCheckbox;
        "ef-data-table": EfDataTable;
        "ef-date-picker": EfDatePicker;
        "ef-dropdown": EfDropdown;
        "ef-input": EfInput;
        "ef-modal": EfModal;
        "ef-modal-right": EfModalRight;
        "ef-tabs": EfTabs;
        "ef-template-admin": EfTemplateAdmin;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ef-button": LocalJSX.EfButton & JSXBase.HTMLAttributes<HTMLEfButtonElement>;
            "ef-card-info": LocalJSX.EfCardInfo & JSXBase.HTMLAttributes<HTMLEfCardInfoElement>;
            "ef-checkbox": LocalJSX.EfCheckbox & JSXBase.HTMLAttributes<HTMLEfCheckboxElement>;
            "ef-data-table": LocalJSX.EfDataTable & JSXBase.HTMLAttributes<HTMLEfDataTableElement>;
            "ef-date-picker": LocalJSX.EfDatePicker & JSXBase.HTMLAttributes<HTMLEfDatePickerElement>;
            "ef-dropdown": LocalJSX.EfDropdown & JSXBase.HTMLAttributes<HTMLEfDropdownElement>;
            "ef-input": LocalJSX.EfInput & JSXBase.HTMLAttributes<HTMLEfInputElement>;
            "ef-modal": LocalJSX.EfModal & JSXBase.HTMLAttributes<HTMLEfModalElement>;
            "ef-modal-right": LocalJSX.EfModalRight & JSXBase.HTMLAttributes<HTMLEfModalRightElement>;
            "ef-tabs": LocalJSX.EfTabs & JSXBase.HTMLAttributes<HTMLEfTabsElement>;
            "ef-template-admin": LocalJSX.EfTemplateAdmin & JSXBase.HTMLAttributes<HTMLEfTemplateAdminElement>;
        }
    }
}
