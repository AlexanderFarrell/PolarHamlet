export class AppState {
    constructor(model, view) {
        console.log(model);
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
                if (callback)
                callback();
            })
        })

        function OnError(err){
            if (error)
            error(err);
        }
    }

    End(error, callback){
        this.Model.End(OnError, () => {
            this.View.End(OnError, () => {
                if (callback)
                callback();
            })
        })

        function OnError(err){
            if (error)
            error(err);
        }
    }
}