/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface HelloWorld {
        "name": string;
    }
    interface XuachGlobalInput {
        "appendIcon": string;
        "disabled": boolean;
        "errorMessage": string;
        "label": string;
        "prependIcon": string;
        "text": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLHelloWorldElement extends Components.HelloWorld, HTMLStencilElement {
    }
    var HTMLHelloWorldElement: {
        prototype: HTMLHelloWorldElement;
        new (): HTMLHelloWorldElement;
    };
    interface HTMLXuachGlobalInputElement extends Components.XuachGlobalInput, HTMLStencilElement {
    }
    var HTMLXuachGlobalInputElement: {
        prototype: HTMLXuachGlobalInputElement;
        new (): HTMLXuachGlobalInputElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "hello-world": HTMLHelloWorldElement;
        "xuach-global-input": HTMLXuachGlobalInputElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface HelloWorld {
        "name"?: string;
    }
    interface XuachGlobalInput {
        "appendIcon"?: string;
        "disabled"?: boolean;
        "errorMessage"?: string;
        "label"?: string;
        "prependIcon"?: string;
        "text"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "hello-world": HelloWorld;
        "xuach-global-input": XuachGlobalInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "hello-world": LocalJSX.HelloWorld & JSXBase.HTMLAttributes<HTMLHelloWorldElement>;
            "xuach-global-input": LocalJSX.XuachGlobalInput & JSXBase.HTMLAttributes<HTMLXuachGlobalInputElement>;
        }
    }
}
