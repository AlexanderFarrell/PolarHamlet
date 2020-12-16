export class AppState {
    constructor(model, view) {
        //console.log(model);
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

    HandleTransitionError(error){
        this.View.HandleTransitionError(error);
    }

    End(error, callback){
        console.log("End Called");
        this.Model.End(OnError, () => {
            console.log("Model Ended Called");
            this.View.End(OnError, () => {
                console.log("View Ended Called");
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