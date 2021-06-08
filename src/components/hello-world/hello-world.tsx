import {Component, Prop, h } from '@stencil/core'

@Component({
    tag: 'hello-world',
  })
  export class HelloWorld {
  
    // Indicate that name should be a public property on the component
    @Prop() name: string;
  
    render() {
      return (
        <p>
          Surprise motherfuckers {this.name}
        </p>
      );
    }
  }