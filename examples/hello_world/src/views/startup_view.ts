import { View, ViewComponentAdder } from 'phaser-mvc';

/**
 * Startup View
 */
export class StartupView extends View<Phaser.Game> {
  public welcomeMessage: string;

  public create(_componentAdder: ViewComponentAdder<Phaser.Game>) {
    this.engine.add.text(100,
                       100,
                       this.welcomeMessage,
                       { fill: '#fff' });
  }
}
