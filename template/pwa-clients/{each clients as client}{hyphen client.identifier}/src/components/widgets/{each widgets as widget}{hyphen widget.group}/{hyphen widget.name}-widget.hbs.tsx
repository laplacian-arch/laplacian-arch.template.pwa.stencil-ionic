import { Component{{#if widget.params}}, Prop{{/if}}{{#if widget.events}}, Event, EventEmitter{{/if}} } from '@stencil/core'

@Component({
  tag: 'app-{{hyphen widget.name}}',
})
export class {{upper-camel widget.name}}Widget {

  {{#each widget.params as |param|}}
  @Prop() {{lower-camel param.name}}: {{param.type}}
  {{/each}}

  {{#each widget.events as |event|}}
  @Event() {{lower-camel event.name}}: EventEmitter
  {{/each}}

  render() {
    return (
      {{shift widget.template 6}}
    )
  }
}
