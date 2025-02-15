import Component from '@glimmer/component';

export interface VisuallyHiddenSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class VisuallyHidden extends Component<VisuallyHiddenSignature> {
  <template>
    <div class="sr-only" ...attributes>
      {{yield}}
    </div>
  </template>
}
