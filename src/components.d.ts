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
    interface EfButtonsIcon {
        "align": 'HORIZONTAL' | 'VERTICAL';
        "buttons": { urlIcon: string; id: string }[];
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
    interface EfChip {
        "cancel": boolean;
        "text": string;
        "value": string | number;
    }
    interface EfDataTable {
        "data": { [key: string]: string | number }[];
        "headers": { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
        "icon_arrow": string;
    }
    interface EfDataTableFooter {
        "dataType": string;
        "disabledFilter": boolean;
        "errorMessageFilter": string;
        "iconFilter": string;
        "itemsCount": string;
        "itemsFilter": { id: string | number; text: string }[];
        "labelFilter": string;
        "leftText": string;
        "pageActive": number;
        "pages": number;
        "rightText": string;
        "valueFilter": number;
        "visiblePages": number;
    }
    interface EfDatePicker {
        "appendIcon": string;
        "date": string;
        "label": string;
        "maxDate": string;
        "minDate": string;
        "prependIcon": string;
        "showModal": boolean;
        "textCancel": string;
        "textConfirm": string;
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
    interface EfListChips {
        "chipGroup": { value?: string | number; text: string; cancel?: boolean }[];
        "visibleChips": number;
    }
    interface EfModal {
        "showModal": boolean;
        "width": string;
    }
    interface EfModalConfirmation {
        "showModal": boolean;
        "textCancel": string;
        "textConfirmation": string;
        "width": string;
    }
    interface EfModalRight {
        "showModal": boolean;
        "width": string;
    }
    interface EfPaginator {
        "pageActive": number;
        "pages": number;
        "visiblePages": number;
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
    interface HTMLEfButtonsIconElement extends Components.EfButtonsIcon, HTMLStencilElement {
    }
    var HTMLEfButtonsIconElement: {
        prototype: HTMLEfButtonsIconElement;
        new (): HTMLEfButtonsIconElement;
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
    interface HTMLEfChipElement extends Components.EfChip, HTMLStencilElement {
    }
    var HTMLEfChipElement: {
        prototype: HTMLEfChipElement;
        new (): HTMLEfChipElement;
    };
    interface HTMLEfDataTableElement extends Components.EfDataTable, HTMLStencilElement {
    }
    var HTMLEfDataTableElement: {
        prototype: HTMLEfDataTableElement;
        new (): HTMLEfDataTableElement;
    };
    interface HTMLEfDataTableFooterElement extends Components.EfDataTableFooter, HTMLStencilElement {
    }
    var HTMLEfDataTableFooterElement: {
        prototype: HTMLEfDataTableFooterElement;
        new (): HTMLEfDataTableFooterElement;
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
    interface HTMLEfListChipsElement extends Components.EfListChips, HTMLStencilElement {
    }
    var HTMLEfListChipsElement: {
        prototype: HTMLEfListChipsElement;
        new (): HTMLEfListChipsElement;
    };
    interface HTMLEfModalElement extends Components.EfModal, HTMLStencilElement {
    }
    var HTMLEfModalElement: {
        prototype: HTMLEfModalElement;
        new (): HTMLEfModalElement;
    };
    interface HTMLEfModalConfirmationElement extends Components.EfModalConfirmation, HTMLStencilElement {
    }
    var HTMLEfModalConfirmationElement: {
        prototype: HTMLEfModalConfirmationElement;
        new (): HTMLEfModalConfirmationElement;
    };
    interface HTMLEfModalRightElement extends Components.EfModalRight, HTMLStencilElement {
    }
    var HTMLEfModalRightElement: {
        prototype: HTMLEfModalRightElement;
        new (): HTMLEfModalRightElement;
    };
    interface HTMLEfPaginatorElement extends Components.EfPaginator, HTMLStencilElement {
    }
    var HTMLEfPaginatorElement: {
        prototype: HTMLEfPaginatorElement;
        new (): HTMLEfPaginatorElement;
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
        "ef-buttons-icon": HTMLEfButtonsIconElement;
        "ef-card-info": HTMLEfCardInfoElement;
        "ef-checkbox": HTMLEfCheckboxElement;
        "ef-chip": HTMLEfChipElement;
        "ef-data-table": HTMLEfDataTableElement;
        "ef-data-table-footer": HTMLEfDataTableFooterElement;
        "ef-date-picker": HTMLEfDatePickerElement;
        "ef-dropdown": HTMLEfDropdownElement;
        "ef-input": HTMLEfInputElement;
        "ef-list-chips": HTMLEfListChipsElement;
        "ef-modal": HTMLEfModalElement;
        "ef-modal-confirmation": HTMLEfModalConfirmationElement;
        "ef-modal-right": HTMLEfModalRightElement;
        "ef-paginator": HTMLEfPaginatorElement;
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
    interface EfButtonsIcon {
        "align"?: 'HORIZONTAL' | 'VERTICAL';
        "buttons"?: { urlIcon: string; id: string }[];
        "onEvent"?: (event: CustomEvent<string>) => void;
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
    interface EfChip {
        "cancel"?: boolean;
        "onEvent"?: (event: CustomEvent<string | number>) => void;
        "text"?: string;
        "value"?: string | number;
    }
    interface EfDataTable {
        "data"?: { [key: string]: string | number }[];
        "headers"?: { text: string; value: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
        "icon_arrow"?: string;
    }
    interface EfDataTableFooter {
        "dataType"?: string;
        "disabledFilter"?: boolean;
        "errorMessageFilter"?: string;
        "iconFilter"?: string;
        "itemsCount"?: string;
        "itemsFilter"?: { id: string | number; text: string }[];
        "labelFilter"?: string;
        "leftText"?: string;
        "onValueChangeFilter"?: (event: CustomEvent<object>) => void;
        "onValueChangePageActive"?: (event: CustomEvent<number>) => void;
        "pageActive"?: number;
        "pages"?: number;
        "rightText"?: string;
        "valueFilter"?: number;
        "visiblePages"?: number;
    }
    interface EfDatePicker {
        "appendIcon"?: string;
        "date"?: string;
        "label"?: string;
        "maxDate"?: string;
        "minDate"?: string;
        "onEvent"?: (event: CustomEvent<string>) => void;
        "prependIcon"?: string;
        "showModal"?: boolean;
        "textCancel"?: string;
        "textConfirm"?: string;
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
    interface EfListChips {
        "chipGroup"?: { value?: string | number; text: string; cancel?: boolean }[];
        "visibleChips"?: number;
    }
    interface EfModal {
        "showModal"?: boolean;
        "width"?: string;
    }
    interface EfModalConfirmation {
        "onEvent"?: (event: CustomEvent<any>) => void;
        "showModal"?: boolean;
        "textCancel"?: string;
        "textConfirmation"?: string;
        "width"?: string;
    }
    interface EfModalRight {
        "showModal"?: boolean;
        "width"?: string;
    }
    interface EfPaginator {
        "onEvent"?: (event: CustomEvent<number>) => void;
        "pageActive"?: number;
        "pages"?: number;
        "visiblePages"?: number;
    }
    interface EfTabs {
        "titles"?: { text: string; value: string; icon?: string; slot?: (item: { [key: string]: string | number }) => JSX.Element }[];
    }
    interface EfTemplateAdmin {
        "showModal"?: boolean;
    }
    interface IntrinsicElements {
        "ef-button": EfButton;
        "ef-buttons-icon": EfButtonsIcon;
        "ef-card-info": EfCardInfo;
        "ef-checkbox": EfCheckbox;
        "ef-chip": EfChip;
        "ef-data-table": EfDataTable;
        "ef-data-table-footer": EfDataTableFooter;
        "ef-date-picker": EfDatePicker;
        "ef-dropdown": EfDropdown;
        "ef-input": EfInput;
        "ef-list-chips": EfListChips;
        "ef-modal": EfModal;
        "ef-modal-confirmation": EfModalConfirmation;
        "ef-modal-right": EfModalRight;
        "ef-paginator": EfPaginator;
        "ef-tabs": EfTabs;
        "ef-template-admin": EfTemplateAdmin;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ef-button": LocalJSX.EfButton & JSXBase.HTMLAttributes<HTMLEfButtonElement>;
            "ef-buttons-icon": LocalJSX.EfButtonsIcon & JSXBase.HTMLAttributes<HTMLEfButtonsIconElement>;
            "ef-card-info": LocalJSX.EfCardInfo & JSXBase.HTMLAttributes<HTMLEfCardInfoElement>;
            "ef-checkbox": LocalJSX.EfCheckbox & JSXBase.HTMLAttributes<HTMLEfCheckboxElement>;
            "ef-chip": LocalJSX.EfChip & JSXBase.HTMLAttributes<HTMLEfChipElement>;
            "ef-data-table": LocalJSX.EfDataTable & JSXBase.HTMLAttributes<HTMLEfDataTableElement>;
            "ef-data-table-footer": LocalJSX.EfDataTableFooter & JSXBase.HTMLAttributes<HTMLEfDataTableFooterElement>;
            "ef-date-picker": LocalJSX.EfDatePicker & JSXBase.HTMLAttributes<HTMLEfDatePickerElement>;
            "ef-dropdown": LocalJSX.EfDropdown & JSXBase.HTMLAttributes<HTMLEfDropdownElement>;
            "ef-input": LocalJSX.EfInput & JSXBase.HTMLAttributes<HTMLEfInputElement>;
            "ef-list-chips": LocalJSX.EfListChips & JSXBase.HTMLAttributes<HTMLEfListChipsElement>;
            "ef-modal": LocalJSX.EfModal & JSXBase.HTMLAttributes<HTMLEfModalElement>;
            "ef-modal-confirmation": LocalJSX.EfModalConfirmation & JSXBase.HTMLAttributes<HTMLEfModalConfirmationElement>;
            "ef-modal-right": LocalJSX.EfModalRight & JSXBase.HTMLAttributes<HTMLEfModalRightElement>;
            "ef-paginator": LocalJSX.EfPaginator & JSXBase.HTMLAttributes<HTMLEfPaginatorElement>;
            "ef-tabs": LocalJSX.EfTabs & JSXBase.HTMLAttributes<HTMLEfTabsElement>;
            "ef-template-admin": LocalJSX.EfTemplateAdmin & JSXBase.HTMLAttributes<HTMLEfTemplateAdminElement>;
        }
    }
}
