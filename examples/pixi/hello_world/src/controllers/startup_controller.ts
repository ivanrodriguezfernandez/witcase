import { Controller } from 'witcase';
import { StartupView } from '../views/startup_view';

/**
 * Startup controller
 */
export class StartupController extends Controller {
  private startupView: StartupView;

  constructor(){
    super();
    this.startupView = new StartupView();
    this.startupView.welcomeMessage = 'Hello world!';
  }

  public welcome = () => {
    this.startupView.show();
  }
}