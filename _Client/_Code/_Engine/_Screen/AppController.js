import {ParameterError} from "../_Exceptions/ParameterError";
import {AppState} from "./AppState";

export class AppController {
   constructor() {
        this.Active = null;
        this.Next = null;
        this.IsTransitioning = false;
   }

    SwitchToState(state){
        if (state instanceof AppState){
            this.Next = state;
            this.IsTransitioning = true;
            this.Next.Load((error) => {
                this.IsTransitioning = false;
                throw error;
            }, () => {
                this.IsTransitioning = false;
                if (this.Active){
                    this.Active?.End((error) => {

                    }, () => {
                        this.Active = this.Next;
                        console.log(this.Active);
                        this.Active.Begin();
                    });
                } else {
                    this.Active = this.Next;
                    console.log(this.Active);
                    this.Active.Begin();
                }

            });
        } else {
            throw new ParameterError("SwitchToString", 'screen', 'AppScreen', state);
        }
    }
}