/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EfAddFile {
        "buttonText": string;
        "files": string[];
        "title": string;
    }
    interface EfAddImages {
        "addImage": boolean;
        "circle": boolean;
        "error": string;
        "height": number;
        "infoIcon": string;
        "itemActive": number;
        "multiple": boolean;
        "photosUrl": string[];
        "subTitle": string;
        "title": string;
        "urlIcon": string;
        "width": number;
    }
    interface EfButton {
        "color": 'PRIMARY' | 'SECONDARY';
        "disabled": boolean;
        "size": 'LARGE' | 'MEDIUM' | 'SMALL';
        "text": string;
        "urlIcon": string;
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
    interface EfCarrousel {
        "arrows": boolean;
        "colorContainer": string;
        "colorSelectedItems": string;
        "itemActive": number;
        "items": { id: number | string; title: string }[];
        "selectedItems": boolean;
    }
    interface EfCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "size": number;
        "urlIcon": string;
        "urlIconDisabled": string;
    }
    interface EfChip {
        "cancel": boolean;
        "text": string;
        "urlIcon": string;
        "value": string | number;
    }
    interface EfCountryPicker {
        "CountryCode": boolean;
        "countryName": boolean;
        "disabled": boolean;
        "errorMessage": string;
        "flag": boolean;
        "label": string;
        "value": string;
    }
    interface EfDataTable {
        "data": any[];
        "headers": { text: string; value: string; width?: string }[];
        "urlIconArrow": string;
    }
    interface EfDataTableFooter {
        "dataType": string;
        "disabledFilter": boolean;
        "errorMessageFilter": string;
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
        "disabled": boolean;
        "label": string;
        "maxDate": string;
        "minDate": string;
        "prependIcon": string;
        "showModal": boolean;
        "textCancel": string;
        "textConfirm": string;
        "value": string;
    }
    interface EfDropdown {
        "disabled": boolean;
        "errorMessage": string;
        "items": { id: string | number; text: string; iconUrl?: string }[];
        "label": string;
        "urlIconLeft": string;
        "urlIconRight": string;
        "value": string;
    }
    interface EfInput {
        "appendIcon": string;
        "disabled": boolean;
        "error": boolean;
        "label": string;
        "message": string;
        "prependIcon": string;
        "type": 'text' | 'password' | 'number' | 'datepicker';
        "value": string;
    }
    interface EfLikeButton {
        "checked": boolean;
        "urlIConLike": string;
        "urlIconUnlike": string;
    }
    interface EfListChips {
        "chipGroup": { value?: string | number; text: string; cancel?: boolean;urlIcon?:string; }[];
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
    interface EfSwitch {
        "checked": boolean;
        "disabled": boolean;
    }
    interface EfTabs {
        "arrows": boolean;
        "colorBackground": string;
        "colorContent": string;
        "colorItem": string;
        "colorSlide": string;
        "colorText": string;
        "tabActiveIndex": number;
        "titles": { text: string; value: string; icon?: string }[];
    }
    interface EfTemplateAdmin {
        "showModal": boolean;
    }
    interface EfTextarea {
        "appendIcon": string;
        "disabled": boolean;
        "error": boolean;
        "label": string;
        "limitCounter": number;
        "message": string;
        "prependIcon": string;
        "value": string;
    }
}
declare global {
    interface HTMLEfAddFileElement extends Components.EfAddFile, HTMLStencilElement {
    }
    var HTMLEfAddFileElement: {
        prototype: HTMLEfAddFileElement;
        new (): HTMLEfAddFileElement;
    };
    interface HTMLEfAddImagesElement extends Components.EfAddImages, HTMLStencilElement {
    }
    var HTMLEfAddImagesElement: {
        prototype: HTMLEfAddImagesElement;
        new (): HTMLEfAddImagesElement;
    };
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
    interface HTMLEfCarrouselElement extends Components.EfCarrousel, HTMLStencilElement {
    }
    var HTMLEfCarrouselElement: {
        prototype: HTMLEfCarrouselElement;
        new (): HTMLEfCarrouselElement;
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
    interface HTMLEfCountryPickerElement extends Components.EfCountryPicker, HTMLStencilElement {
    }
    var HTMLEfCountryPickerElement: {
        prototype: HTMLEfCountryPickerElement;
        new (): HTMLEfCountryPickerElement;
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
    interface HTMLEfLikeButtonElement extends Components.EfLikeButton, HTMLStencilElement {
    }
    var HTMLEfLikeButtonElement: {
        prototype: HTMLEfLikeButtonElement;
        new (): HTMLEfLikeButtonElement;
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
    interface HTMLEfSwitchElement extends Components.EfSwitch, HTMLStencilElement {
    }
    var HTMLEfSwitchElement: {
        prototype: HTMLEfSwitchElement;
        new (): HTMLEfSwitchElement;
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
    interface HTMLEfTextareaElement extends Components.EfTextarea, HTMLStencilElement {
    }
    var HTMLEfTextareaElement: {
        prototype: HTMLEfTextareaElement;
        new (): HTMLEfTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "ef-add-file": HTMLEfAddFileElement;
        "ef-add-images": HTMLEfAddImagesElement;
        "ef-button": HTMLEfButtonElement;
        "ef-buttons-icon": HTMLEfButtonsIconElement;
        "ef-card-info": HTMLEfCardInfoElement;
        "ef-carrousel": HTMLEfCarrouselElement;
        "ef-checkbox": HTMLEfCheckboxElement;
        "ef-chip": HTMLEfChipElement;
        "ef-country-picker": HTMLEfCountryPickerElement;
        "ef-data-table": HTMLEfDataTableElement;
        "ef-data-table-footer": HTMLEfDataTableFooterElement;
        "ef-date-picker": HTMLEfDatePickerElement;
        "ef-dropdown": HTMLEfDropdownElement;
        "ef-input": HTMLEfInputElement;
        "ef-like-button": HTMLEfLikeButtonElement;
        "ef-list-chips": HTMLEfListChipsElement;
        "ef-modal": HTMLEfModalElement;
        "ef-modal-confirmation": HTMLEfModalConfirmationElement;
        "ef-modal-right": HTMLEfModalRightElement;
        "ef-paginator": HTMLEfPaginatorElement;
        "ef-switch": HTMLEfSwitchElement;
        "ef-tabs": HTMLEfTabsElement;
        "ef-template-admin": HTMLEfTemplateAdminElement;
        "ef-textarea": HTMLEfTextareaElement;
    }
}
declare namespace LocalJSX {
    interface EfAddFile {
        "buttonText"?: string;
        "files"?: string[];
        "onChange-value"?: (event: CustomEvent<File[]>) => void;
        "onDelete-file"?: (event: CustomEvent<number>) => void;
        "title"?: string;
    }
    interface EfAddImages {
        "addImage"?: boolean;
        "circle"?: boolean;
        "error"?: string;
        "height"?: number;
        "infoIcon"?: string;
        "itemActive"?: number;
        "multiple"?: boolean;
        "onChange-value"?: (event: CustomEvent<File[]>) => void;
        "onDelete-image"?: (event: CustomEvent<number>) => void;
        "photosUrl"?: string[];
        "subTitle"?: string;
        "title"?: string;
        "urlIcon"?: string;
        "width"?: number;
    }
    interface EfButton {
        "color"?: 'PRIMARY' | 'SECONDARY';
        "disabled"?: boolean;
        "onEvent"?: (event: CustomEvent<any>) => void;
        "size"?: 'LARGE' | 'MEDIUM' | 'SMALL';
        "text"?: string;
        "urlIcon"?: string;
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
    interface EfCarrousel {
        "arrows"?: boolean;
        "colorContainer"?: string;
        "colorSelectedItems"?: string;
        "itemActive"?: number;
        "items"?: { id: number | string; title: string }[];
        "onEvent"?: (event: CustomEvent<number>) => void;
        "selectedItems"?: boolean;
    }
    interface EfCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onEvent"?: (event: CustomEvent<any>) => void;
        "size"?: number;
        "urlIcon"?: string;
        "urlIconDisabled"?: string;
    }
    interface EfChip {
        "cancel"?: boolean;
        "onEvent"?: (event: CustomEvent<string | number>) => void;
        "text"?: string;
        "urlIcon"?: string;
        "value"?: string | number;
    }
    interface EfCountryPicker {
        "CountryCode"?: boolean;
        "countryName"?: boolean;
        "disabled"?: boolean;
        "errorMessage"?: string;
        "flag"?: boolean;
        "label"?: string;
        "onChange-value"?: (event: CustomEvent<object>) => void;
        "value"?: string;
    }
    interface EfDataTable {
        "data"?: any[];
        "headers"?: { text: string; value: string; width?: string }[];
        "urlIconArrow"?: string;
    }
    interface EfDataTableFooter {
        "dataType"?: string;
        "disabledFilter"?: boolean;
        "errorMessageFilter"?: string;
        "itemsCount"?: string;
        "itemsFilter"?: { id: string | number; text: string }[];
        "labelFilter"?: string;
        "leftText"?: string;
        "onChange-value-filter"?: (event: CustomEvent<object>) => void;
        "onChange-value-page-active"?: (event: CustomEvent<number>) => void;
        "pageActive"?: number;
        "pages"?: number;
        "rightText"?: string;
        "valueFilter"?: number;
        "visiblePages"?: number;
    }
    interface EfDatePicker {
        "appendIcon"?: string;
        "disabled"?: boolean;
        "label"?: string;
        "maxDate"?: string;
        "minDate"?: string;
        "onChange-value"?: (event: CustomEvent<string>) => void;
        "prependIcon"?: string;
        "showModal"?: boolean;
        "textCancel"?: string;
        "textConfirm"?: string;
        "value"?: string;
    }
    interface EfDropdown {
        "disabled"?: boolean;
        "errorMessage"?: string;
        "items"?: { id: string | number; text: string; iconUrl?: string }[];
        "label"?: string;
        "onChange-value"?: (event: CustomEvent<object>) => void;
        "urlIconLeft"?: string;
        "urlIconRight"?: string;
        "value"?: string;
    }
    interface EfInput {
        "appendIcon"?: string;
        "disabled"?: boolean;
        "error"?: boolean;
        "label"?: string;
        "message"?: string;
        "onChange-value"?: (event: CustomEvent<string>) => void;
        "prependIcon"?: string;
        "type"?: 'text' | 'password' | 'number' | 'datepicker';
        "value"?: string;
    }
    interface EfLikeButton {
        "checked"?: boolean;
        "onEvent"?: (event: CustomEvent<any>) => void;
        "urlIConLike"?: string;
        "urlIconUnlike"?: string;
    }
    interface EfListChips {
        "chipGroup"?: { value?: string | number; text: string; cancel?: boolean;urlIcon?:string; }[];
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
    interface EfSwitch {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onEvent"?: (event: CustomEvent<any>) => void;
    }
    interface EfTabs {
        "arrows"?: boolean;
        "colorBackground"?: string;
        "colorContent"?: string;
        "colorItem"?: string;
        "colorSlide"?: string;
        "colorText"?: string;
        "onChange-tab"?: (event: CustomEvent<string>) => void;
        "tabActiveIndex"?: number;
        "titles"?: { text: string; value: string; icon?: string }[];
    }
    interface EfTemplateAdmin {
        "showModal"?: boolean;
    }
    interface EfTextarea {
        "appendIcon"?: string;
        "disabled"?: boolean;
        "error"?: boolean;
        "label"?: string;
        "limitCounter"?: number;
        "message"?: string;
        "onChange-value"?: (event: CustomEvent<string>) => void;
        "prependIcon"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "ef-add-file": EfAddFile;
        "ef-add-images": EfAddImages;
        "ef-button": EfButton;
        "ef-buttons-icon": EfButtonsIcon;
        "ef-card-info": EfCardInfo;
        "ef-carrousel": EfCarrousel;
        "ef-checkbox": EfCheckbox;
        "ef-chip": EfChip;
        "ef-country-picker": EfCountryPicker;
        "ef-data-table": EfDataTable;
        "ef-data-table-footer": EfDataTableFooter;
        "ef-date-picker": EfDatePicker;
        "ef-dropdown": EfDropdown;
        "ef-input": EfInput;
        "ef-like-button": EfLikeButton;
        "ef-list-chips": EfListChips;
        "ef-modal": EfModal;
        "ef-modal-confirmation": EfModalConfirmation;
        "ef-modal-right": EfModalRight;
        "ef-paginator": EfPaginator;
        "ef-switch": EfSwitch;
        "ef-tabs": EfTabs;
        "ef-template-admin": EfTemplateAdmin;
        "ef-textarea": EfTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ef-add-file": LocalJSX.EfAddFile & JSXBase.HTMLAttributes<HTMLEfAddFileElement>;
            "ef-add-images": LocalJSX.EfAddImages & JSXBase.HTMLAttributes<HTMLEfAddImagesElement>;
            "ef-button": LocalJSX.EfButton & JSXBase.HTMLAttributes<HTMLEfButtonElement>;
            "ef-buttons-icon": LocalJSX.EfButtonsIcon & JSXBase.HTMLAttributes<HTMLEfButtonsIconElement>;
            "ef-card-info": LocalJSX.EfCardInfo & JSXBase.HTMLAttributes<HTMLEfCardInfoElement>;
            "ef-carrousel": LocalJSX.EfCarrousel & JSXBase.HTMLAttributes<HTMLEfCarrouselElement>;
            "ef-checkbox": LocalJSX.EfCheckbox & JSXBase.HTMLAttributes<HTMLEfCheckboxElement>;
            "ef-chip": LocalJSX.EfChip & JSXBase.HTMLAttributes<HTMLEfChipElement>;
            "ef-country-picker": LocalJSX.EfCountryPicker & JSXBase.HTMLAttributes<HTMLEfCountryPickerElement>;
            "ef-data-table": LocalJSX.EfDataTable & JSXBase.HTMLAttributes<HTMLEfDataTableElement>;
            "ef-data-table-footer": LocalJSX.EfDataTableFooter & JSXBase.HTMLAttributes<HTMLEfDataTableFooterElement>;
            "ef-date-picker": LocalJSX.EfDatePicker & JSXBase.HTMLAttributes<HTMLEfDatePickerElement>;
            "ef-dropdown": LocalJSX.EfDropdown & JSXBase.HTMLAttributes<HTMLEfDropdownElement>;
            "ef-input": LocalJSX.EfInput & JSXBase.HTMLAttributes<HTMLEfInputElement>;
            "ef-like-button": LocalJSX.EfLikeButton & JSXBase.HTMLAttributes<HTMLEfLikeButtonElement>;
            "ef-list-chips": LocalJSX.EfListChips & JSXBase.HTMLAttributes<HTMLEfListChipsElement>;
            "ef-modal": LocalJSX.EfModal & JSXBase.HTMLAttributes<HTMLEfModalElement>;
            "ef-modal-confirmation": LocalJSX.EfModalConfirmation & JSXBase.HTMLAttributes<HTMLEfModalConfirmationElement>;
            "ef-modal-right": LocalJSX.EfModalRight & JSXBase.HTMLAttributes<HTMLEfModalRightElement>;
            "ef-paginator": LocalJSX.EfPaginator & JSXBase.HTMLAttributes<HTMLEfPaginatorElement>;
            "ef-switch": LocalJSX.EfSwitch & JSXBase.HTMLAttributes<HTMLEfSwitchElement>;
            "ef-tabs": LocalJSX.EfTabs & JSXBase.HTMLAttributes<HTMLEfTabsElement>;
            "ef-template-admin": LocalJSX.EfTemplateAdmin & JSXBase.HTMLAttributes<HTMLEfTemplateAdminElement>;
            "ef-textarea": LocalJSX.EfTextarea & JSXBase.HTMLAttributes<HTMLEfTextareaElement>;
        }
    }
}
