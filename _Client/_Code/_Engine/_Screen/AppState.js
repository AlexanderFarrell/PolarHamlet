export class AppState {
    constructor(model, view) {
        this.Model = model;
        this.View = view;
    }

    Load(error, callback){
        this.Model.Load(OnError, () => {
            this.View.Load(OnError, () => {
                callback();
            })
        });

        function OnError(err){
            error(err);
        }
    }

    Begin(error, callback){
        this.Model.Begin(OnError, () => {
            this.View.Begin(OnError, () => {
                callback();
            })
        })

        function OnError(err){
            error(err);
        }
    }

    End(error, callback){
        this.Model.Begin(OnError, () => {
            this.View.Begin(OnError, () => {
                callback();
            })
        })

        function OnError(err){
            error(err);
        }
    }
}