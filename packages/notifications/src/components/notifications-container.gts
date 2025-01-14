import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import didUpdate from '@ember/render-modifiers/modifiers/did-update';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';
import useFrontileClass from '@frontile/core/helpers/use-frontile-class';
import NotificationCard from './notification-card';
import type NotificationsService from '../services/notifications';
import type Notification from '../-private/notification';
import { type containerPlacement } from '../-private/types';

export interface NotificationsContainerArgs {
  /**
   * The placement of the notifications
   *
   * @defaultValue 'bottom-right'
   */
  placement?: containerPlacement;
  /**
   * Spacing for each notification, in px.
   *
   * @defaultValue 16
   */
  spacing?: number;
}

export interface NotificationsContainerSignature {
  Args: NotificationsContainerArgs;
  Element: HTMLDivElement;
}

export default class NotificationsContainer extends Component<NotificationsContainerSignature> {
  @service notifications!: NotificationsService;

  get isTopPlacement(): boolean {
    return !!(this.args.placement && this.args.placement.includes('top'));
  }

  get sortedNotifications(): Notification[] {
    if (this.isTopPlacement) {
      return this.notifications.notifications.slice().reverse();
    } else {
      return this.notifications.notifications;
    }
  }

  @action addSpacing(element: HTMLElement): void {
    const spacing =
      typeof this.args.spacing === 'undefined' ? 16 : this.args.spacing;
    if (this.isTopPlacement) {
      element.style.marginTop = `${spacing}px`;
    }
  }

  <template>
    {{#if this.sortedNotifications}}
      <div
        {{didInsert this.addSpacing}}
        {{didUpdate this.addSpacing @spacing @placement}}
        class={{useFrontileClass
          "notifications-container"
          (if @placement @placement "bottom-right")
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ...attributes
      >
        {{#each this.sortedNotifications as |notification|}}
          <NotificationCard
            @spacing={{@spacing}}
            @placement={{if @placement @placement "bottom-right"}}
            @notification={{notification}}
          />
        {{/each}}
      </div>
    {{/if}}
  </template>
}
