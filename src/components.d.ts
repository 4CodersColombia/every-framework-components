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
    interface EfCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "size": number;
    }
    interface EfDataTable {
        "data": { name: string; value: string | number }[][];
        "headers": string[];
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
    interface EfProfileRol {
        "image": string;
        "name": string;
        "rol": string;
    }
}
declare global {
    interface HTMLEfButtonElement extends Components.EfButton, HTMLStencilElement {
    }
    var HTMLEfButtonElement: {
        prototype: HTMLEfButtonElement;
        new (): HTMLEfButtonElement;
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
    interface HTMLEfProfileRolElement extends Components.EfProfileRol, HTMLStencilElement {
    }
    var HTMLEfProfileRolElement: {
        prototype: HTMLEfProfileRolElement;
        new (): HTMLEfProfileRolElement;
    };
    interface HTMLElementTagNameMap {
        "ef-button": HTMLEfButtonElement;
        "ef-checkbox": HTMLEfCheckboxElement;
        "ef-data-table": HTMLEfDataTableElement;
        "ef-dropdown": HTMLEfDropdownElement;
        "ef-input": HTMLEfInputElement;
        "ef-profile-rol": HTMLEfProfileRolElement;
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
    interface EfCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onEvent"?: (event: CustomEvent<any>) => void;
        "size"?: number;
    }
    interface EfDataTable {
        "data"?: { name: string; value: string | number }[][];
        "headers"?: string[];
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
    interface EfProfileRol {
        "image"?: string;
        "name"?: string;
        "rol"?: string;
    }
    interface IntrinsicElements {
        "ef-button": EfButton;
        "ef-checkbox": EfCheckbox;
        "ef-data-table": EfDataTable;
        "ef-dropdown": EfDropdown;
        "ef-input": EfInput;
        "ef-profile-rol": EfProfileRol;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ef-button": LocalJSX.EfButton & JSXBase.HTMLAttributes<HTMLEfButtonElement>;
            "ef-checkbox": LocalJSX.EfCheckbox & JSXBase.HTMLAttributes<HTMLEfCheckboxElement>;
            "ef-data-table": LocalJSX.EfDataTable & JSXBase.HTMLAttributes<HTMLEfDataTableElement>;
            "ef-dropdown": LocalJSX.EfDropdown & JSXBase.HTMLAttributes<HTMLEfDropdownElement>;
            "ef-input": LocalJSX.EfInput & JSXBase.HTMLAttributes<HTMLEfInputElement>;
            "ef-profile-rol": LocalJSX.EfProfileRol & JSXBase.HTMLAttributes<HTMLEfProfileRolElement>;
        }
    }
}
